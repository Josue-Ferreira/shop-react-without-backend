import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../features/cart/cartSlice';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';
import styled from 'styled-components';

const Image = styled.img`
    max-width: 100px;
    align-items: center;
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
`;

const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    const inCart = useSelector(state => state.cart.content);

    const handleCart = () => {
        if(inCart == null || !inCart.some(cartProduct => cartProduct.id == product.id)) 
            dispatch(add(product));
        else if(inCart.some(cartProduct => cartProduct.id == product.id))
            dispatch(remove(product));
    }

    const isInCart = () => {
        return inCart && inCart.some(cartProduct => cartProduct.id == product.id);
    }

    return (
        <Card style={{height: '25rem', margin: '10px'}}>
            <ImageContainer>
                <Image
                    alt="clothe"
                    src={product.image}
                />
            </ImageContainer>
            <CardBody style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <div>
                    <CardTitle tag="h5">
                        {product.title}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                        >
                        {product.category}
                    </CardSubtitle>
                </div>
                <Button 
                    color={isInCart() ? "danger" : "success"}
                    onClick={handleCart}
                    >
                    { 
                        isInCart() 
                            ? 'Remove from cart' 
                            : 'Add to cart'
                    }
                </Button>
            </CardBody>
        </Card>
    );
};

export default ProductCard;