import React from "react";

interface PokemonProps {
    name: string;
    onCLick: (name: string) => void;
}



function PokemonListElement ({ name, onCLick }: PokemonProps): JSX.Element {
    function handleClick (e: React.SyntheticEvent<HTMLButtonElement>): void {
        onCLick(name);
    }
    return (
        <button
            style={{
                width: '100%',
            }}
            onClick={handleClick}
        >
            <h2>{name}</h2>
        </button>
    )
}


export default PokemonListElement;