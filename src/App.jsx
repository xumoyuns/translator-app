import "./App.css";
// import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import TranslateInput from "./Components/TranslateInput/TranslateInput";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <TranslateInput />
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
