import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  cartData: Record<string, any>[]
}

const stripePromise = loadStripe(
  'pk_live_51IxGBDKhu8QN3H5Co184XxwF3F7g4p45OmGykGs9WNqxrIFh9i2bPGvkVKmEBwvJcCkea7y0HQdHEMHn9SpBnLWT00XABnIkTs'
)

const Cart: React.FC<Props> = ({ open, setOpen, cartData }) => {
  const handleClick = async () => {
    const checkout = cartData.map((data) => {
      return { price: data.price, quantity: data.quantity }
    })

    const stripe = await stripePromise
    const { data } = await axios.post('/api/create-checkout-session', { checkout })
    const result = await stripe.redirectToCheckout({
      sessionId: data.id,
    })

    if (result.error) {
      console.log(result.error)
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
