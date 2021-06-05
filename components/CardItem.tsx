import React, { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

interface Props {
  handleClick: (id: string) => void
  id: string
  description: string
  images: string[]
  name: string
}

const CardItem: React.FC<Props> = ({ handleClick, id, description, images, name }) => {
  const [qty, setQty] = useState(1)
  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setQty(+e.currentTarget.value)
    return e.currentTarget.value
  }
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
        <div className="content">
          <p className="title is-4">{name}</p>
          <p>{description}</p>
          <div
            className="control mb-4 is-half"
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <button type="button" className="button is-primary is-medium" onClick={plusOne}>
              <FaPlus />
            </button>
            <input
              className="input is-medium mx-2"
              type="text"
              placeholder="Quantity"
              value={qty}
              readOnly
            />
            <button
              type="button"
              className="button is-primary is-medium is-danger"
              onClick={minusOne}
            >
              <FaMinus />
            </button>
          </div>
          <button
            role="link"
            type="button"
            className="button is-info is-medium is-fullwidth"
            onClick={() => handleClick(id)}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardItem
