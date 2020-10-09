import React,{useState} from "react";
import "./App.css";
import ProductCard2 from "./components/ProductCard2";

import "bootstrap/dist/css/bootstrap.min.css";
import FormCategories from './components/FormCategories/FormCategories';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";
import axios from 'axios';
import Catalogo from "./components/Catalogo";
import CrudShow from "./components/CrudProducts/CrudShow";


function App() {
  
  const [search, setSearch] = useState("")


  const handleChange=(e)=>{
    setSearch({
      [e.target.name]: e.target.value
    })    
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.get(`http://localhost:4000/products/search?valor=${search.search}`, )
      .then(res => res.data)
      .then(res => console.log('res', res))
  }


  const productSearch = search

  return (
    <div>
      {/* <ProductCard2/> */}
      <Router>
      <SearchBar handleSubmit={handleSubmit} handleChange={handleChange}/>
        <Switch>
          <Route exact path="/"
            render={() => <Catalogo productSearch={productSearch} />} 
            />
          <Route exact path="/admin/createCategories" component={FormCategories} />
          <Route exact path="/admin/product" component={CrudShow} />
        </Switch>
      </Router>

    </div>
  );

}

export default App;
