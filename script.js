



let myLibrary=[]
let tableDiv=document.querySelector(".table")
let addBook=document.querySelector(".add-btn")


function Book(title, author, pages){
    this.title=title,
    this.author=author,
    this.pages=pages

}

function addBookLibrary(book){
    myLibrary.push(book)
}

const book1= new Book("aaa","bbbb",111)
const book2 = new Book("ccc","ddd",222)
const book3 = new Book("eee","fff",333)
addBookLibrary(book1)
addBookLibrary(book2)
addBookLibrary(book3)
console.log(myLibrary);

addBook.addEventListener("click", function(){
    const book4= new Book("ggg","hhh",444)
    addBookLibrary(book4)
    tableDiv.innerHTML +=` 
            <tr>
                <td> ${book4.title}</td>
                <td> ${book4.author}</td>
                <td> ${book4.pages}</td>
            </tr>`;
})



for (let i = 0; i < myLibrary.length; i++) {
    const element = myLibrary[i];
    tableDiv.innerHTML +=` 
            <tr>
                <td> ${element.title}</td>
                <td> ${element.author}</td>
                <td> ${element.pages}</td>
            </tr>`;
    
}