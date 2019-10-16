import React from "react";
import { Link } from "react-router-dom";
import urban1 from "./img/urban1.jpg";

const PageDeatil = () => {
  React.useEffect(() => {
    fectingData();
  }, []);
  const [state, setstate] = React.useState([]);

  const fectingData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setstate(data);
    } catch (err) {
      alert("error");
    }
  };

  console.log(state);

  return (
    <React.Fragment>
      <div style={{ position: "absolute", left: "20%" }}>
        <div style={{ paddingRight: "10px" }}>
          <h5 className="card-title style={{fontSize:'20px'}}">Sunset</h5>
          <div className="row">
            <div className="col s2 m3">
              <img src={urban1} alt={"img"} style={{ width: "220px" }} />
            </div>
            <div className=" col s12 m4">
              <h4 className="animated bounce delay-1s blue-text">
                This is coming from fake api
              </h4>
              {state.map(data => (
                <div>
                  <h5>{data.title}</h5>
                </div>
              ))}

              <Link to="/">
                <button className="btn pink lighten-1 z-depth-0">
                  Return the main page
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PageDeatil;
