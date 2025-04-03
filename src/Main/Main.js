import Banner from "../img/banner.png";
import "./Main.css";
import MainInProgram from "../component/MainInProgram";

const Main = () => {
  return (
    <div className="main">
      <img src={Banner} alt="배너" className="banner" />
      <MainInProgram />
    </div>
  );
};

export default Main;
