import { SuccessHeader, SuccessContainer, SuccessInfos } from './styles'

import deliveryImage from '../../assets/delivery-image.svg'

export function Success() {
  return (
    <SuccessContainer>
      <SuccessHeader>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessHeader>

      <SuccessInfos>
        <p>
          Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
        </p>
        <p>Farrapos - Porto Alegre, RS</p>

        <p>Previsão de entrega</p>
        <p>
          <strong>20 min - 30 min</strong>
        </p>
        <p>Pagamento na entrega</p>
        <p>
          <strong>Cartão de Crédito</strong>
        </p>
      </SuccessInfos>
      <img src={deliveryImage} alt="" />
    </SuccessContainer>
  )
}
