import {
  OrderInfosWrapper,
  OrderItem,
  Separator,
  SubmitOrderButton,
  SubmitOrderFormContainer,
} from './styles'
import coffeImage from '../../../../assets/cafe-arabe.png'
import { TrashSimple } from 'phosphor-react'

export function SubmitOrderForm() {
  return (
    <SubmitOrderFormContainer>
      <div>
        <OrderItem>
          <img src={coffeImage} alt="" />
          <div>
            <p>Expresso tradicional</p>
            <input type="number" />
            <button>
              <TrashSimple size={16} />
              Remover
            </button>
          </div>
          <strong>R$ 9,90</strong>
        </OrderItem>

        <Separator />

        <OrderItem>
          <img src={coffeImage} alt="" />
          <div>
            <p>Latte</p>
            <input type="number" />
            <button>
              <TrashSimple size={16} />
              Remover
            </button>
          </div>
          <strong>R$ 16,90</strong>
        </OrderItem>

        <Separator />

        <OrderItem>
          <img src={coffeImage} alt="" />
          <div>
            <p>Cubano</p>
            <input type="number" />
            <button>
              <TrashSimple size={16} />
              Remover
            </button>
          </div>
          <strong>R$ 23,90</strong>
        </OrderItem>

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
