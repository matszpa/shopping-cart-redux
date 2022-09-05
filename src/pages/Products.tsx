import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProducts, selectProducts} from "../store/productsSlice";
import {AppDispatch} from "../store/store";
import {Loader} from "../components/Loader/Loader";
import {Col, Row} from "react-bootstrap";
import {ProductItem} from "../components/ProductItem";
import {ShoppingCart} from "../components/ShoppingCart";

interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
}

export const Products = () => {
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector(selectProducts)
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])
    if (products.loading) {
        return (<div className="d-flex align-items-center justify-content-center"><Loader/></div>)
    }
    return (
        <>
            <Row xs={1} md={2} lg={4}>
                {products.productList.length > 0 &&
                    products.productList.map(p => <Col key={p.id}><ProductItem product={p}/></Col>)
                }

            </Row>
            <ShoppingCart/>
        </>

    )
}