import Items from "./components/Items";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Items name="MacBook pro" price={100000} />
      <Items name="lennovo" price={70000} />
      <Items name="HP" price={75000} />
      <Items name="Asus" price={50000} />
      <Cart/>
    </div>
  );
}

export default App;
