import Certificates from "./components/Certificates";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Stages from "./components/Stages";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Stages />
        <hr />
        <Projects />
        <hr />
        <Certificates />
      </main>
    </>
  );
}

export default App;
