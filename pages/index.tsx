import Head from 'next/head'
import { loadStripe } from '@stripe/stripe-js'

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
    <div className="container">
      <Head>
        <title>Tao Vibrations</title>
        <meta name="description" content="Tao Vibrations Online Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="section is-medium">
        <h1 className="title is-1 has-text-centered">Tao Vibrations</h1>
        <div className="columns">
          <div className="column is-half">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="/candle.jpg" alt="Candle" />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <p className="title is-4">Aroma Therpy Candle</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis
                    mauris.
                  </p>
                  <button
                    role="link"
                    type="button"
                    className="button is-primary is-medium is-fullwidth"
                    onClick={handleClick}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-half">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="/candle.jpg" alt="Candle" />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <p className="title is-4">Aroma Therpy Candle</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis
                    mauris.
                  </p>
                  <button
                    role="link"
                    type="button"
                    className="button is-primary is-medium is-fullwidth"
                    onClick={handleClick}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
