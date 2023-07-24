



let myLibrary=[]
let tableDiv=document.querySelector(".table")
let addBook=document.querySelector(".add-btn")

let isim=document.querySelector("#title")
let yazar=document.querySelector("#author")
let sayfa=document.querySelector("#pages")    
let submitbtn=document.querySelector("#submit-btn")

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


addBook.addEventListener("click", function(){
    const newBook= new Book(`${isim.value}`,`${yazar.value}`,`${sayfa.value}`)
    addBookLibrary(newBook)
    tableDiv.innerHTML +=` 
            <tr>
                <td> ${newBook.title}</td>
                <td> ${newBook.author}</td>
                <td> ${newBook.pages}</td>
            </tr>`;
})

// submitbtn.addEventListener("click",function(){
//     tableDiv.innerHTML +=` 
//             <tr>
//                 <td> ${}</td>
//                 <td> ${book4.author}</td>
//                 <td> ${book4.pages}</td>
//             </tr>`;
// })




for (let i = 0; i < myLibrary.length; i++) {
    const element = myLibrary[i];
    tableDiv.innerHTML +=` 
            <tr>
                <td> ${element.title}</td>
                <td> ${element.author}</td>
                <td> ${element.pages}</td>
            </tr>`;
    
}