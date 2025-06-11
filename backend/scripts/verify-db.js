const { PrismaClient } = require('@prisma/client');
require('dotenv').config({ path: '.env.test' });

async function verifyDatabase() {
  const prisma = new PrismaClient();
  
  try {
    console.log('Testing database connection...');
    console.log('Database URL:', process.env.DATABASE_URL);
    
    // Test connection
    await prisma.$connect();
    console.log('✅ Successfully connected to the database');
    
    // Test query
    const result = await prisma.$queryRaw`SELECT 1`;
    console.log('✅ Successfully executed a test query');
    
    // Check if tables exist
    const tables = await prisma.$queryRaw`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `;
    
    console.log('\nExisting tables:');
    tables.forEach(table => console.log(`- ${table.table_name}`));
    
  } catch (error) {
    console.error('❌ Database verification failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

verifyDatabase(); 