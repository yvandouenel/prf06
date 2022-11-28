export default function University(props) {
  return (
    <section className="col-md-3">
      <div className="border mb-4 p-2 mt-5">
        <h2>{props.info.name} </h2>
        <p>{props.info.web_pages}</p>
      </div>
    </section>
  );
}
