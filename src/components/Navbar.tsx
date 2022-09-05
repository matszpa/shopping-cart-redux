import {Button, Container, Nav, Navbar as BootstrapNavbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useAppSelector} from "../store/store";
import {useEffect} from "react";
import {openCart} from "../store/cartSlice";

export const Navbar = () => {
    const products = useAppSelector(state => {
        return state.cart.cartItems;
    })
    const dispatch = useDispatch();

    return (<div>
        <BootstrapNavbar className="shadow-lg bg-light mb-3">
            <Container className="me-auto ">
                <Nav className="text-danger fs-4 m-2">
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/products" as={NavLink}>Products</Nav.Link>
                </Nav>
                <Button className="d-flex align-items-center justify-content-center"
                        style={{borderRadius: "50%", width: "3rem", height: "3rem"}}
                        onClick={() => dispatch(openCart())}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                         className="bi bi-cart" viewBox="0 0 16 16">
                        <path
                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>

                    <span className="bg-danger"
                          style={{
                              height: "1.5rem",
                              width: "1.5rem",
                              position: "absolute",
                              borderRadius: "50%",
                              bottom: "10px",
                              right: "5px"
                          }}>{products.length}</span>
                </Button>
            </Container>
        </BootstrapNavbar>
    </div>)
}