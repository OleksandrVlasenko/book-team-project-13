import Pagination from 'tui-pagination';

const container = document.getElementById('tui-pagination-container');
console.log(container)
const instance = new Pagination(container, {
        totalItems: 500,
        itemsPerPage: 10,
        visiblePages: 3,
        centerAlign: true
    });

instance.getCurrentPage();
