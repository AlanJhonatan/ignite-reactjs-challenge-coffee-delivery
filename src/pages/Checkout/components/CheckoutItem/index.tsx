import { CheckoutItemContainer, RemoveCartButton } from './styles'

import coffeImage from '../../../../assets/cafe-arabe.png'
import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'

export function CheckoutItem() {
  return (
    <CheckoutItemContainer>
      <img src={coffeImage} alt="" />
      <div>
        <p>Expresso tradicional</p>
        <div>
          <QuantityInput />
          <RemoveCartButton>
            <Trash size={16} />
            Remover
          </RemoveCartButton>
        </div>
      </div>
      <strong>R$ 9,90</strong>
    </CheckoutItemContainer>
  )
}
