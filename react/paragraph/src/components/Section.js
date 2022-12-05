const Section = (props) => {
  return (
    <section>
      <h2
        onClick={(event) => {
          // Méthode 1 - on fait une copie, on modifie le tableau au bon index et on donne le résultat en argument de setParagraphes
          /*const copy_paragraphes = [...paragraphes];
              copy_paragraphes[index].is_visible =
                !copy_paragraphes[index].is_visible;
              setParagraphes(copy_paragraphes);*/

          // Méthode 2 Appel de setParagraphes en lui donnant en argument un tableau issu de paragraphes (le state) et modifié via la méthode map
          props.setParagraphes(
            props.paragraphes.map((p, index2) => {
              if (props.index == index2) {
                p.is_visible = !p.is_visible;
              }
              return p;
            })
          );
        }}
      >
        {props.paragraphe.title}
      </h2>
      {/* Teste si le paragraphe doit être affiché */}
      {props.paragraphe.is_visible && <p>{props.paragraphe.text}</p>}
    </section>
  );
};

export default Section;
