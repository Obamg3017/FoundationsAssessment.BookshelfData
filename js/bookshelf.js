class Book{
    constructor(title, author, language, subject){
        this.title = title;
        this.author = author;
        this.language = language;
        this.subject = subject;
        
    }
    render(){
        //render function is to create elements to render to the browser
        //each element corresponds to properties inside "class Book"
        const bookDetails = document.createElement("div");
        
        const h1 = document.createElement("h1");
        h1.textContent = `Title: ${this.title}`;

        const h2 = document.createElement("h2");
        h2.textContent = `Author: ${this.author}`;

        const h3 = document.createElement("h3");
        h3.textContent = `Language: ${this.language}`;

        const p = document.createElement("p");
        p.textContent = `Subject: ${this.subject}`;

        bookDetails.append(h1, h2, h3, p);

        return bookDetails;

    }
}

class Bookshelf{
    constructor(){
        this.bookData = [];
    }
    
    seed(bookData){
        //seed method is creating a new instance and looping through each
        //object within bookData and pushing into empty arrary
    for(const book of bookData){
        const newBook = new Book(book.title, book.author, book.language, book.subject);
        this.bookData.push(newBook)
    }
    }

    render(){
        const bookShelfInfo = document.createElement("div");
        
        for(const book of this.bookData){
            bookShelfInfo.append(book.render())
        }
        //appending bookshelfInfo to the browser(document.body)
        document.body.append(bookShelfInfo);
    }
}

