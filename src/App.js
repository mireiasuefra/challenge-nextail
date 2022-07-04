import "./App.scss";

import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList/ProductsList";

function App() {


  return (
    <div className="bg-page">
      <Header />
      <main>
        <ProductsList/>
      </main>
    </div>
  );
}

export default App;
