import { Check, ShoppingCart } from 'phosphor-react';
import { CardCoffee, CardCoffeeFooter, OrderButton } from './styles';
import { QuantityInput } from '../Form/QuantityInput';
import { useState } from 'react';
import { useTheme } from 'styled-components';
import { useCart } from '../../hooks/useCart';

// Interface TypeScript
export interface Coffee {
  id: number,
  name: string,
  description: string,
  price: number,
  image: string,
  tags: Array<string>
}
type CoffeeProps = {
  coffee: Coffee;
}
export function Card({ coffee }: CoffeeProps) {
  // Theme Hook
  const theme = useTheme();
  // States
  const [quantity, setQuantity] = useState(1);
  const [isItemAdded, setIsItemAdded] = useState(false);
  // Function (Context)
  const { addCoffeeToCart } = useCart();
  // Functions
  function handleIncrementQuantity() {
    setQuantity((state) => state + 1) // Closures Concept (valor antigo + atual)
  }
  function handleDecrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1) // Closures Concept
    }
  }
  function handleAddToCart() {
    const coffeeToAdd = { // spread properties of coffee + quantity (value is taken from the state)
      ...coffee,
      quantity,
    };
    addCoffeeToCart(coffeeToAdd) // add to the function from the context
    setIsItemAdded(true)
  }
  return(
    <CardCoffee>
      <img src={coffee.image} alt={coffee.name} className='cardCoffeeImage'/>
      <div className="tags">
        { // Array<string>
          coffee.tags.map((item) => {
            return (
              <span key={item}>{item}</span>
            )
          })
        }
      </div>
      <h4>{coffee.name}</h4>
      <p>{coffee.description}</p>
      <CardCoffeeFooter>
        <div className="cardfooter__price">
          <p><span>£ </span>{coffee.price.toFixed(2)}</p>
        </div>
        <OrderButton $itemAdded={isItemAdded}>
          <QuantityInput
            quantity={quantity}
            incrementQuantity={handleIncrementQuantity}
            decrementQuantity={handleDecrementQuantity}
          />
          <button type='button' onClick={handleAddToCart} disabled={isItemAdded}>
            {
              isItemAdded ? <Check size={22} color={theme['base-card']} /> : <ShoppingCart size={22} color={theme['base-card']}/>
            }
          </button>
        </OrderButton>
      </CardCoffeeFooter>
    </CardCoffee>
  )
}