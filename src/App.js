import "./App.css";
import { ForwardArrow, Logo } from "./img";
import { MainContainer, Pin } from "./components";

import {
  Add,
  Chat,
  FavoriteRounded,
  Notifications,
  Person,
  QuestionMark,
} from "@mui/icons-material";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const allIcon = document.querySelectorAll(".icon-container");
    function setMenuActive() {
      allIcon.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allIcon.forEach((n) => n.addEventListener("click", setMenuActive));
  }, []);
  return (
    <div className="App">
      <div className="menuContainer">
        <img src={Logo} alt="logo" className="logo" />
        <div className="subMenu">
          <div>
            <MainContainer Icon={Person} />
            <MainContainer Icon={Notifications} />
            <MainContainer Icon={Chat} />
          </div>
          <div>
            <MainContainer Icon={FavoriteRounded} />
          </div>
          <div>
            <MainContainer Icon={QuestionMark} />
            <MainContainer Icon={Add} />
          </div>
        </div>
      </div>
      <main>
        <div className="searchBox">
          <input type="text" placeholder="Search..." />
          <div className="search">
            <img src={ForwardArrow} alt="" />
          </div>
        </div>
        <div className="main-container">
          <Pin pinSize={"small"} />
          <Pin pinSize={"medium"} />
          <Pin pinSize={"large"} />
          <Pin pinSize={"small"} />
          <Pin pinSize={"medium"} />
          <Pin pinSize={"large"} />
          <Pin pinSize={"small"} />
          <Pin pinSize={"medium"} />
          <Pin pinSize={"large"} />
          <Pin pinSize={"small"} />
          <Pin pinSize={"medium"} />
          <Pin pinSize={"large"} />
        </div>
      </main>
    </div>
  );
}

export default App;
