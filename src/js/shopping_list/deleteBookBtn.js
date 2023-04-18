import { renderCardOfBooks } from "./shopping-list";

export function handleDeleteBookBtn(e) {
    const goalDeleteBtn = e.target.closest(`.shopping-list__icon-deleteBtn`);
    
    if (goalDeleteBtn !== e.target) {
        return;
    }
        else {
        const idBookToDelete = e.target.attributes.id.nodeValue;
        const storedBooks = JSON.parse(localStorage.getItem("idBooks"));        
        const updatedBooks = storedBooks.filter(book => book._id !== idBookToDelete);
        localStorage.setItem("idBooks", JSON.stringify(updatedBooks));
        renderCardOfBooks();
    }
}