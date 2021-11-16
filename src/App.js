import "./App.css";
import { React, useState } from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";


function App() {
  let [cart, setCart] = useState(0)
  let [total, setTotal] = useState(0)
  const [cartItems, setCartItems] = useState([])

  let items = [{
    id: 1,
    name: "Fancy Product",
    oldPrice: 40.00,
    price: 80.00,

  },
  {
    id: 2,
    name: "Special Item",
    oldPrice: 20.00,
    price: 18.00,

  },
  {
    id: 3,
    name: "Sale Item",
    oldPrice: 50.00,
    price: 25.00,

  },
  {
    id: 4,
    name: "Popular Item",
    price: 40.00,

  },
  {
    id: 5,
    name: "Sale Item",
    oldPrice: 50.00,
    price: 25.00,

  },
  {
    id: 6,
    name: "Fancy Product",
    oldPrice: 120.00,
    price: 280.00,

  },
  {
    id: 7,
    name: "Special Item",
    oldPrice: 20.00,
    price: 18.00,

  },
  {
    id: 8,
    name: "Popular Item",
    price: 40.00,

  },
  ]



  return (
    <>
      <NavBar cart={cart} setCart={setCart} total={total} setTotal={setTotal} checkCartItems={cartItems} />

      <Header />

      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

            {items.map((item) => {
              return (
                <Card cart={cart} changeCart={setCart} changeTotal={setTotal} product={item} addToCartItems={cartItems} setCartItems={setCartItems}
                ></Card>
              )
            })}

          </div>
        </div>
      </section>
      <Footer />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

      <script src="js/scripts.js"></script>
    </>
  );
}

export default App;
