interface Props {
  handleClick: () => void
  id: string
  description: string
  images: string[]
  name: string
}

const CardItem: React.FC<Props> = ({ handleClick, id, description, images, name }) => {
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
