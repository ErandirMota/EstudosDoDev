class Book {
  Title
  Author
  PublishingCompany
  PublicationYear
  Availability = true

  constructor(title, author, publishingCompany, publicationYear) {
    this.Title = title;
    this.Author = author;
    this.PublishingCompany = publishingCompany;
    this.PublicationYear = publicationYear;
  }
}

const books = [];

let book1 = new Book('Good Book', 'Peter', 'New', 2015);
books.push(book1);

let book2 = new Book('Greatest Book', 'Junior', 'Live', 2010);
books.push(book2);

let book3 = new Book('Golden Book', 'Max', 'Future', 2018);
books.push(book3);

class Library {
  Name
  Address
  Telephone
  BookCollection = []

  constructor(name, address, telephone, collection) {
    this.Name = name;
    this.Address = address;
    this.Telephone = telephone;
    this.BookCollection = collection
  }

  searchBookByTitle(title) {
    this.BookCollection.forEach (book => {
      if (book.Title == title) {
        console.log(book);
      }
    })
  }

  bookLoan(title) {
    let loan = false
    this.BookCollection.forEach (book => {
      if (book.Title == title) {
        if (book.Availability == true) {
          book.Availability = false;
          loan = true;
        }
      }
    })
    if (loan) {
      return true;
    } else {
      return false;
    }
  }

  bookReturn(title) {
    books.forEach (book => {
      if (book.Title = title) {
        book.Availability = true;
        console.log("Returned Book");
      }
    })
  }
}

let library = new Library("Old Library", "Street Town", "13243545");

library.searchBookByTitle("Golden Book");
library.bookLoan("Good Book");
library.bookReturn("Good Book");

