import { Minus, Plus } from 'phosphor-react'
import { QuantityInputContainer } from './styles'

export function QuantityInput() {
  return (
    <QuantityInputContainer>
      <Minus size={14} weight="bold" />
      1
      <Plus size={14} weight="bold" />
    </QuantityInputContainer>
  )
}
