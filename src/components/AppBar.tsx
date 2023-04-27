import {Link} from "react-router-dom";


function AppBar (){

    return (
        <div style={{
            margin: 10,
            backgroundColor: "#55a15a",
            borderRadius: 8,
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'space-evenly',

        }}>
            <Link to='/types'>
                <h2>
                    Types
                </h2>
            </Link>
                <Link to='/'>
                    <h2>
                        Pokemon Dictionary
                    </h2>
                </Link>


            <Link to='/abilities'>
                <h2>
                    Abilities
                </h2>
            </Link>


        </div>
    )
}

export default AppBar;