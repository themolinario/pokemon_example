import {useEffect, useState} from "react";
import axios from "axios";


function Home (): JSX.Element{
    const [pokedex, setPokedex] = useState([] as any[]);

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
                        <h3>Lista dei pokemon</h3>
                        <ul>
                            {pokedex.map(pokemon => <li key={pokemon.url}>{pokemon.name}</li>)}
                        </ul>
            </div>

        </div>
    )
}

export default Home;