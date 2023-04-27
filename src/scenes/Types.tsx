import React, {useEffect, useMemo, useState} from "react";
import axios from "axios";
import PokemonList from "../components/PokemonList";

interface ListElement {
    name: string;
    url: string;
}

type SortOrder = "asc" | "desc";

function Types (){
    const [types, setTypes] = useState<ListElement[]>([]);
    const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
    const [search, setSearch]: [string, (search: string) => void] = useState("")


    function sortAsc(types: ListElement[]): ListElement[]{
        return (types.sort((a, b) => (a.name < b.name ? -1 : 1)));
    }

    function sortDesc(types: ListElement[]): ListElement[]{
        return (types.sort((a, b) => (a.name > b.name ? -1 : 1)));
    }

    let sortedList = useMemo(() => sortOrder === 'asc' ? sortAsc(types):sortDesc(types), [types, sortOrder])

    const handleChange = (e: { target: { value: string; }; }) => {
        setSearch(e.target.value);
    };

    const handleClick = () => {
        setSortOrder((curr) => (curr === 'asc' ? 'desc' : 'asc'));
    }


    useEffect(() => {
        async function fetchData () {
            try {
                const res = await axios.get('https://pokeapi.co/api/v2/type/')
                setTypes([...res.data.results]);
            } catch (e){
                console.log(e);
            }
        }
        fetchData();
    }, [types, setTypes]);

    return(
        <div style={{
            backgroundColor: "#55a15a",
            borderRadius: 8,
            display: "flex",
            justifyContent: "center",
            marginLeft: 24,
            marginRight: 24,
            marginBottom: 8,
        }}>
            <div style={{
                padding: 4,
                backgroundColor: '#ccc',
                borderRadius: 8,
                margin: 8,
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: 'center',
                    width: '100%',
                    margin: 20
                }}>
                    <div style={{
                        padding: 8,
                        borderRadius: 8,
                        backgroundColor: 'white',
                        flex: 2
                    }}>
                        <h3>Lista dei tipi</h3>
                    </div>
                    <div style={{
                        alignSelf: 'center',
                        flex: 1
                    }}>
                        <button onClick={handleClick}>Sort</button>
                    </div>

                </div>

                <div>
                    <input style={{width: '80%'}} placeholder='Cerca un tipo' onChange={handleChange}/>
                </div>

                <ul style={{
                    padding: 20,
                    display: "flex",
                    flexDirection: 'column'
                }}>
                    {sortedList.map((pokemon) => {
                        if(search === '' || pokemon.name.toLowerCase().includes(search.toLowerCase())){
                            return <div key={pokemon.url}><PokemonList name={pokemon.name} /></div>
                        }
                        return null;
                    })
                    }
                </ul>
            </div>

        </div>
    )
}

export default Types;