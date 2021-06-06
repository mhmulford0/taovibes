/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { FaShoppingCart } from 'react-icons/fa'

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  cartData: any[]
}

const NavBar: React.FC<Props> = ({ setOpen, cartData }) => {
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <b>TaoV</b>
        </div>
        <button
          className="navbar-burger button is-info button is-medium"
          data-target="navbarBasicExample"
          onClick={() => setOpen(true)}
          type="button"
        >
          <FaShoppingCart />
        </button>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">{/* <a className="navbar-item">Home</a> */}</div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-info is-medium" onClick={() => setOpen(true)}>
                <strong>Cart</strong>
                <FaShoppingCart />
                <span className="tag is-danger ml-2">{cartData.length} </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
