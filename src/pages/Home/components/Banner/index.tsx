import { Clock, Coffee, Package, ShoppingCart } from 'phosphor-react'
import { BannerContainer, IconCircle, IconContainer } from './styles'
import bannerImage from '../../../../assets/banner-coffee.svg'

export function Banner() {
  return (
    <BannerContainer>
      <div>
        <h2>
          Encontre o café perfeito <br />
          para qualquer hora do dia
        </h2>

        <h3>
          Com o Coffee Delivery você recebe seu café onde estiver, a <br />
          qualquer hora
        </h3>

        <IconContainer>
          <div>
            <IconCircle backgroundColor={'yellow-dark'}>
              <ShoppingCart size={16} weight="fill" />
            </IconCircle>
            Compra Simples e segura
          </div>

          <div>
            <IconCircle backgroundColor={'base-text'}>
              <Package size={16} weight="fill" />
            </IconCircle>
            Embalagem mantém o café intacto
          </div>

          <div>
            <IconCircle backgroundColor={'yellow'}>
              <Clock size={16} weight="fill" />
            </IconCircle>
            Entrega rápida e rastreada
          </div>

          <div>
            <IconCircle backgroundColor={'purple'}>
              <Coffee size={16} weight="fill" />
            </IconCircle>
            O café chega fresquinho até você
          </div>
        </IconContainer>
      </div>

      <img src={bannerImage} alt="" />
    </BannerContainer>
  )
}
