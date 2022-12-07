import {Header} from "./components/header/header";
import {ListView} from "./components/list-view/list-view";
import {useProducts} from "./core/hooks/useProducts";
import {ProductContext} from "./core/context/product.context";

function App() {
  const state = useProducts();

  return (
    <ProductContext.Provider value={state}>
      <div className="App">
        <Header />
        <ListView />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
