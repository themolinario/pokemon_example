import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";

interface IPokemon {
    height: number;
    weight: string;
    sprites: {
        front_default: string;
    }
}

function PokemonDetail (): JSX.Element{
    const [pokemon, setPokemon] = useState<IPokemon>();

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
            <img src={pokemon?.sprites.front_default} />
        </div>
    )
}

export default PokemonDetail;