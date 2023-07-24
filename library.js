let myLibrary = [];
//TODO
//function that loops array
//display each book on the page

//add new book button
//brings up form that lets users add
//author title pages isRead
//might use event.preventDefault for form submit button

//add a byttib ib each books display that allows it to be removed from the library
//add a button that toggles the read status
//for this create a function that toggles the status on the book prototype instance


//WANTS
//make add book a modal
//rename filter to sort
function Book(id, title, author, pages, isRead){
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}
//starting data
const theHobbit = new Book(1, 'the Hobbit', 'J. R. R. Tolkien', 295, true);
myLibrary.push(theHobbit);
const threeBodyProblem = new Book(2, 'Three Body Problem', 'Cixin Liu', 448, false);
myLibrary.push(threeBodyProblem);
const mobyDick = new Book(3, 'Moby Dick', 'Herman Melville', 427, true);
myLibrary.push(mobyDick);
createDisplay()
//show the add book form when add book is clicked and hide when clicked again
//defaults to hidden
const showFormButton = document.querySelector('#show-form');
const bookForm = document.querySelector('.bookform');
bookForm.style.display = "none"
showFormButton.addEventListener('click', function(){
    if(bookForm.style.display === "none"){
        bookForm.style.display = "block";
    }else {
        bookForm.style.display = "none";
    }
});
//create card
//populate card with holders for book data
function createDisplay(){
    const libraryDisplay = document.querySelector('.books');
    for(i=0;i < myLibrary.length;i++){
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('id', (i+1));
        
        const title = document.createElement('p');
        title.innerHTML = `Title: ${myLibrary[i].title}`;
        const author = document.createElement('p');
        author.innerHTML = `Author: ${myLibrary[i].author}`;
        const pages = document.createElement('p');
        pages.innerHTML = `Length: ${myLibrary[i].pages} Pages`;
        
        let readButton = document.createElement('button');
        myLibrary[i].isRead ? readButton.textContent = "Read" : readButton.textContent = "Not Read"

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove Book"
        removeButton.addEventListener('click',function(event){
            console.log(event.target.parentElement.id);
            event.target.parentElement.remove();
        });

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(readButton);
        card.appendChild(removeButton);
        libraryDisplay.appendChild(card);
    }
}
//when the form is submited run this function to add the book
const createBookButton = document.querySelector('#add-btn');
createBookButton.addEventListener('click', () => addBookToLibrary());

function addBookToLibrary(){
    const libraryDisplay = document.querySelector('.books');
    const titleText = document.querySelector('#book-title');
    const authorText = document.querySelector('#book-author');
    const pagesNumber = document.querySelector('#book-pages');
    const isReadStatus = document.querySelector('#book-isRead');

   
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('id', (myLibrary.length+1));

    const title = document.createElement('p');
    title.innerHTML = `Title: ${titleText.value}`;
    console.log(titleText.value);
    const author = document.createElement('p');
    author.innerHTML = `Author: ${authorText.value}`;

    const pages = document.createElement('p');
    pages.innerHTML = `Length: ${pagesNumber.value} Pages`;

    let readButton = document.createElement('button');
    readButton.setAttribute('id',(myLibrary.length + 1));
    if(isReadStatus.checked === true){
        readButton.innerHTML = "Read"
    }else {
        readButton.innerHTML = "Not Read";
    }
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove Book";
    removeButton.addEventListener('click', function(event){
        console.log(event.target.parentElement.id);
        event.target.parentElement.remove();
        
    });
    const newBook = new Book((myLibrary.length + 1), titleText.value, authorText.value, pagesNumber.value, isReadStatus.checked);
    myLibrary.push(newBook);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(readButton);
    card.appendChild(removeButton);
    libraryDisplay.appendChild(card);
}