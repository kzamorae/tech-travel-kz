import React, { useContext } from 'react';
import CartContext from '../../context/cart';
import { MdDelete } from 'react-icons/md';
import { Container, ContainerList, TravelItem, Info, Quantity, Subtotal, Total, } from './styles';

function Cart() {
    const { state, setState } = useContext(CartContext);

    let total = 0;
    state.cart.map((el) => {
        total += el.quantity * el.price;
    });

    function deleteItem(travel){
        const copyCart = [...state.cart];
        const newCart = [];
        copyCart.forEach((el)=>{
            if(el.id !== travel.id){
                newCart.push(el);
            }
        });
        console.log('Carrito',copyCart);
        console.log('Carrito Final ',newCart);
        setState({
            cart: newCart,
        });
    }

    return (
        <Container>
            <ContainerList>
                {state.cart.map((el) => (
                    <TravelItem key={el.id}>
                        <img src={el.photo} alt={el.title} />
                        <Info>
                            <p>{el.title}</p>                      <strong>{el.price}</strong>
                        </Info>
                        <Quantity>
                            <input readOnly type="number" value={el.quantity}></input>
                        </Quantity>
                        <Subtotal>
                            <p> $ {parseFloat(el.quantity * el.price).toFixed(2)} </p>
                            <div>
                                <button type="button" onClick={() => deleteItem(el)}>
                                    <MdDelete size={24} color="#0676d9" />
                                </button>
                            </div>

                        </ Subtotal>
                    </TravelItem>
                ))}
                <Total>
                    <div>
                        <h2>Total: $ {parseFloat(total).toFixed(2)}</h2>
                    </div>
                </Total>
            </ContainerList>
        </Container>
    );
}

export default Cart;
