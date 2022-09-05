import {Button, Col, Offcanvas, Row, Stack} from "react-bootstrap";
import {useAppSelector} from "../store/store";
import {useDispatch} from "react-redux";
import {changeQuantity, closeCart, removeItem} from "../store/cartSlice";
import {ChangeEvent, useEffect} from "react";
import Form from 'react-bootstrap/Form';
import {CartItem} from "../utils/types";

export const ShoppingCart = () => {
    const {isOpen, cartItems} = useAppSelector(state => state.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(cartItems)

    }, [cartItems])
    const changeQuantityHandler = (quantity: number, id: string) => {
        if (quantity > 0)
            dispatch(changeQuantity({id: id, quantity: quantity}))
    }
    return (
        <Offcanvas show={isOpen} onHide={() => dispatch(closeCart())} scroll={true} placement={"end"}>
            <Offcanvas.Header closeButton={true}>
                <Offcanvas.Title className="fs-2">Your cart</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
                <>

                    {cartItems.map(({product, quantity}) =>
                        <Stack direction="horizontal"
                               className="mb-4 d-flex align-items-center ">
                            <img style={{width: "100px", height: "100px", objectFit: "cover", borderRadius: "1rem"}}
                                 src={product.image}/>
                            <div className="m-2 me-auto">
                                <div className="d-flex flex-column me-auto">
                                    <span>{product.name}</span>
                                    <span>{product.price} $</span>
                                </div>

                            </div>
                            <Form.Control className="" type="number"
                                          style={{maxWidth: "3rem", textAlign: "center"}} size="sm"
                                          value={quantity.toString()}
                                          onChange={(e) => changeQuantityHandler(Number(e.target.value), product.id)}/>

                            <Button variant="outline-danger" className="ms-2"
                                    onClick={(e) => dispatch(removeItem(product.id))}>X</Button>

                        </Stack>
                    )}
                    <div className="fs-3 position-absolute bottom-0 mb-4">
                        Total price: <span>
                    {cartItems.reduce((total, item: CartItem) => total + item.quantity * item.product.price, 0)}$</span>
                    </div>
                </>
            </Offcanvas.Body>
        </Offcanvas>
    )
}