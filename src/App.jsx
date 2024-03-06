import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navigator";
import Hero from "./components/hero";
import LocationBar from "./components/location";
import Desc1 from "./components/desc1";
import Timeline from "./components/timeline";
function App() {
  return (
    <div className="bodyClass">
      <NavBar></NavBar>
      <Hero></Hero>
      <LocationBar></LocationBar>
      <Desc1></Desc1>
      <Timeline></Timeline>
    </div>
  );
}

export default App;
