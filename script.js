



const myLibrary=[]


const tableDiv=document.querySelector(".table")
const addBook=document.querySelector(".add-btn")
const cards=document.querySelector(".cards")

 
const title=document.querySelector("#title")
const author=document.querySelector("#author")
const pages=document.querySelector("#pages")    
const read=document.getElementById("read")
const submitBtn=document.querySelector(".submit-btn")
const deleteBtn=document.querySelector(".delete-btn")

function Book(title, author, pages,read){
    this.title=title,
    this.author=author,
    this.pages=pages,
    this.read=read
}

Book.prototype.readed=function(){
    this.read= !this.read
}

function readed(index){
    myLibrary[index].readed()
    render()
}
function addBookLibrary(book){
    myLibrary.push(book)
}

function showForm(){
    let form=document.getElementById("new-book")
    if(form.style.display==="grid"){
        form.style.display= "none"
    }else{
        form.style.display="grid"
    }
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    render()
}
function formSubmit(){
    if (!title.value || !author.value || !pages.value) {
        alert("Please fill out all fields.");
        return;
    }
    let book= new Book(`${title.value}`,`${author.value}`,`${pages.value}`, `${read.checked}` )
    addBookLibrary(book)
    console.log(book);
    title.value=''
    author.value=''
    pages.value=''
    read.checked=''
    render()
}
function render(){
    let libraryElement=document.getElementById("cards")
    libraryElement.innerHTML=""
    
    for (let i = 0; i < myLibrary.length; i++) {
        let newBook = myLibrary[i];
        let bookElement=document.createElement("div");
        bookElement.setAttribute("class","card")
        bookElement.innerHTML=`
      
        <h2 class="book-title">${newBook.title}</h2>
        <p class="book-author">${newBook.author}</p>
        <p class="book-pages">${newBook.pages}</p>
        <p class="read">${newBook.read ? "Readed": "Not Readed"}</p>
        <div>
        <button class="delete-btn" onClick="removeBook(${i})">Delete</button>
        <button class="read-btn" onClick="readed(${i})">Readed</button>
        </div>
        
        `
        libraryElement.appendChild(bookElement)
    }
}

addBook.addEventListener("click",()=> showForm())
submitBtn.addEventListener("click",()=> formSubmit())




class berenalp{
    
}