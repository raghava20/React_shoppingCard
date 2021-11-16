import { React, useState } from 'react';
import { Button, Modal, Table } from "react-bootstrap";


function NavBar(props) {

    const [modelOpen, setModelOpen] = useState(false)

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#!">
                    Start Bootstrap
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#!">
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#!">
                                About
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                id="navbarDropdown"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Shop
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a class="dropdown-item" href="#!">
                                        All Products
                                    </a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#!">
                                        Popular Items
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#!">
                                        New Arrivals
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-dark" type="button" onClick={() => setModelOpen(true)}>
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">
                                {props.cart}
                            </span>

                        </button>
                        <Modal show={modelOpen} onHide={() => setModelOpen(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title>Cart Items</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Cart Items</th>
                                            <th className="text-center">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.checkCartItems.map(result => {
                                            return (

                                                <tr>
                                                    <td>{result.name}</td>
                                                    <td className="text-center">{result.price}</td>

                                                </tr>
                                            )
                                        })}
                                        <tr>
                                            <td>
                                                Total
                                            </td>
                                            <td className="text-center">
                                                Rs. {props.total}
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setModelOpen(false)} >
                                    Close
                                </Button>
                                <Button variant="primary" onClick={() => setModelOpen(false)}>
                                    Buy More
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    </form>
                    <form class="d-flex">
                        <a>
                            <i class="bi bi-currency-dollar"></i>
                            Price:
                            <span class="badge bg-secondary text-black ms-1 rounded-pill">
                                {props.total}
                            </span>
                        </a>
                    </form>
                </div>
            </div>
        </nav >
    )
}

export default NavBar
