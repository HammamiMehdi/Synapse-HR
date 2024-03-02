import React from 'react';
import "./Title.css"



const Title = (props) => {
  return (
    <>
      <section className="app-title">
        <div className="app-title-content">
          <h1>{props.title}</h1>
          <p>{props.subtitle}</p>
          <div>{props.other}</div>
        </div>
      </section>
    </>
  );
};

export default Title;
