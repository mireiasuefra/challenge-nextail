import "./App.scss";
import { useEffect, useState } from "react";
import getProducts from "./services/get-products";
import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList/ProductsList";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <div className="bg-page">
      <Header />
      <main>
        <ProductsList />
      </main>
    </div>
  );
}

export default App;
