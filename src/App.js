// import logo from "./logo.svg";
import "./App.css";
import "./SectionNavBar/styleNav.css";
import NavBar from "./SectionNavBar/NavBar";
import SideBar from "./SectionSideOptions/SideBar";
import WarningBox from "./Rectangle/WarningBox";
import Charts from "./GridContainer/Charts";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar/>
      <WarningBox/>
      <Charts/>
    </div>
  );
}

export default App;
