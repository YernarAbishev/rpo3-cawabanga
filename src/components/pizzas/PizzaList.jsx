import PizzaCard from "./PizzaCard";
import Loading from "../Loading";
import Error from "../Error";
import { useEffect, useState } from "react";

function PizzaList() {
    const [pizzas, setPizzas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        async function fetchPizzas() {
            try {
                setIsLoading(true);
                const res = await fetch(
                    "https://65efd2e5ead08fa78a51038a.mockapi.io/pizza"
                );
                const data = await res.json();
                setPizzas(data);
            } catch (e) {
                console.error(e);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchPizzas();
    }, []);

    return (
        <section class="pizzas-page">
            <div class="container">
                <h1 class="title">Choice your pizza</h1>
                <div class="row">
                    {isLoading ? (<Loading />) : (pizzas.map((pizza) => <PizzaCard pizza={pizza} key={pizza.id} />))}
                    
                </div>
                {isError && <Error />}
            </div>
        </section>
    );
}

export default PizzaList;