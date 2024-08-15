import Banner from "./components/Banner";
import Container from "./components/Container";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header/>
      <Banner  image="favoritos"/>
      <Container>  
        <h2>Animes</h2>
        <section className="cards">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </section>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
