import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import './Cart.css';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import CartCard from './CartCard';
import { Button } from 'reactstrap';
import { removeAll} from './cartSlice';

const Container = styled.div`
    height: 100vh; 
    width: 40vw; 
    position: absolute; 
    z-index: 1; 
    top: 0;
    background-color: white;
`;

const ActionCart = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Cart = ({open, setOpen}) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.content);
    const user = useSelector(state => state.user.profile);

    const totalPrice = () => {
        let total = 0;
        cart.forEach(element => {
            total += element.price;
        });
        return total;
    }

    const saveCartOnDB = async() => {
        // const products_id = []; 
        // cart.forEach(product => products_id.push(product.id));
        // const responseDB = await fetch('/cart',{
        //         method: "POST",
        //         headers:{
        //             "Content-type": "application/json"
        //         },
        //         body: JSON.stringify({"products_id": products_id, "user_id": user.id})
        //     });
    }

    const deleteCart = async() => {
        dispatch(removeAll());
        setOpen(false);
    }

    useEffect(() => {
        // const timer = setInterval(() => {
        //     if(user && cart){
        //         saveCartOnDB();
        //         console.log('saved cart on DB')
        //     }
        // }, 10000);

        // return () => clearInterval(timer);
    }, [user, cart]);

    return (
        <Container id='cart' className={open ? 'open-cart' : 'close-cart'}>
            <AiOutlineCloseCircle
                style={{cursor: 'pointer', margin: '10px'}} 
                onClick={() => setOpen(false)} 
            />
            {
                cart && cart.map(product => (
                    <CartCard key={product.id} product={product} />
                ))
            }
            <h3>{`Price : ${totalPrice()}`}</h3>
            <ActionCart>
                <Button color='danger' onClick={deleteCart} >
                    Delete Cart
                </Button>
                {
                    user && (<Button color='success' onClick={saveCartOnDB} >
                        Save Cart
                    </Button>)
                }
            </ActionCart>
        </Container>
    );
};

export default Cart;