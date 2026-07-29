import "./App.css";
import Home from "./componentes/Home";
import Productos from "./componentes/Productos";
import Entregas from "./componentes/Entregas";
import Pedidos from "./componentes/Pedidos";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/productos" element={<Productos />}></Route>
        <Route path="/pedidos" element={<Pedidos />}></Route>
        <Route path="/entregas" element={<Entregas />}></Route>
      </Routes>
    </>
  );
};

export default App;
