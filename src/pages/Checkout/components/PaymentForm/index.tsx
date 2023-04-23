import { Bank, CreditCard, CurrencyDollarSimple, Money } from 'phosphor-react'
import {
  PaymentFormContainer,
  PaymentFormHeader,
  PaymentMethodButton,
  PaymentMethodWrapper,
} from './styles'

export function PaymentForm() {
  return (
    <PaymentFormContainer>
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
    </PaymentFormContainer>
  )
}
