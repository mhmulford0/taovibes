const CardItem = ({ handleClick }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src="/candle.jpg" alt="Candle" />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <p className="title is-4">Aroma Therapy Candle</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
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
  )
}

export default CardItem
