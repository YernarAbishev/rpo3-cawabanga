import "./assets/css/style.css";
import Header from "./components/Header";
import Footer from './components/Footer';
import PizzaList from "./components/pizzas/PizzaList";

function App() {
  return (
    <div>
      <Header />
      <PizzaList />
      <Footer />
    </div>
  );
}

export default App;
