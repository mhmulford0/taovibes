import { useState } from 'react'
import Head from 'next/head'

import CardItem from 'components/CardItem'
import NavBar from 'components/NavBar'
import Cart from 'components/Cart'

interface Props {
  products: unknown[]
  error: string
}

interface Product {
  id: string
  description: string
  images: []
  name: string
  price: string
}

const Home: React.FC<Props> = ({ products, error }) => {
  const [open, setOpen] = useState(false)
  const [cartData, setCartData] = useState([])
  return (
    <>
      <Cart open={open} setOpen={setOpen} cartData={cartData} />
      <NavBar setOpen={setOpen} cartData={cartData} />
      <div className="container">
        <Head>
          <title>Tao Vibrations</title>
          <meta name="description" content="Tao Vibrations Online Shop" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="section is-medium">
          <div className="columns has-text-centered">
            <div className="column is-12 is-flex is-align-items-flex-center is-justify-content-center is-flex-direction-column has-text-centered">
              <span style={{ marginTop: '3rem' }}>
                <img className="is-rounded" width="125px" src="/logo.png" alt="logo" />
              </span>
              <h1 className="title is-1 has-text-centered is-inline mb-6">Tao Vibrations</h1>
            </div>
          </div>

          <div className="columns is-flex-wrap-wrap is-justify-content-center is-align-items-center is-flex-grow-1">
            {!error
              ? products.map((product: Product) => {
                  return (
                    <div key={product.id} className="column is-centered is-two-fifths">
                      <CardItem
                        id={product.id}
                        description={product.description}
                        images={product.images}
                        name={product.name}
                        setCartData={setCartData}
                        price={product.price}
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
