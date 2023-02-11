import React, { createContext, useState } from 'react';
import { MdDelete } from 'react-icons/md';
/*import {
    Container,
    ContainerList,
    TravelItem,
    Info,
    Quantity,
    Subtotal,
}   from './styles';*/

function Cart() {
    return (
        
        {/* <Container>
            <ContainerList>
                <TravelItem>
                    <img src="" alt="titulo de la vida" />
                    <Info>
                        <p>Titulo</p>
                        <strong>Precio</strong>
                    </Info>
                    <Quantity readOnly type="number" value={1} />
                    <Subtotal>
                    <p>200.00</p>
                    <button type="buton">
                        <MdDelete size={24} color="#0676d9" />
                    </button>
                    </ Subtotal>
                </ TravelItem>
            </ ContainerList>
        </ Container> */}
    );
}

const DEFAULT_VALUE = {
    state: {
        cart: [],
    },
    setState: () => {},
};

const CartContext = createContext(DEFAULT_VALUE);

function CartContextProvider({ children }) {
    const [state, setState] = useState(DEFAULT_VALUE.state);

    return (
        <CartContext.Provider value={{ state, setState }}>
            {children}
        </CartContext.Provider>
    );
}

export { CartContextProvider };
export default CartContext;