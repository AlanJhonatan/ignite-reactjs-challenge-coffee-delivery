import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/coffee-delivery-logo.png'
import { CheckoutButton, HeaderContainer, LocationButton } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <img src={logo} alt="Coffe Delivery Logo" />

        <div>
          <LocationButton>
            <MapPin size={22} weight="fill" />
            Sorocaba, SP
          </LocationButton>
          <CheckoutButton>
            <ShoppingCart size={25} weight="fill" />
          </CheckoutButton>
          {/* <CheckoutButton> */}
        </div>
      </nav>
    </HeaderContainer>
  )
}
