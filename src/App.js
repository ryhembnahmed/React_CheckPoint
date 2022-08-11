import "./App.css";
import Header from "./Components/CustomNavbar";
import Formulaire from "./Components/CustomForm";
import CardPattern from "./Components/CustomCard";
import About from "./Components/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Header />
      <About/>
      <CardPattern/>
      <Formulaire />
      <Footer/>
    </div>
  );
}

export default App;
