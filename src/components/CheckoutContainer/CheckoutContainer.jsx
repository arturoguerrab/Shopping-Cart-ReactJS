import {useContext, useState} from 'react'
import { CartContext } from '../../context/CartContext'
import CarritoVacio from '../CarritoVacio/CarritoVacio'
import Checkout from '../Checkout/Checkout'
import FormCheckout from '../FormCheckout/FormCheckout'
import OrdenId from '../OrdenId/OrdenId'

const CheckoutContainer = () => {

    const {cart, limpiarCarrito, eliminarProductoId, precioFinal,} = useContext(CartContext)
    console.log(cart)
    
    const [compra,setcompra] = useState(false)
    const [ordenId,setOrdenId] = useState(null)

    if(cart.length<1 && ordenId==null){
        return(
            <div>
                <CarritoVacio setOrdenId={setOrdenId}/>
            </div>
        )
    }

    if(ordenId){
        return(
            <div>
                <OrdenId ordenId={ordenId} />
            </div>    
        )
    }
    return (
        !compra ?<Checkout setcompra={setcompra} cart={cart} limpiarCarrito={limpiarCarrito} eliminarProductoId={eliminarProductoId} precioFinal={precioFinal}/>
                :<FormCheckout cart={cart} precioFinal={precioFinal} setOrdenId={setOrdenId} limpiarCarrito={limpiarCarrito}/>
    )
}

export default CheckoutContainer