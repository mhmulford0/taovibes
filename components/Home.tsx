import { useState } from 'react'
import Head from 'next/head'
import CardItem from 'components/CardItem'
import NavBar from 'components/NavBar'
import Cart from 'components/Cart'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

interface Props {
  products?: unknown[]
  error?: string
}

interface Product {
  id: string
  description: string
  images: []
  name: string
}

const stripePromise = loadStripe(
  'pk_test_51IxGBDKhu8QN3H5CjvNZbJYbY6mwnLUookgLLgXytYwkyBFwP2VoV4XO75FQwPweHpCWbXb7cvEZLhv3KkgpML3G00zERK9Sim'
)
const Home: React.FC<Props> = ({ products, error }) => {
  const [open, setOpen] = useState(false)
  const handleClick = async (id: string) => {
    const stripe = await stripePromise
    const { data } = await axios.post('/api/create-checkout-session', { product: id })
    const result = await stripe.redirectToCheckout({
      sessionId: data.id,
    })

    if (result.error) {
      console.log(result.error)
    }
  }
  return (
    <>
      <Cart open={open} setOpen={setOpen} />
      <NavBar setOpen={setOpen} />
      {console.log(products)}
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
            {!error
              ? products.map((product: Product) => {
                  return (
                    <div key={product.id} className="column is-half">
                      <CardItem
                        id={product.id}
                        description={product.description}
                        handleClick={() => handleClick(product.id)}
                        images={product.images}
                        name={product.name}
                      />
                    </div>
                  )
                })
              : 'error'}
          </div>
        </main>
      </div>
    </>
  )
}

export default Home
