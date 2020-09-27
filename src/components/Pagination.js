import React from 'react'

export default function Pagination(props) {
    let pages = props.pages

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={pages.prevPage === null ? "page-item disabled" : "page-item"}><a className="page-link" aria-disabled={pages.prevPage === null ? "true" : "false"} data-url={pages.prevPage} onClick={props.handlePaginate} href="#">Previous</a></li>
                <li className={pages.nextPage === null ? "page-item disabled" : "page-item"}><a className="page-link" aria-disabled={pages.nextPage === null ? "true" : "false"} data-url={pages.nextPage} onClick={props.handlePaginate} href="#">Next</a></li>
            </ul>
        </nav>
    )
}
