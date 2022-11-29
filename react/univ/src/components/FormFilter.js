const FormFilter = (props) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label htmlFor="filter">Filtre</label>
      <input
        type="text"
        id="filter"
        onChange={(e) => {
          const filter_string = e.target.value;
          console.log(`filter_string`, filter_string);
          props.handleChangeFilter(filter_string);
        }}
      />
    </form>
  );
};

export default FormFilter;
