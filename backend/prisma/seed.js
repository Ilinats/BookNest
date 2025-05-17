const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  //TODO: Update 
  const moods = ['Dark', 'Wholesome', 'Funny', 'Suspenseful', 'Romantic', 'Melancholic'];
  const tropes = ['Enemies to Lovers', 'Found Family', 'Slow Burn', 'Love Triangle', 'Grumpy x Sunshine'];
  const genres = ['Fantasy', 'Romance', 'Sci-Fi', 'Thriller', 'Historical', 'Contemporary'];

  await Promise.all([
    ...moods.map(name => prisma.mood.upsert({
      where: { name },
      update: {},
      create: { name } 
    })),
    ...tropes.map(name => prisma.trope.upsert({
      where: { name },
      update: {},
      create: { name }
    })),
    ...genres.map(name => prisma.genre.upsert({
      where: { name },
      update: {},
      create: { name }
    }))
  ]);
}

main()
  .then(() => {
    console.log("Seeded successfully");
    return prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });