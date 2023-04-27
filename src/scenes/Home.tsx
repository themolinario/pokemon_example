import React, {useEffect, useState} from "react";
import axios from "axios";
import PokemonList from "../components/PokemonList";

interface ListElement {
    name: string;
    url: string;
}

type SortOrder = "asc" | "desc";

function Home (): JSX.Element{
    const [pokedex, setPokedex] = useState<ListElement[]>([]);
    const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

    function sortData(){
            pokedex.sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            }
    }


    useEffect(() => {
        async function fetchData () {
            try {
                const res = await axios.get('https://pokeapi.co/api/v2/pokemon/')
                setPokedex([...res.data.results]);
            } catch (e){
                console.log(e);
            }
        }
        fetchData();
    }, [pokedex, setPokedex]);


    return(
        <div style={{
            backgroundColor: "#55a15a",
            borderRadius: 8,
            display: "flex",
            justifyContent: "center"
        }}>
            <div style={{
                padding: 4,
                backgroundColor: '#ccc',
                borderRadius: 8,
            }}>
                <div>
                    <h3>Lista dei pokemon</h3>
                    <button onClick={sortData}>Sort</button>
                </div>

                <ul style={{
                    padding: 20,
                }}>
                    {sortData().map(pokemon => <div key={pokemon.url}><PokemonList name={pokemon.name} /></div>)}
                </ul>
            </div>

        </div>
    )
}

export default Home;