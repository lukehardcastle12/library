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
function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}
const theHobbit = new Book('the Hobbit', 'J. R. R. Tolkien', 295, true);
myLibrary.push(theHobbit);
const threeBodyProblem = new Book('Three Body Problem', 'Cixin Liu', 302, false);
myLibrary.push(threeBodyProblem);
const mobyDick = new Book('Moby Dick', 'Herman Melville', 427, true);
myLibrary.push(mobyDick);
createDisplay()
function addBookToLibrary(){

}
//create card
//populate card with holders for book data
function createDisplay(){
    const libraryDisplay = document.querySelector('.books');
    for(i=0;i < myLibrary.length;i++){
        const card = document.createElement('div');
        card.classList.add('card');
        const title = document.createElement('p');
        title.textContent = `Title: ${myLibrary[i].title}`;
        const author = document.createElement('p');
        author.textContent = `Author: ${myLibrary[i].author}`;
        const pages = document.createElement('p');
        pages.textContent = `Length: ${myLibrary[i].pages} Pages`;
        let isRead = document.createElement('p');
        isRead.textContent = myLibrary[i].isRead;
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(isRead);
        libraryDisplay.appendChild(card);
    }

}