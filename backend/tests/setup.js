const { PrismaClient } = require('@prisma/client');

process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test-secret-key';

const TEST_DATABASE_URL = 'postgresql://postgres:marmalad@localhost:5432/booknest_test';

process.env.DATABASE_URL = TEST_DATABASE_URL;

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: TEST_DATABASE_URL
    }
  }
});

// Global test setup
beforeAll(async () => {
  // Ensure database schema is up to date
  try {
    // This will create tables if they don't exist
    await prisma.$executeRaw`SELECT 1`;
  } catch (error) {
    console.log('Database connection failed:', error.message);
    throw new Error('Test database not available. Please run: npm run test:db:setup');
  }
});

// Clean up after each test
afterEach(async () => {
  // Clean up test data after each test
  const tablenames = await prisma.$queryRaw`
    SELECT tablename FROM pg_tables WHERE schemaname='public'
  `;
  
  const tables = tablenames
    .map(({ tablename }) => tablename)
    .filter(name => name !== '_prisma_migrations')
    .map(name => `"public"."${name}"`)
    .join(', ');

  try {
    if (tables) {
      await prisma.$executeRawUnsafe(`TRUNCATE TABLE ${tables} CASCADE;`);
    }
  } catch (error) {
    console.log('Could not truncate tables:', error);
  }
});

// Global cleanup
afterAll(async () => {
  await prisma.$disconnect();
});

// Set longer timeout for database operations
jest.setTimeout(30000);

// Export for use in tests
global.testPrisma = prisma;

// Suppress console during tests (optional)
if (process.env.SUPPRESS_TEST_LOGS === 'true') {
  global.console = {
    ...console,
    log: jest.fn(),
    debug: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
  };
}

module.exports = { prisma };