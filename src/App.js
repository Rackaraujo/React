import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Container>
      <h1>ETEC MCM</h1>
      <p>Olá mundo!</p>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
