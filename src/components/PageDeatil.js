import React from "react";
import { Link } from "react-router-dom";
import urban from "./img/urban.jpg";
import data from "./data/data.json";

const PageDeatil = () => {
  return (
    <React.Fragment>
      <div style={{ position: "absolute", left: "20%" }}>
        <h5 className="card-title style={{fontSize:'20px'}}">Summer night</h5>
        <div className="row">
          <div className="col s2 m3">
            <img src={urban} alt={"img"} style={{ width: "250px" }} />
          </div>
          <div className=" col s12 m4">
            {data.map(id => (
              <div>
                <h5 className="animated fadeInRightBig delay-1.s blue-text">
                  {id.description}
                </h5>
                <img
                  src={id.url}
                  alt="pic"
                  style={{ width: "150px" }}
                  className="animated bounce delay-1.s"
                />
              </div>
            ))}
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
              tenetur labore. Ab, optio provident. Voluptatum alias et vel,
              nostrum, voluptates molestiae soluta suscipit fugiat saepe tempora
              dolores, ipsum culpa delectus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aperiam deleniti error labore, vel
              sit laborum quod sunt officia, debitis in eum voluptatem dolorum
              incidunt, tempore eveniet nemo et repellat dicta. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Eveniet facere
              reiciendis ab doloremque rem, magnam labore qui praesentium fuga,
              totam, ipsum repellendus quis neque! Fugiat earum facilis nam
              cumque neque?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
              tenetur labore. Ab, optio provident. Voluptatum alias et vel,
              nostrum, voluptates molestiae soluta suscipit fugiat saepe tempora
              dolores, ipsum culpa delectus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
            <Link to="/">
              <button className="btn pink lighten-1 z-depth-0">
                Return the main page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PageDeatil;
