import React from "react";
import { useState } from "react";

function University(props) {
  return (
    <section
      className="col-md-3"
      onClick={(e) => {
        props.setPinnedUniversities([...props.pinnedUniversities, props.univ]);
      }}
    >
      <div className="border p-2 rounded">
        <h2>{props.univ.name}</h2>
        <p style={{ wordBreak: "break-all" }}>{props.univ.web_pages[0]}</p>
      </div>
    </section>
  );
}

export default University;
