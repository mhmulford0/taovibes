import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { loadStripe } from '@stripe/stripe-js'
import CardItem from 'components/CardItem'
import NavBar from 'components/NavBar'
import Cart from 'components/Cart'

const stripePromise = loadStripe(
  'pk_test_51IxGBDKhu8QN3H5CjvNZbJYbY6mwnLUookgLLgXytYwkyBFwP2VoV4XO75FQwPweHpCWbXb7cvEZLhv3KkgpML3G00zERK9Sim'
)

const Home: React.FC = () => {
  const [open, setOpen] = useState(false)
  const handleClick = async () => {
    const stripe = await stripePromise
    const response = await fetch('/api/create-checkout-session', { method: 'POST' })
    const session = await response.json()
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    })

    if (result.error) {
      console.log(result.error)
    }
  }
  return (
    <>
      <Cart open={open} setOpen={setOpen} />
      <NavBar setOpen={setOpen} />

      <div className="container">
        <Head>
          <title>Tao Vibrations</title>
          <meta name="description" content="Tao Vibrations Online Shop" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="section is-medium">
          <div className="columns has-text-centered">
            <div className="column is-12 is-flex is-align-items-flex-center is-justify-content-center is-align-content-center">
              <h1 className="title is-1 has-text-centered is-inline ">Tao Vibrations</h1>
            </div>
          </div>

          <div className="columns">
            <div className="column is-half">
              <CardItem handleClick={handleClick} />
            </div>
            <div className="column is-half">
              <CardItem handleClick={handleClick} />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Home
