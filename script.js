



let myLibrary=[]
let tableDiv=document.querySelector(".table")
let addBook=document.querySelector(".add-btn")
let cards=document.querySelector(".cards")


let isim=document.querySelector("#title")
let yazar=document.querySelector("#author")
let sayfa=document.querySelector("#pages")    
let submitbtn=document.querySelector(".submit-btn")


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




submitbtn.addEventListener("click",()=> formSubmit())

function formSubmit(){
    const newBook= new Book(`${isim.value}`,`${yazar.value}`,`${sayfa.value}` )
    addBookLibrary(newBook)
    cards.innerHTML +=`
    <div class="card">
    <h2 class="book-title">${newBook.title}</h2>
    <p class="book-author">${newBook.author}</p>
    <p class="book-pages">${newBook.pages}</p>
    <button class="delete-btn">Delete</button>
    </div>
    `

    for (let i = 0; i < myLibrary.length; i++) {
        const element = myLibrary[i];
        console.log(element);
    }
}

addBook.addEventListener("click",()=> showForm())

function showForm(){
    let form=document.getElementById("new-book")
    if(form.style.display==="grid"){
        form.style.display= "none"
    }else{
        form.style.display="grid"
    }
}



for (let i = 0; i < myLibrary.length; i++) {
    const element = myLibrary[i];
    cards.innerHTML +=`
    <div class="card">
    <h2 class="book-title">${element.title}</h2>
    <p class="book-author">${element.author}</p>
    <p class="book-pages">${element.pages}</p>
    <button class="delete-btn">Delete</button>
    </div>`;

    console.log(myLibrary[i]);
    
}

