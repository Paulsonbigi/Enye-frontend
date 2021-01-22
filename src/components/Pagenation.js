import React from 'react'
import { PaginationItem } from 'reactstrap';
import { Nav } from "reactstrap"

const Pagenation = ({ postPerpage, totalPosts, paginate }) => {

    const pageNumbers = []

    for(let i = 1; i  <= Math.ceil(totalPosts / postPerpage); i++){
        pageNumbers.push(i);
    }
    return (
        <Nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </Nav>
    )
}

export default Pagenation
