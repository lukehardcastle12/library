//TODO
//function that loops array DONE
//display each book on the page DONE

//add new book button DONE
//brings up form that lets users add DONE
//author title pages isRead DONE
//might use event.preventDefault for form submit button NOT USED

//add a byttib ib each books display that allows it to be removed from the library DONE
//add a button that toggles the read status DONE
//for this create a function that toggles the status on the book prototype instance

//TODO TOMMOROW
//STYLING FOR CARDS
//STYLING FOR SIDEBAR
//FUNCTIONALITY OF READ BUTTON 
//SHOULD CHANGE isRead ATTRIBUTE
//ASWELL AS COLOR OF BUTTON
//WANTS
//make add book a modal
//rename filter to sort

//create the empty library array
let myLibrary = [];
// this is where all cards are appended to
const libraryDisplay = document.querySelector('.books');

//constructs the book object
function Book(id, title, author, pages, isRead){
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}
//initialises the id count so that no two books get the same id to avoid errors
let idCount = myLibrary.length + 1;
//starting data for testing
const theHobbit = new Book(idCount, 'the Hobbit', 'J. R. R. Tolkien', 295, true);
createCard(idCount, 'the Hobbit', 'J. R. R. Tolkien', 295, true);
myLibrary.push(theHobbit);
//book 2
idCount = myLibrary.length + 1;
const threeBodyProblem = new Book(idCount, 'Three Body Problem', 'Cixin Liu', 448, false);
createCard(idCount, 'Three Body Problem', 'Cixin Liu', 448, false);
myLibrary.push(threeBodyProblem);
//book 3
idCount = myLibrary.length + 1;
const mobyDick = new Book(idCount, 'Moby Dick', 'Herman Melville', 427, true);
createCard(idCount, 'Moby Dick', 'Herman Melville', 427, true);
myLibrary.push(mobyDick);



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
const createBookButton = document.querySelector('#add-btn');
createBookButton.addEventListener('click', () => addBookToLibrary());

//adds book to array and calls the card creation
function addBookToLibrary(){
    idCount++;
    //selects all the information boxes
    const titleText = document.querySelector('#book-title');
    const authorText = document.querySelector('#book-author');
    const pagesNumber = document.querySelector('#book-pages');
    const isReadStatus = document.querySelector('#book-isRead');
    //creates a new book with the information values and the checkbox's status as a bool
    const newBook = new Book((idCount), titleText.value, authorText.value, pagesNumber.value, isReadStatus.checked);
    //pushes the new book to the end of the array
    myLibrary.push(newBook);
    //creates a card with the books information
    createCard((idCount), titleText.value, authorText.value, pagesNumber.value, isReadStatus.checked); 
}

function removeBook(event){
    //selects the id of the card to find the id of the book to be removed as they are always the same
    //this has to be turned into an int as the DOM selector returns a string and the id is an int
    // if it is not parsed it's equivelent to id === 'id' which is always false
    targetId = parseInt(event.target.parentElement.parentElement.id,10);
    //iterates backwards through the array to match the id and then removes that book from the array
    for(i=myLibrary.length -1;i>=0;--i){
        if(myLibrary[i].id === targetId){
            myLibrary.splice(i,1);
        }
    }
    //removes the card after the book has been removed from the array
    event.target.parentElement.parentElement.remove();
}

//called by addBookToLibrary() is passed all the book object attributes and creates a card out of the information
function createCard(id, title, author, pages, isRead){
    //create card div with the id of the book it will be hosting
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('id', id);

    //get the information about the book and set the text elements to match
    //set title element
    const titleElement = document.createElement('p');
    titleElement.innerHTML = `Title: ${title}`;
    //set author element
    const authorElement = document.createElement('p');
    authorElement.innerHTML = `Author: ${author}`;
    //set pages element
    const pagesElement = document.createElement('p');
    pagesElement.innerHTML = `Length: ${pages} Pages`;
    //create read button and set the color to reflect the read status
    let readButton = document.createElement('button');
    if(isRead){
        readButton.innerHTML = "Read"
        readButton.classList.add('read-button');
    }else {
        readButton.innerHTML = "Not Read";
        readButton.classList.add('unread-button');
    }
    //adds an event on click to toggle the read status
    readButton.addEventListener('click', function(event){
        toggleRead(event);
    });
    readButton.addEventListener('click', () =>{
        if(readButton.classList.contains('unread-button')){
            readButton.classList.add('read-button');
            readButton.classList.remove('unread-button');
            readButton.innerHTML = "Read";
        }else{
            readButton.classList.remove('read-button');
            readButton.classList.add('unread-button');
            readButton.innerHTML = "Not Read";
        }
    });
    //create remove button
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.textContent = "Remove Book";
    //adds an event on click to remove the card and the book from the array
    removeButton.addEventListener('click', function(event){
        removeBook(event);
    });

    //creats the two div groupings for styling
    const info = document.createElement('div');
    info.classList.add('info');
    const buttons = document.createElement('div');
    buttons.classList.add('buttons');

    //add all info to info div
    info.appendChild(titleElement);
    info.appendChild(authorElement);
    info.appendChild(pagesElement);
    //add buttons to buttons div
    buttons.appendChild(readButton);
    buttons.appendChild(removeButton);
    //adds both divs to card
    card.appendChild(info);
    card.appendChild(buttons);
    //adds completed card to the page
    libraryDisplay.appendChild(card);
}

function toggleRead(event){
    targetId = parseInt(event.target.parentElement.parentElement.id,10);
    //iterates backwards through the array to match the id and then removes that book from the array
    for(i=myLibrary.length -1;i>=0;--i){
        if(myLibrary[i].id === targetId){
            myLibrary[i].isRead = !myLibrary[i].isRead;
        }
    }
}