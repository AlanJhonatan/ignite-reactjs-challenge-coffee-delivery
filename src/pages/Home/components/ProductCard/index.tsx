import { LabelWrapper, ProductCardContainer } from './styles'

import coffeImage from '../../../../assets/cafe-cubano.png'
// interface Coffee {
//   id: string
//   labels: string[]
//   name: string
//   description: string
//   price: number
// }

// const coffes: Coffee = {
//   id: new Date().toString(),
//   labels: ['especial', 'alcoólico', 'gelado'],
//   name: 'Cubano',
//   description:
//     'Drink gelado de café expresso com rum, creme de leite e hortelã',
//   price: 9.9,
// }

export function ProductCard() {
  return (
    <ProductCardContainer>
      <img src={coffeImage} alt="" />

      <LabelWrapper>
        <strong>Tradicional</strong>
        <strong>Alcoólico</strong>
        <strong>Gelado</strong>
      </LabelWrapper>

      <h3>Expresso Tradicional</h3>

      <p>Drink gelado de café expresso com rum, creme de leite e hortelã</p>
    </ProductCardContainer>
  )
}
