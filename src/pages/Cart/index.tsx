import { useTheme } from "styled-components";
import { CartContainer, InfoContainer, BasketContainer, BasketInfo, CheckoutButton, CoffeeBasket, CoffeeItem, RemoveButton, FormsContainer, BasketTotalInfo, AddressContainer, AddressContainerTitle, AddressFormInfo, PaymentContainer, PaymentContainerTitle, PaymentOptions, PaymentErrorMessage} from "./styles";
import { Bank, CreditCard, CurrencyGbp, MapPinLine, Money, Trash } from "phosphor-react";
import * as zod from 'zod'; // import ZOD library
import { zodResolver } from "@hookform/resolvers/zod"; // integrate with ZOD
import { useForm, SubmitHandler } from 'react-hook-form'; // useForm and FormProvider (use as Provider)
import { QuantityInput } from "../../components/Form/QuantityInput";
import { useCart } from "../../hooks/useCart";
import { CartItem } from "../../contexts/CartProvider";
import { InputText } from "../../components/Form/InputText";
import { RadioInput } from "../../components/Form/Radio";
import { useNavigate } from "react-router-dom";

type FormInputs = {
  cep: string
  street: string
  number: number
  fullAddress: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}
// Schema Validation
const orderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Give the postcode'),
  street: zod.string().min(1, 'Give the street name'),
  number: zod.number().min(1, 'Inform the house number'),
  fullAddress: zod.string(),
  neighborhood: zod.string().min(1, 'Inform the neighborhood'),
  city: zod.string().min(1, 'Inform the city'),
  state: zod.string().min(1, 'Inform the 2 letters council'),
  paymentMethod: zod.enum(['credit', 'debit', 'cash'], { // enum: possible values
    invalid_type_error: 'Select payment method.',
  }),
})
export type OrderDataForm = zod.infer<typeof orderFormValidationSchema>; // create  a Type for the data (using infer from zod) = inferir os tipos do objeto confirmOrderFormValidationSchema

export function Cart() {
  // Theme
  const theme = useTheme();
  // CartItems
  const { cartItems, changeCartItemQuantity, removeItemCart } = useCart();
  // Variables
  const deliveryPrice = 3.50;
  // Functions
  function handleIncrementQuantity(itemId : number) {
    changeCartItemQuantity(itemId, 'increase');
  }
  function handleDecrementQuantity(itemId: number) {
    changeCartItemQuantity(itemId, 'decrease');
  }
  function handleRemoveItemCart(itemId: number) {
    removeItemCart(itemId);
  }
  function calculateItemPrice(item : CartItem) {
    return item.price * item.quantity;
  }
  const totalItemsPrice = cartItems.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity)
  }, 0); // The reduce function iterates over each item in the array and accumulates a single value, in this case, the total price.
  const totalOrderPrice = deliveryPrice + totalItemsPrice;

  // Form
  const { register, handleSubmit, watch, formState: {errors} } = useForm<FormInputs>({
    resolver: zodResolver(orderFormValidationSchema),
  })

  // Watch the payment method changes
  const selectedPaymentMethod = watch('paymentMethod')

  // Navigate to another route (React Router DOM)
  const navigate = useNavigate();
  const {cleanCart} = useCart();

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    if (cartItems.length === 0) {
      return alert('You need at least one item in the cart.')
    }
    console.log(data);
    navigate("/success", {
      state: data, // send state (which in this case is data)
    });
    cleanCart(); // clean the cart
  }
  //console.log(errors); // display errors

  return (
    <div className="container">
      <CartContainer>
        <InfoContainer>
        <h2>Finish your Order</h2>
          {/* Form */}
          <FormsContainer onSubmit={handleSubmit(handleOrderCheckout)} id="order">
              {/* <OrderForm/> */}
              <AddressContainer>
                <AddressContainerTitle>
                  <MapPinLine size={22} color={theme['yellow-dark']}/>
                  <div>
                    <h2>Delivery Address</h2>
                    <p>Inform the address where you want to receive your order.</p>
                  </div>
                </AddressContainerTitle>
                <AddressFormInfo>
                <InputText
                    placeholder={"Postcode"}
                    containerProps={{ style: { gridArea: 'cep' } }}
                    error={errors.cep}
                    {...register('cep')}
                  />
                  <InputText
                    placeholder={"Street"}
                    containerProps={{ style: { gridArea: 'street' } }}
                    error={errors.street}
                    {...register('street')}
                  />
                 <InputText
                   type={"number"}
                    placeholder={"Number"}
                    containerProps={{ style: { gridArea: 'number' } }}
                    error={errors.number}
                    {...register('number', { valueAsNumber: true })}
                  />
                  <InputText
                    placeholder={"Complement"}
                    optional={true}
                    containerProps={{ style: { gridArea: 'fullAddress' } }}
                    error={errors.fullAddress}
                    {...register('fullAddress')}
                  />
                  <InputText
                    placeholder={"County"}
                    containerProps={{ style: { gridArea: 'neighborhood' } }}
                    error={errors.neighborhood}
                    {...register('neighborhood')}
                  />
                  <InputText
                    placeholder={"City"}
                    containerProps={{ style: { gridArea: 'city' } }}
                    error={errors.city}
                    {...register('city')}
                  />
                  <InputText
                    placeholder={"State"}
                    containerProps={{ style: { gridArea: 'state' } }}
                    error={errors.state}
                    {...register('state')}
                  />
                </AddressFormInfo>
              </AddressContainer>
              {/* Payment Section */}
              <PaymentContainer>
                <PaymentContainerTitle>
                  <CurrencyGbp size={22} color={theme['purple-dark']} weight="bold"/>
                  <div>
                    <h2>Payment</h2>
                    <p>Payment is made upon delivery. Choose the way you want to pay</p>
                  </div>
                </PaymentContainerTitle>
                <PaymentOptions>
                  <RadioInput
                    id="1"
                    label="Credit Card"
                    isSelected={selectedPaymentMethod === 'credit'}
                    value="credit"
                    {...register('paymentMethod')}
                  >
                    {<CreditCard size={32} weight="bold" />}
                  </RadioInput>
                  <RadioInput
                    id="2"
                    label="Debit Card"
                    isSelected={selectedPaymentMethod === 'debit'}
                    value="debit"
                    {...register('paymentMethod')}
                  >
                    {<Bank size={32} weight="bold" />}
                  </RadioInput>
                  <RadioInput
                    id="3"
                    label="Cash"
                    isSelected={selectedPaymentMethod === 'cash'}
                    value="cash"
                    {...register('paymentMethod')}
                  >
                    {<Money size={32} weight="bold" />}
                  </RadioInput>
                </PaymentOptions>
              {
                errors.paymentMethod ? (
                  <PaymentErrorMessage>
                    {errors.paymentMethod.message}
                  </PaymentErrorMessage>
                ) : null
              }
              </PaymentContainer>

          </FormsContainer>
        </InfoContainer>
        {/* Basket Container */}
        <BasketContainer>
          <h2>Coffee Selected</h2>
          <BasketInfo>
            <CoffeeBasket>
              {
                /* Map Coffee Items */
                cartItems.map((item) => {
                  return (
                    <CoffeeItem key={item.id} >
                      <img src={item.image} alt="" />
                      <div className="content">
                        <div className="info">
                          <p>{item.name}</p>
                          <div className="buttons">
                            <QuantityInput
                              quantity={item.quantity}
                              incrementQuantity={() => handleIncrementQuantity(item.id)}
                              decrementQuantity={() => handleDecrementQuantity(item.id)}
                            />
                            <RemoveButton onClick={() => handleRemoveItemCart(item.id)}>
                              <Trash size={16} color={theme['purple']} weight="bold"/>
                              Remove
                            </RemoveButton>
                          </div>
                        </div>
                        <aside>£ {calculateItemPrice(item).toFixed(2)}</aside>
                      </div>
                    </CoffeeItem>
                  )
                })
              }
            </CoffeeBasket>
            <BasketTotalInfo>
              <p>Total of items: <span>£ {totalItemsPrice.toFixed(2)}</span></p>
              <p>Delivery: <span>£ {deliveryPrice.toFixed(2)}</span></p>
              <p className="total">Total: <span>£ {totalOrderPrice.toFixed(2)}</span></p>
              <CheckoutButton type="submit" form="order" disabled={cartItems.length <= 0}>
                Confirm Order
              </CheckoutButton>
            </BasketTotalInfo>
          </BasketInfo>
        </BasketContainer>
      </CartContainer>
    </div>
  )
}