// Test environment setup
beforeAll(() => {
  process.env.NODE_ENV = 'test';
  process.env.JWT_SECRET = 'test-secret';
});

// Add any global test setup here if needed 