import React from 'react';

function FormFilter({setFilter}) { //Destructuration de l'objet props

    return (
        <form>
            <label>
                <p>Filtre : </p>
                <input type="text" onChange={(e) => setFilter(e.target.value)}/>
            </label>
        </form>
    );
}

export default FormFilter;