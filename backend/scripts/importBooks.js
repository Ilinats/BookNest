const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const dataFolder = path.join(__dirname, 'data');

async function importAllCSVs() {
  const files = fs.readdirSync(dataFolder).filter(file => file.endsWith('.csv'));

  for (const file of files) {
    const filePath = path.join(dataFolder, file);
    console.log(`📥 Импортиране от файл: ${file}`);
    await importFromCSV(filePath);
  }

  console.log('✅ Импортирането приключи');
  await prisma.$disconnect();
}

async function importFromCSV(filePath) {
  return new Promise((resolve, reject) => {
    const books = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        try {
          const year = parseInt(row.PublishYear);
          const month = parseInt(row.PublishDay);
          const day = parseInt(row.PublishMonth);

          const publishDate = (year && month && day)
            ? new Date(year, month - 1, day)
            : null;

          const book = {
            title: row.Name,
            author: row.Authors,
            publishDate,
            averageRating: isNaN(parseFloat(row.Rating)) ? null : parseFloat(row.Rating),
            language: row.Language || null,
            reviewCount: parseInt(row.CountsOfReview || '0'),
            pages: row.PagesNumber || row.pagesNumber
              ? parseInt(row.PagesNumber || row.pagesNumber)
              : 0,
            description: 'Description' in row && row.Description?.trim() !== '' ? row.Description.trim() : null,
          };

          books.push(book);
        } catch (err) {
          console.error(`❌ Error processing row:`, row, err);
        }
      })
      .on('end', async () => {
        try {
          for (const book of books) {
            await prisma.book.create({ data: book });
          }
          resolve();
        } catch (err) {
          console.error(`❌ Error saving to DB:`, err);
          reject(err);
        }
      });
  });
}

importAllCSVs();