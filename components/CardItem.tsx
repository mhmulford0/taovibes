import React, { useState, Dispatch, SetStateAction } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import Image from 'next/image'

interface Props {
  setCartData: Dispatch<SetStateAction<any[]>>
  id: string
  description: string
  images: string[]
  name: string
  price: string
  cost: number
}

const CardItem: React.FC<Props> = ({ price, description, images, name, setCartData, cost }) => {
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const displayPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  const plusOne = () => {
    setQty(qty + 1)
  }
  const minusOne = () => {
    if (qty > 1) {
      setQty(qty - 1)
    }
  }

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <Image src={images[0] || ''} alt="item" />
        </figure>
      </div>
      <div className="card-content">
        <div className="content mb-2">
          <p className="title is-4 mb-2">{name}</p>
          <p className="mt-4">{description}</p>
          <div
            className="control mb-5 is-half"
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <button type="button" className="button is-primary is-medium mx-2" onClick={plusOne}>
              <FaPlus />
            </button>
            <input
              className="input is-medium"
              type="text"
              placeholder="Quantity"
              value={qty}
              readOnly
              style={{ width: '20%', textAlign: 'center' }}
            />
            <button
              type="button"
              className="button is-primary is-medium is-danger mx-2"
              onClick={minusOne}
            >
              <FaMinus />
            </button>
          </div>
          {added ? (
            <button
              role="link"
              type="button"
              className="button is-info is-medium is-fullwidth"
              disabled
            >
              Added
            </button>
          ) : (
            <button
              role="link"
              type="button"
              className="button is-info is-medium is-fullwidth"
              onClick={() => {
                setAdded(true)
                setCartData((prevState) => [...prevState, { price, quantity: qty, images, name }])
              }}
            >
              Add To Cart {displayPrice.format((cost / 100) * qty)}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CardItem
