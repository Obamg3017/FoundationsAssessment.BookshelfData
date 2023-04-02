//invoking render function to list all books to the browser
const bookShelfInstance = new Bookshelf();

bookShelfInstance.seed(bookData);

bookShelfInstance.render();