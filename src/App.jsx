import React from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./components/about/about";
import Body from "./components/body/body";
import ContactForm from "./components/contact/contact";
import Header from "./components/header/header";
import Portfolio from "./components/portfolio/portfolio";
import Services from "./components/services/services";
function App() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <Body></Body>
        <About></About>
        <Services></Services>
        <Portfolio></Portfolio>
        <ContactForm></ContactForm>
      </main>
    </>
  );
}

export default App;
