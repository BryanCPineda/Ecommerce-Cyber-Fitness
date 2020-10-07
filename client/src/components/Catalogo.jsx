import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import Filter from './Filter';
import data from "../data";

function Catalogo() {

  const productsArray = data.products.map(ele => ele)

  let sortProductsByPrice = productsArray.map(ele => ele.price)
  console.log(sortProductsByPrice)

  const [products, setProducts] = useState(productsArray)
  const [categories, setCategories] = useState("")
  const [order, setOrder] = useState("")

  const filterProducts = (e) => {
    if(!e.target.value) {
      setCategories(e.target.value)
      setProducts(productsArray)
    }
    else {
      setCategories(e.target.value)
      setProducts(productsArray)
    }
    //FILTRA POR RUTAS DE BACK
  }

  const orderProducts = (e) => {
    console.log(e.target.value)
    let sort = e.target.value
    setOrder(sort)
    let sortProducts = products.slice()
    console.log(sortProducts)
    if (sort === "-") {
      sortProducts.sort((a, b) => (a.id > b.id ? 1 : -1));
    } 
    //TERMINAR
    setProducts(sortProducts)
  }

  return (
    <Container >
      <div > 
        <Filter categories={categories} order={order} filterProducts={filterProducts} orderProducts={orderProducts} />
      </div>
        <Row >   
        {productsArray.map((ele, id) => (
            <Col xs={4} >
          <ProductCard
            id={id}
            name={ele.name}
            description={ele.description}
            price={ele.price}
            stock={ele.stock}
            image={ele.image}
          />
          </Col>
        ))}
        </Row>
    </Container>
  );
}

export default Catalogo;
