import {useEffect, useState} from "react";
import axios from "axios";


function Home (): JSX.Element{
    const [pokedex, setPokedex] = useState([] as any[]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData () {
        await axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(res => {
                setPokedex(res.data);
            });

    }


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
                <table>
                    <thead>
                        <h3>Lista dei pokemon</h3>
                    </thead>

                    <tbody>
                        <ul>
                            {pokedex.map(pokemon => <li key={pokemon.id}>{pokemon.name}</li>)}
                        </ul>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Home;