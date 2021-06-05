interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Cart: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <div className={open ? 'modal is-active' : 'modal'}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Your Cart</p>
        </header>
        <section className="modal-card-body">this is where items go</section>
        <footer className="modal-card-foot">
          <button className="button is-success" type="button">
            Checkout
          </button>
          <button className="button" type="button" onClick={() => setOpen(false)}>
            Close
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Cart
