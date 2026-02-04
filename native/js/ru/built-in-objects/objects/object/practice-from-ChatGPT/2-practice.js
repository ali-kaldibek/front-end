const library = {
    name: "Abay",
    location: "Shymkent",
    books: [],
    addBook(bookName) {
        this.books.push(bookName)
    },
    removeBook(bookName) {
        if (bookName === this.books) {
            this.books.delete(bookName)
        }
        else {
            addBook(bookName)
        }
    },
    listBooks() {
        console.log(this.books)
    }
}


library.addBook("The Book of Words")
library.addBook("Selected Poems")
library.listBooks()
library.removeBook("Selected Poems")
library.listBooks();

// console.log(library)

