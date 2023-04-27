import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

interface PokemonProps {
    height: number;
    weight: string;
    sprites: string;
}

function PokemonDetail (): JSX.Element{
    const [pokemon, setPokemon] = useState<PokemonProps>();

    let {name} = useParams();

    useEffect(() => {async function fetchData () {
        try {
            const res = await axios.get('https://pokeapi.co/api/v2/pokemon/'+ name);
            setPokemon(res.data);
        } catch (e){
            console.log(e);
        }
    }
        fetchData();
    }, [name, setPokemon])

    return (
        <div>
            {name}
            <h2> Height: {pokemon?.height} </h2>
            <h2> Weight: {pokemon?.weight} </h2>
        </div>
    )
}

export default PokemonDetail;