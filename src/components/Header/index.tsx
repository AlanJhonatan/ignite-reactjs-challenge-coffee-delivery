import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/coffee-delivery-logo.png'
import { CheckoutButton, HeaderContainer, LocationButton } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/">
          <img src={logo} alt="Coffe Delivery Logo" />
        </NavLink>

        <div>
          <LocationButton>
            <MapPin size={22} weight="fill" />
            Sorocaba, SP
          </LocationButton>

          <NavLink to="/checkout">
            <CheckoutButton>
              <ShoppingCart size={25} weight="fill" />
            </CheckoutButton>
          </NavLink>
        </div>
      </nav>
    </HeaderContainer>
  )
}
