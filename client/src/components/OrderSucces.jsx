import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { orderFetch } from '../actions/cartActions'
import succes from '../pictures/checked-success.svg'
import { clearCart } from '../slices/cartSlice'

export default function OrderSucces (){
  const cart = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch()

    useEffect(() => {
      // generar orden de compra
    if(user.name && user.email){
      dispatch(orderFetch({cart: cart.cartItems, userName: user.name, userEmail: user.email}))
      dispatch(clearCart());
    }
  
    }, [user])

    return (
       <div className='grid gap-7 place-content-center h-screen text-center'>
        <img className='w-40 mx-auto' src={succes} alt="success" />
        <h4 className='text-3xl'>Felicitaciones !!</h4>
        <p className='text-xl'>Tu pago fue aprobado con éxito, esperamos que vuelva pronto ...</p>
        <Link to="/home"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-52 mx-auto">
  Volver
</button></Link>
       </div>
    )
}