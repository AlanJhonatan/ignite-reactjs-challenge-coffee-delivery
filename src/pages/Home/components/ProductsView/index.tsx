import { ProductCard } from '../ProductCard'
import { ProductsCardList, ProductsViewContainer } from './styles'

export function ProductsView() {
  return (
    <ProductsViewContainer>
      <h1>Nossos Cafés</h1>

      <ProductsCardList>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductsCardList>
    </ProductsViewContainer>
  )
}
