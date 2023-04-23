import { CheckoutItem } from '../CheckoutItem'
import {
  OrderInfosWrapper,
  Separator,
  SubmitOrderButton,
  SubmitOrderFormContainer,
} from './styles'

export function SubmitOrderForm() {
  return (
    <SubmitOrderFormContainer>
      <div>
        <CheckoutItem />
        <Separator />

        <CheckoutItem />
        <Separator />

        <CheckoutItem />
        <Separator />
      </div>

      <OrderInfosWrapper>
        <div>
          <span>Total de itens</span>
          <span>R$ 29,70</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </div>
        <div>
          <strong>Total</strong>
          <strong>R$ 33,20</strong>
        </div>
      </OrderInfosWrapper>

      <SubmitOrderButton>Confirmar pedido</SubmitOrderButton>
    </SubmitOrderFormContainer>
  )
}
