import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import './PokemonDetail.css';
import PokemonList from "../components/PokemonList";

interface IPokemon {
    height: number;
    weight: string;
    sprites: {
        front_default: string;
    }
    types: {
        0: {
            type:{
                name :string;
            }
        }
    }

    abilities: Array<IAbility>;
}

interface IAbility {
    ability: {
        name: string;
        url: string;
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
        <div className='DetailContainer'>
            <div className='InnerDetailContainer'>
                <div className='PokemonName'>
                    <h1>{name}</h1>
                </div>

                <div className='ImageContainer'>
                    <img alt='Pokemon' src={pokemon?.sprites.front_default} />
                </div>

                <div className='FeaturesContainer'>
                    <h2> Height: {pokemon?.height} </h2>
                    <h2> Weight: {pokemon?.weight} </h2>
                    <h2> Type: {pokemon?.types["0"].type.name}</h2>
                </div>

                <PokemonList
                    list={pokemon ? pokemon.abilities.map(a => a.ability) : []}
                    title='Lista delle abilità'
                    sortBy="name"
                    searchBy="name"
                />

            </div>

        </div>
    )
}

export default PokemonDetail;