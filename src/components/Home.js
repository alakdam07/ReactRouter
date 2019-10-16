import React from "react";
import { Link } from "react-router-dom";
import urban from "./img/urban.jpg";
import urban1 from "./img/urban1.jpg";
import urban2 from "./img/urban2.jpg";
import urban3 from "./img/urban3.jpg";
import urban4 from "./img/urban4.jpg";
import urban5 from "./img/urban5.jpg";
import urban6 from "./img/urban6.jpg";
import urban7 from "./img/urban7.jpg";

const Home = () => {
  return (
    <div className="row">
      <div className="col s3">
        <div className="card small">
          <div className="card-image">
            <img src={urban} alt={"img"} />
            <span className="card-title">Summer night</span>
          </div>
          <Link to="/page">
            <button className="btn pink lighten-1 z-depth-0">Read more</button>
          </Link>

          <p style={{ padding: "5px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ex
            cum in accusantium eaque commodi,.
          </p>
        </div>
      </div>
      <div className="col s3">
        <div className="card small">
          <div className="card-image">
            <img src={urban1} alt={"img"} />
            <span className="card-title">Sunset</span>
          </div>
          <Link to="/page2">
            <button className="btn pink lighten-1 z-depth-0">Read more</button>
          </Link>
          <p style={{ padding: "5px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ex
            cum in accusantium eaque commodi,.
          </p>
        </div>
      </div>
      <div className="col s3">
        <div className="card small">
          <div className="card-image">
            <img src={urban2} alt={"img"} />
            <span className="card-title">Red sky</span>
          </div>
          <button className="btn pink lighten-1 z-depth-0">Read more</button>
          <p style={{ padding: "5px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ex
            cum in accusantium eaque commodi,.
          </p>
        </div>
      </div>
      <div className="col s3">
        <div className="card small">
          <div className="card-image">
            <img src={urban3} alt={"img"} />
            <span className="card-title">Paint the sky. make It yours</span>
          </div>
          <button className="btn pink lighten-1 z-depth-0">Read more</button>
          <p style={{ padding: "5px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ex
            cum in accusantium eaque commodi,.
          </p>
        </div>
      </div>
      <div className="col s3">
        <div className="card small">
          <div className="card-image">
            <img src={urban4} alt={"img"} />
            <span className="card-title">Morning sky</span>
          </div>
          <button className="btn pink lighten-1 z-depth-0">Read more</button>
          <p style={{ padding: "5px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ex
            cum in accusantium eaque commodi,.
          </p>
        </div>
      </div>
      <div className="col s3">
        <div className="card small">
          <div className="card-image">
            <img src={urban5} alt={"img"} />
            <span className="card-title">Smile on a cloudy day</span>
          </div>
          <button className="btn pink lighten-1 z-depth-0">Read more</button>
          <p style={{ padding: "5px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ex
            cum in accusantium eaque commodi,.
          </p>
        </div>
      </div>
      <div className="col s3">
        <div className="card small">
          <div className="card-image">
            <img src={urban6} alt={"img"} />
            <span className="card-title">Get me back in the sky</span>
          </div>
          <button className="btn pink lighten-1 z-depth-0">Read more</button>
          <p style={{ padding: "5px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ex
            cum in accusantium eaque commodi,.
          </p>
        </div>
      </div>
      <div className="col s3">
        <div className="card small">
          <div className="card-image">
            <img src={urban7} alt={"img"} />
            <span className="card-title">No clouds! no rain!</span>
          </div>
          <button className="btn pink lighten-1 z-depth-0">Read more</button>
          <p style={{ padding: "5px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ex
            cum in accusantium eaque commodi,.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
