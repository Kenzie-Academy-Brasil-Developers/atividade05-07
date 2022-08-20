import Form from "./components/Form";
import { Main, Div } from "./styledApp";
import paisagem from "./assets/paisagem.jpg";
import { useContext } from "react";
import kenzie from "./assets/kenzie.png";
import { UserContext } from "./contexts/UserContext";

function App() {
  const { isLoggin, setIsLoggin } = useContext(UserContext);

  return (
    <Main>
      <img src={paisagem} alt="Imagem Fundo" />
      {isLoggin ? (
        <Div>
          <img src={kenzie} alt="Logo Kenzie" />
          <button onClick={() => setIsLoggin(false)}>Logout</button>
        </Div>
      ) : (
        <Form />
      )}
    </Main>
  );
}

export default App;
