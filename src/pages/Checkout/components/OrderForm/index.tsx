import { MapPinLine } from 'phosphor-react'
import { OrderFormContainer, OrderFormHeader, OrderFormInput } from './styles'

export function OrderForm() {
  return (
    <OrderFormContainer>
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
    </OrderFormContainer>
  )
}
