import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./routes/Router";
import UserContext from "./context/UserContext";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <>
      <UserContext>
        <ProductProvider>
          {/* Nav */}
          <Routes />
          {/* Footer */}
        </ProductProvider>
      </UserContext>
    </>
  );
}

export default App;
