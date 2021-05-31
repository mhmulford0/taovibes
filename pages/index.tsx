import Head from 'next/head'
import Image from 'next/image'
import { loadStripe } from '@stripe/stripe-js'
import styles from '../styles/Home.module.css'

const stripePromise = loadStripe(
  'pk_test_51IxGBDKhu8QN3H5CjvNZbJYbY6mwnLUookgLLgXytYwkyBFwP2VoV4XO75FQwPweHpCWbXb7cvEZLhv3KkgpML3G00zERK9Sim'
)

const Home: React.FC = () => {
  const handleClick = async () => {
    const stripe = await stripePromise
    const response = await fetch('/api/create-checkout-session', { method: 'POST' })
    const session = await response.json()
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    })
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Tao Vibrations</title>
        <meta name="description" content="Tao Vibrations Online Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>
          <button role="link" type="button" onClick={handleClick}>
            Candle Checkout
          </button>
        </p>
      </main>

      <footer className={styles.footer}>
        <p>footer</p>
      </footer>
    </div>
  )
}

export default Home
