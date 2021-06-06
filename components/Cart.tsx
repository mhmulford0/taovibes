import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  cartData: Record<string, unknown>[]
}

const stripePromise = loadStripe(
  'pk_test_51IxGBDKhu8QN3H5CjvNZbJYbY6mwnLUookgLLgXytYwkyBFwP2VoV4XO75FQwPweHpCWbXb7cvEZLhv3KkgpML3G00zERK9Sim'
)

const Cart: React.FC<Props> = ({ open, setOpen, cartData }) => {
  const handleClick = async () => {
    const stripe = await stripePromise
    const { data } = await axios.post('/api/create-checkout-session', { cartData })
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
        <section className="modal-card-body">this is where items go</section>
        <footer className="modal-card-foot">
          <button className="button is-success" type="button" onClick={handleClick}>
            Checkout
          </button>
          <button className="button" type="button" onClick={() => setOpen(false)}>
            Close
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Cart
