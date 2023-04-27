import React from "react";

interface PokemonProps {
    name: string;
}



function PokemonList ({ name }: PokemonProps): JSX.Element {
    function handleClick (e: React.SyntheticEvent<HTMLButtonElement>): void {
        console.log(e);
    }
    return (
        <button
            style={{
                width: 500,
            }}
            onClick={handleClick}
        >
            <h2>{name}</h2>
        </button>
    )
}

export default PokemonList;