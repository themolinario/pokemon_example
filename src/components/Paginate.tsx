import React from 'react';

interface PaginateProps{
    elementsPerPage: number;
    totalElements: number;
    paginate: (number: number) => void;
}

const Paginate = ({ elementsPerPage, totalElements, paginate }: PaginateProps): JSX.Element => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalElements / elementsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div style={{margin: 10, marginRight: 30}} >
            <ul style={{display: "flex", flexDirection: 'row'}}>
                {pageNumbers.map((number) => (
                        <button
                            style={{
                                width: '100%',
                            }}
                            onClick={() => paginate(number)}
                        >
                            <h2>{number}</h2>
                        </button>
                ))}
            </ul>
        </div>
    );
};

export default Paginate;