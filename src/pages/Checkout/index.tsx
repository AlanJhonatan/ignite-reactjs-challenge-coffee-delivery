import { OrderForm } from './components/OrderForm'
import { CheckoutContainer } from './styles'
import { SubmitOrderForm } from './components/SubmitOrderForm'
import { PaymentForm } from './components/PaymentForm'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h3>Complete seu pedido</h3>

        <OrderForm />
        <PaymentForm />
      </div>

      <div>
        <h3>Cafés selecionados</h3>

        <SubmitOrderForm />
      </div>
    </CheckoutContainer>
  )
}
