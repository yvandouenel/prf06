import React from 'react';
import Fetcher from '../services/Fetcher';

function FormCountry(props) {

    const handleChange = async (e) => {
        props.setUniversities(await Fetcher.fetchUniversity(e.target.value));
    }

    return (
        <form onChange={handleChange}>
          <label>
            <p>Pays :</p>
            <select name="country" id="country">
                <option value="France">France</option>
                <option value="Tunisia">Tunisie</option>
            </select>
          </label>  
        </form>
    );
}

export default FormCountry;