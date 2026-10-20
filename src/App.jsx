import "./inventory.css";
import Header from "./components/Header";
import Create from "./components/Create";
import Products from "./components/Products";


const App = () => {


  return (
    <div className="app-shell">
      <Header />
      <main className="dashboard">
        <section className="panel form-panel">
          <Create />
        </section>
        <section className="panel inventory-panel">
          <Products />
        </section>
      </main>
    </div>
  );
};

export default App;