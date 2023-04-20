import { Banner } from './components/Banner'
import { ProductsView } from './components/ProductsView'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <ProductsView />
    </HomeContainer>
  )
}
