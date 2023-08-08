import "./App.css";
import Store from "./pages/store/Store";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <>
      <ProductProvider>
        <Store />
      </ProductProvider>
    </>
  );
}

export default App;
