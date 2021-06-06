import React, { useState, Dispatch, SetStateAction } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

interface Props {
  setCartData: Dispatch<SetStateAction<any[]>>
  id: string
  description: string
  images: string[]
  name: string
  price: string
}

const CardItem: React.FC<Props> = ({ price, description, images, name, setCartData }) => {
  const [qty, setQty] = useState(1)

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
        <figure className="image is-4by3">
          <img src={images[0] || ''} alt="Candle" />
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
          <button
            role="link"
            type="button"
            className="button is-info is-medium is-fullwidth"
            onClick={() => setCartData((prevState) => [...prevState, { price, quantity: qty }])}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardItem
