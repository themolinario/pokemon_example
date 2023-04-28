
import PokemonListElement from "./PokemonListElement";
import React, {useMemo, useState} from "react";
import './PokemonList.css';
import Paginate from "./Paginate";
type SortOrder = "asc" | "desc";

interface ListElement {
    name: string;
    url: string;
}

interface ListProps {
    list: Array<ListElement>;
    onItemClick?: (item: string) => void;
    title: string;
    sortBy: keyof ListElement;
    searchBy: keyof ListElement;
}


function PokemonList ({list, onItemClick, title, sortBy, searchBy}: ListProps): JSX.Element{


    const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
    const [search, setSearch]: [string, (search: string) => void] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [elementsPerPage] = useState(5);

    const [filteredElements, currentElements] = useMemo(() => {
        const indexOfLastElement = currentPage * elementsPerPage;
        const indexOfFirstElement = indexOfLastElement - elementsPerPage;
        const filtered = search ? filterPokemon(list, search, searchBy) : list;
        const sorted = sortOrder === 'asc' ? sortAsc(filtered, sortBy) : sortDesc(filtered, sortBy)
        const paginated = sorted.slice(indexOfFirstElement, indexOfLastElement);
        return [filtered, paginated];
    }, [list, sortOrder, currentPage, elementsPerPage, search, sortBy, searchBy]);

    const handleChange = (e: { target: { value: string; }; }) => {
        setSearch(e.target.value);
    };

    const handleClick = () => {
        setSortOrder((curr) => (curr === 'asc' ? 'desc' : 'asc'));
    }

    const paginate = (pageNumber: number) => {
        setCurrentPage (pageNumber);
    }



    return (
        <div className='Container'>
            <div className='InnerContainer'>
                <div className='TitleBox'>
                    <div className='InnerTitleBox'>
                        <h3>{title}</h3>
                    </div>
                    <div className='SortButtonContainer'>
                        <button onClick={handleClick}>Sort</button>
                    </div>

                </div>

                <div>
                    <input style={{width: '80%'}} placeholder='Cerca un pokemon..' onChange={handleChange}/>
                </div>

                <ul className='ListContainer'>
                    {currentElements.map((pokemon) => {
                            return <div key={pokemon.url}><PokemonListElement name={pokemon.name} onCLick={(p) => onItemClick?.(p)}/></div>

                    })
                    }
                </ul>
                <Paginate elementsPerPage={elementsPerPage} totalElements={filteredElements.length} paginate={paginate} />
            </div>

        </div>
    )
}


function sortAsc(pokedex: ListElement[], sortBy: keyof ListElement): ListElement[]{
    return (pokedex.sort((a, b) => (a[sortBy] < b[sortBy] ? -1 : 1)));
}

function sortDesc(pokedex: ListElement[], sortBy: keyof ListElement): ListElement[]{
    return (pokedex.sort((a, b) => (a[sortBy] > b[sortBy] ? -1 : 1)));
}

function filterPokemon(pokedex: ListElement[], search: string, searchBy: keyof ListElement): ListElement[] {
    return pokedex.filter((pokemon) => pokemon[searchBy].toLowerCase().includes(search.toLowerCase()));
}

export default PokemonList;