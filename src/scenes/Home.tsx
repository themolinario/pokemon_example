import React, {useEffect, useState} from "react";
import axios from "axios";
import PokemonList from "../components/PokemonList";
import './Home.css';
import {useNavigate} from "react-router-dom";


interface ListElement {
    name: string;
    url: string;
}

function Home (): JSX.Element{
    const [pokedex, setPokedex] = useState<ListElement[]>([]);
    const [abilities, setAbilities] = useState<ListElement[]>([]);
    const [types, setTypes] = useState<ListElement[]>([]);



    useEffect(() => {
        async function fetchData () {
            try {
                const res = await axios.get('https://pokeapi.co/api/v2/pokemon/')
                setPokedex([...res.data.results]);
            } catch (e){
                console.log(e);
            }
            try {
                const res = await axios.get('https://pokeapi.co/api/v2/ability/')
                setAbilities([...res.data.results]);
            } catch (e){
                console.log(e);
            }
            try {
                const res = await axios.get('https://pokeapi.co/api/v2/type/')
                setTypes([...res.data.results]);
            } catch (e){
                console.log(e);
            }

        }
        fetchData();
    }, [pokedex, setPokedex]);

    const navigate = useNavigate();


    return(
        <div className='Container'>
            <div className='FirstList'>
                <PokemonList list={pokedex} onItemClick={(pokemon) => navigate(pokemon)} title='Lista Dei Pokemon'/>
            </div>
            <div className='SecondList'>
                <PokemonList list={abilities} title='Lista delle abilità' />
            </div>
            <div className='ThirdList'>
                <PokemonList list={types} title='Lista dei tipi'/>
            </div>
        </div>
    )
}

export default Home;