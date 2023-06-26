import React from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import {MdOutlineDelete} from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { remove } from './cartSlice';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid lightgrey 2px;
    border-radius: 5px;
    margin: 10px;
`;

const Image = styled.img`
    max-width: 50px;
`;

const CartCard = ({product}) => {
    const dispatch = useDispatch();

    return (
        <Container>
            <Image src={product.image} />
            <div>{product.title}</div>
            <div>{product.price}€</div>
            <Button color='danger' onClick={() => dispatch(remove(product))} >
                <MdOutlineDelete />
            </Button>
        </Container>
    );
};

export default CartCard;