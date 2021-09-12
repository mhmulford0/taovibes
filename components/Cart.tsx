import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  cartData: Record<string, any>[]
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLIC_KEY.toString())

const Cart: React.FC<Props> = ({ open, setOpen, cartData }) => {
  const [error, setError] = useState(false)
  const handleClick = async () => {
    try {
      setError(false)
      const checkout = cartData.map((data) => {
        return { price: data.price, quantity: data.quantity }
      })

      const stripe = await stripePromise
      const { data } = await axios.post('/api/create-checkout-session', { checkout })
      await stripe.redirectToCheckout({
        sessionId: data.id,
      })
    } catch (error) {
      setError(true)
    }
  }
  return (
    <div className={open ? 'modal is-active' : 'modal'}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Your Cart</p>
        </header>
        <section className="modal-card-body">
          {error ? <h3 className="title is-3">Error With Cart</h3> : ''}
          {cartData.length < 1 ? (
            <h3 className="title is-3">No Items</h3>
          ) : (
            cartData.map((item) => {
              return (
                <p key={item.price}>
                  {item.name} - Qty: {item.quantity}
                </p>
              )
            })
          )}
        </section>
        <footer className="modal-card-foot">
          {cartData.length < 1 ? (
            <button className="button is-primary" type="button" disabled onClick={handleClick}>
              Checkout
            </button>
          ) : (
            <button className="button is-primary" type="button" onClick={handleClick}>
              Checkout
            </button>
          )}
          <button className="button" type="button" onClick={() => setOpen(false)}>
            Close
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Cart
