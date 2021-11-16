import { React, useState } from "react";
import Rating from "./Rating";


function Card(props) {

  let [show, setShow] = useState(false)


  function addCart(items) {
    props.changeCart((prev) => prev + 1);
    props.addToCartItems.push(props.product)
    setShow((prev) => !prev)
    props.changeTotal((prev) => {
      return prev + items.price
    })

  }

  function removeCart(items) {
    props.changeCart((prev) => prev - 1)
    setShow((prev) => !prev)
    props.changeTotal((prev) => {
      return prev - items.price
    })
    props.setCartItems(props.addToCartItems.filter(dummy => {

      return (dummy.name !== items.name && dummy.price !== items.price)
    }
    ))
  }

  return (
    <>
      <div class="col mb-5">
        <div class="card h-100">

          {props.product.name === "Fancy Product" || props.product.name === "Popular Item" ?
            (<div></div>) :
            (<div class="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>)

          }

          <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

          <div class="card-body p-4">
            <div class="text-center">
              <h5 class="fw-bolder">{props.product.name}</h5>

              <Rating name={props.product.name} />

              {
                props.product.name === "Fancy Product" ?
                  (<><span>${props.product.oldPrice}.00 -</span> ${props.product.price}.00</>) :
                  (props.product.name === "Popular Item" ?
                    (<>${props.product.price}.00</>) :
                    (<><span class="text-muted text-decoration-line-through">${props.product.oldPrice}.00</span> ${props.product.price}.00</>)
                  )
              }

            </div>
          </div>

          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">

              {
                props.product.name === "Fancy Product" ?
                  (<a class="btn btn-outline-dark mt-auto" href="#">View options</a>) :
                  (
                    show ?
                      (<button button class="btn btn-outline-danger mt-auto" onClick={() => removeCart(props.product)
                      } > Remove from cart</button >) :
                      (<button class="btn btn-outline-dark mt-auto" onClick={() => addCart(props.product)} >Add to cart</button>)
                  )
              }

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
