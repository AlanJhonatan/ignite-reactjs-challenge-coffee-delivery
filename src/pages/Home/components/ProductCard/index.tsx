import {
  AddCartButton,
  CardFooter,
  CartQuantityInput,
  LabelWrapper,
  PriceContainer,
  ProductCardContainer,
  ProductDescriptionWrapper,
} from './styles'

import coffeImage from '../../../../assets/cafe-cubano.png'
import { ShoppingCartSimple } from 'phosphor-react'

export function ProductCard() {
  return (
    <ProductCardContainer>
      <img src={coffeImage} alt="" />

      <LabelWrapper>
        <strong>Tradicional</strong>
        <strong>Alcoólico</strong>
        <strong>Gelado</strong>
      </LabelWrapper>

      <ProductDescriptionWrapper>
        <h3>Expresso Tradicional</h3>
        <p>Drink gelado de café expresso com rum, creme de leite e hortelã</p>
      </ProductDescriptionWrapper>

      <CardFooter>
        <PriceContainer>
          RS$ <strong>9,90</strong>
        </PriceContainer>

        <div>
          <CartQuantityInput type="number" value={1} />
          <AddCartButton>
            <ShoppingCartSimple size={20} weight="fill" />
          </AddCartButton>
        </div>
      </CardFooter>
    </ProductCardContainer>
  )
}
