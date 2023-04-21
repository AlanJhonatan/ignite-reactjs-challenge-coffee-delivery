import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  CheckoutContainer,
  OrderForm,
  OrderFormHeader,
  OrderFormInput,
  PaymentForm,
  PaymentFormHeader,
  PaymentMethodButton,
  PaymentMethodWrapper,
  SubmitOrderContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h3>Complete seu pedido</h3>

        <OrderForm>
          <OrderFormHeader>
            <MapPinLine size={22} />
            <div>
              <span>Endereço de entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </OrderFormHeader>

          <OrderFormInput type="text" placeholder="CEP" />
          <OrderFormInput type="text" placeholder="Rua" />
          <OrderFormInput type="text" placeholder="Número" />
          <OrderFormInput type="text" placeholder="Complemento" />
          <OrderFormInput type="text" placeholder="Bairro" />
          <OrderFormInput type="text" placeholder="Cidade" />
          <OrderFormInput type="text" placeholder="UF" />
        </OrderForm>

        <PaymentForm>
          <PaymentFormHeader>
            <CurrencyDollarSimple size={22} />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PaymentFormHeader>

          <PaymentMethodWrapper>
            <PaymentMethodButton>
              <CreditCard size={18} />
              <p>Cartão de Crédito</p>
            </PaymentMethodButton>

            <PaymentMethodButton>
              <Bank size={18} />
              <p>Débito</p>
            </PaymentMethodButton>

            <PaymentMethodButton>
              <Money size={18} />
              <p>Dinheiro</p>
            </PaymentMethodButton>
          </PaymentMethodWrapper>
        </PaymentForm>
      </div>

      <div>
        <h3>Cafés selecionados</h3>
        <SubmitOrderContainer />
      </div>
    </CheckoutContainer>
  )
}
