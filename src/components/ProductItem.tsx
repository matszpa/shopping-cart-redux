import {Product} from "../utils/types";
import {Button, Card} from "react-bootstrap";
import {FC, useState} from "react";
import {useDispatch} from "react-redux";
import {addItem} from "../store/cartSlice";

type ProductItemProps = {
    product: Product
}
export const ProductItem: FC<ProductItemProps> = ({product}) => {
    const [quantity, setQuantity] = useState<number>(0);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addItem({product: product, quantity: quantity}))
        setQuantity(0);
    }

    return (<Card className={"mb-2 shadow-lg"}>
        <Card.Img
            variant={"top"}
            src={product.image}
            height="200px"
            style={{objectFit: "cover"}}
        />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between" style={{

                alignItems: "baseline"
            }}>
                <span className="">{product.name}</span>
                <span className="ms-2"
                      style={{fontWeight: "lighter", whiteSpace: "nowrap",}}>{product.price} $</span>
            </Card.Title>
            {quantity === 0 ?
                <div className="d-flex justify-content-center">
                    <Button className="w-75" onClick={() => setQuantity(1)}>Add to cart</Button>
                </div> :
                <div className="d-flex flex-column">
                    <div className="d-flex align-items-center justify-content-center mb-2" style={{gap: "0.5rem"}}>
                        <Button className="" onClick={() => setQuantity(quantity + 1)}>
                            +
                        </Button>
                        <span className="fs-2 m-2">{quantity}</span>
                        <Button
                            onClick={() => setQuantity(quantity - 1)}>-
                        </Button>
                    </div>
                    <Button onClick={addToCart}>Add</Button>
                </div>
            }


        </Card.Body>
    </Card>)
}
