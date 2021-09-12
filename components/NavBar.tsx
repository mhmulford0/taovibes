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
  const cartLength = cartData.reduce((a, b) => a + (b.quantity || 0), 0)
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <b>TaoV</b>
        </div>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">{/* <a className="navbar-item">Home</a> */}</div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary is-medium" onClick={() => setOpen(true)}>
                <FaShoppingCart />
                <span className="tag is-danger ml-2">{cartLength} </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
