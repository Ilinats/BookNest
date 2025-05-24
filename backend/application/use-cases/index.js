const GetBooksUseCase = require('./book/GetBooksUseCase');
const GetBookByIdUseCase = require('./book/GetBookByIdUseCase');
const CreateBookUseCase = require('./book/CreateBookUseCase');
const UpdateBookUseCase = require('./book/UpdateBookUseCase');
const DeleteBookUseCase = require('./book/DeleteBookUseCase');

const bookUseCases = {
  GetBooksUseCase,
  GetBookByIdUseCase,
  CreateBookUseCase,
  UpdateBookUseCase,
  DeleteBookUseCase
};

module.exports = {
  ...bookUseCases,
  bookUseCases,
  
  createBookUseCases: (bookRepository) => ({
    getBooksUseCase: new GetBooksUseCase(bookRepository),
    getBookByIdUseCase: new GetBookByIdUseCase(bookRepository),
    createBookUseCase: new CreateBookUseCase(bookRepository),
    updateBookUseCase: new UpdateBookUseCase(bookRepository),
    deleteBookUseCase: new DeleteBookUseCase(bookRepository)
  }),

  GetBooksUseCase,
  GetBookByIdUseCase,
  CreateBookUseCase,
  UpdateBookUseCase,
  DeleteBookUseCase
};