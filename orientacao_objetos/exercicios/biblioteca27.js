class Book {
  Title
  Author
  PublishingCompany
  PublicationYear
  Availability

  constructor(title, author, publishingCompany, publicationYear) {
    this.Title = title;
    this.Author = author;
    this.PublishingCompany = publishingCompany;
    this.PublicationYear = publicationYear;
    this.Availability = true;
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
  BookCollection

  constructor(name, address, telephone, bookCollection) {
    this.Name = name;
    this.Address = address;
    this.Telephone = telephone;
    this.BookCollection = [];
  }

  searchBook(bookName) {

  }

  bookLoan(bookName) {

  }

  bookReturn(bookName) {
    
  }
}
