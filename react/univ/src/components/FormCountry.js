const FormCountry = (props) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // Récupérer la valeur de l'option choisie
        const country = document.getElementById("country").value;
        console.log(`country`, country);
        props.handleChangeCountry(country);
      }}
    >
      <label htmlFor="country">Pays</label>
      <select id="country">
        <option value="France">France</option>
        <option value="Italy">Italie</option>
      </select>
      <input type="submit" value="Chercher" />
    </form>
  );
};

export default FormCountry;
