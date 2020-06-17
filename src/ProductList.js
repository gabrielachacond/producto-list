import React from "react";
import Product from "./Product";
import { products } from "./const";

export default class ProductList extends React.Component {
  // agregar estado

  state = {
    productos: []
  };

  cambiarEstado = () => {
    this.setState(!this.state.productos);
    return
  //  <div this.state.productos(preveState =>()) /div>;
  };


  componentDidMount() {
    console.log("se monte");
  }

  handleProductUpVote = () => {
    console.log("Se hizo click");
  }
  //render(){
  // <button onClick={this.handleProductUpVote(this)}>
  //}

    // aqui manejaremos lo que pasa cuando hacemos click sobre
    // el upvote
    // recibe algun parametro esta funcion? / voy a interar sobre la lista con map

  render() {
    // con la función sort podemos ordenar un array de objetos en base a una
      const showproducts = products.sort((a, b) => b.votes - a.votes);
      const productComponents = showproducts.map(product => (
      <Product
        key={"product-" + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        onVote={this.handleProductUpVote}
      />
    //));
    return <div className="ui unstackable items">{productComponents}</div>;
   // <div> Product {this.state.seproduct()} /div>
  };