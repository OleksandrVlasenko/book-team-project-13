import { renderCardOfBooks } from "./shopping-list";

export function handleDeleteBookBtn(e) {
    const idBookToDelete = e.currentTarget.attributes.id.nodeValue;    
    const goalDeleteBtn = document.querySelector(`.shopping-list__icon-deleteBtn`)

    if (goalDeleteBtn !== e.target) {
        return
    } else {
        const storedBooks = JSON.parse(localStorage.getItem("idBooks"));        
        const updatedBooks = storedBooks.filter(book => book._id !== idBookToDelete);
        localStorage.setItem("idBooks", JSON.stringify(updatedBooks));
        renderCardOfBooks();
    }
}