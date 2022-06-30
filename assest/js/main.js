// class Book {
//     constructor(titel, auther, isbn) {
//         this.titel = titel;
//         this.auther = auther;
//         this.isbn = isbn;
//     }
// }
// class BookStore {
//     static getBook() {
//         let book;
//         if (localStorage.getItem("book") === null) {
//             book = []
//         } else {
//             book = JSON.parse(localStorage.getItem("book"))
//         }
//         return book;
//     }
//     static setBook(e) {
//         let book = BookStore.getBook();
//         book.push(e)
//         localStorage.setItem("book", JSON.stringify(book))
//     }
//     static removeBook(isbn) {
//         let book = BookStore.getBook()

//         book.forEach((e, i) => {
//             if (e.isbn === isbn) {
//                 book.splice(i, 1)
//             }

//         });
//         localStorage.setItem("book", JSON.stringify(book))

//     }
// }

// class Book_function {
//     static displayBook() {
//         let book = BookStore.getBook();
//         book.forEach(e => {
//             Book_function.addBookList(e);
//         });

//     }
//     static addBookList(book) {
//         let tr_row = document.createElement("tr");
//         let table_body = document.querySelector(".table_body");
//         tr_row.innerHTML = `
//         <td>${book.titel}</td>
//         <td>${book.auther}</td>
//         <td>${book.isbn}</td>
// <td><a href="#" class="delate btn-info btn">X</a></td>

//         `;
//         table_body.appendChild(tr_row);
//     }
//     static showAlert(msg) {
//         var container = document.querySelector(".container");
//         var alertBox = document.createElement("div");
//         alertBox.className = "btn-danger p-3 alertBox"
//         alertBox.appendChild(document.createTextNode(msg))
//         container.insertBefore(alertBox, container.children[1])

//     }
//     static clearFilds() {
//         const titel = document.querySelector("#titel").value = "";
//         const auther = document.querySelector("#auther").value = "";
//         const isbn = document.querySelector("#isbn").value = "";

//     }
//     static removeBookListRow(el) {
//         if (el.classList.contains("delate")) {
//             el.parentElement.parentElement.remove()
//         }

//     }

// }


// document.querySelector("#book_form").addEventListener('submit', (e) => {
//     e.preventDefault()
//     const titel = document.querySelector("#titel").value;
//     const auther = document.querySelector("#auther").value;
//     const isbn = document.querySelector("#isbn").value;
//     const book = new Book(titel, auther, isbn);
//     if (titel === "" || auther === "" || isbn === "") {
//         Book_function.showAlert("Fill In All Fileds")
//         var alertBox = document.querySelector(".alertBox")
//         setTimeout(() => { alertBox.remove() }, 2000)
//     } else {
//         Book_function.addBookList(book)
//         BookStore.setBook(book)

//     }
//     Book_function.clearFilds()
// })

// document.querySelector(".table_body").addEventListener("click", e => {
//     Book_function.removeBookListRow(e.target)
//     BookStore.removeBook(e.target.parentElement.previousElementSibling.textContent)

// })
// document.addEventListener("DOMContentLoaded", () => {
//     Book_function.displayBook();
// })

class Book {
    constructor(book_name, auther, isbn, time) {
        this.titel = book_name;
        this.auther = auther;
        this.isbn = isbn;
        this.time = time;
    }
}
class localStorageBook {

    static getBook() {
        let book;
        if (localStorage.getItem("book") === null) {
            book = []
        } else {
            book = JSON.parse(localStorage.getItem("book"))
        }
        return book;
    }
    static setBook(e) {
        let book = localStorageBook.getBook()
        book.push(e)
        localStorage.setItem("book", JSON.stringify(book))

    }
    static remobeBook() {}
}
class Book_Function {
    static book_list() {
        let book = localStorageBook.getBook()
        book.forEach(e => {
            Book_Function.displayBook(e)
        })

    }
    static displayBook(book) {
        let table_body = document.querySelector(".table_body");
        let tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${book.titel}</td>
        <td>${book.auther}</td>
        <td>${book.isbn}</td>
        <td>${book.time}</td>
        <a href="#" class="btn btn-danger">X</a>
        `
        table_body.insertAdjacentElement("afterbegin", tr)
    }
}

document.querySelector("#book_form").addEventListener("submit", e => {
    var book_name = document.querySelector("#titel").value;
    var auther = document.querySelector("#auther").value;
    var isbn = document.querySelector("#isbn").value;
    var currentTime = new Date;
    let time = currentTime.getHours() + ": " + currentTime.getMinutes()
    let book = new Book(book_name, auther, isbn, time)
    Book_Function.displayBook(book);
    localStorageBook.setBook(book);
})
document.addEventListener("DOMContentLoaded", () => {
    Book_Function.book_list()
})