//? 2.Task: Object Manipulation

//? Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
    {
        title:'Tree',
        author:'Mr. Joy',
        year: 2014
    },
    {
        title:'Genius',
        author:'Mr. Durjoy',
        year: 2010
    },
    {
        title:'School',
        author:'Ms. Borsha',
        year: 2016
    },
]

const booksTitle = (books)=>{
   
    const bookTitle = books.map((book)=>book.title)
    return bookTitle
}

const bookWithTitle = booksTitle(books)

console.log(bookWithTitle)