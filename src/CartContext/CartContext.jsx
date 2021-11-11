import {createContext, useState, useContext } from "react";

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) =>
{
    const [cartList, setCartList] = useState([]);

    //Agregar al carrito
    const addToCart = itemsAdded =>
    {
        //Encontrar si el id del producto que entra es igual a algun id que ya este en el array
        const itemFindCart = cartList.find(itfc => itfc.id === itemsAdded.id);
       
        if(!itemFindCart)
        {
            //Si la igualdad es falsa, meter el producto en el carrito
            setCartList(
                [
                    ...cartList,
                    itemsAdded
                ]
            )
        }
        else
        {
            itemFindCart.cantidad = itemFindCart.cantidad + itemsAdded.cantidad //A mi producto (objeto de array) que comparte mi ID le sumo la cantidad que se especifica en count
            setCartList(
                [
                    ...cartList
                ]
            )
        }
    }
    //Remover un item del carrito
    const removeItemCart = itemsRemoveCart =>
    {
        setCartList(cartList.filter(itemSerch => itemSerch.id !== itemsRemoveCart))
        console.log("producto eliminado")
    }
    //Elminar 1 unidad de un producto de mi carrito
    // const removeItemUnity = itemRemoveUnity =>
    // {
    //     const itemFindCartUnity = cartList.filter(itfcu => itfcu.id === itemRemoveUnity.id);
    //     if(itemFindCartUnity.cantidad >= 1)
    //     {
    //         itemFindCartUnity.cantidad =   itemFindCartUnity.cantidad - 1;
    //         setCartList(
    //             [
    //                 ...cartList
    //             ]
    //         )
    //     }
    //     else
    //     {
    //         alert("Ya no hay unidades para elminiar")
    //     }
        
    // }
    //Limpiar carrito
    const cleanCart = () =>
    {
        setCartList([]); //Seteo mi array de cartList con uno vacio
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, removeItemCart, cleanCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider



