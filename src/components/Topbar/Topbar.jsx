import backgroundimage from "../../images/bg.jpg";
import Header from "../Header/Header";
import './Topbar.css'

const Topbar = () => {
  return <div className="topbar">
    <Header />
    <div className="blogFont">
      <span className="blogSpan1">.blog</span>
      <span className="blogSpan2">The world of tech!!</span>
    </div>
    <img src={backgroundimage} alt=".blog" className="bgImage" />
  </div>;
};

export default Topbar;
