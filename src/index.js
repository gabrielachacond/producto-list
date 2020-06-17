import React from "react";
import ReactDOM from "react-dom";
import ProductList from "./ProductList";

function App() {
  return (
    <div className="App">
      <h1>Lista de productos</h1>
      <ProductList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
