import successIllustration from '../../assets/images/success-illustration.png';
import iconLocation from '../../assets/images/icon_location.svg';
import iconMoney from '../../assets/images/icon_money.svg';
import iconTimer from '../../assets/images/icon_timer.svg';
import { SectionSuccess, SectionSuccessImage, SectionSuccessText } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { OrderDataForm } from '../Cart';
import { useEffect } from 'react';

interface LocationType {
  state: OrderDataForm;
}

export function Success() {

  const { state } = useLocation() as unknown as LocationType; // now use the data here
  const navigate = useNavigate();

  // Criar useEffect para evitar entrar sem state (porque senao a pagina quebra)
  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [state, navigate]);

  if (!state) return <></>; // return HTML empty so does not break website

  // Capitalize Letter
  function Capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const CapitalPaymentMethod = Capitalize(state.paymentMethod);

  return (
    <SectionSuccess>
      <div className="container">
        <SectionSuccessText>
          <h2>Woohoo! Order confirmed</h2>
          <h4>Now just wait and the coffee will soon reach you.</h4>
          <ul>
            <li>
              <img src={iconLocation} alt="" />
              <p>Delivery to {state.street}, {state.number} {state.neighborhood} - {state.city}, {state.neighborhood}</p>
            </li>
            <li>
              <img src={iconTimer} alt="" />
              <p>Delivery forecast 20 min - 30 min</p>
            </li>
            <li>
              <img src={iconMoney} alt="" />
              <p>Payment on delivery&nbsp;
                {CapitalPaymentMethod === 'Credit' || CapitalPaymentMethod === 'Debit' ? (
                  <span>{CapitalPaymentMethod} card.</span>
                ) : (
                  <span>{CapitalPaymentMethod}.</span>
                )}
              </p>
            </li>
          </ul>
        </SectionSuccessText>
        <SectionSuccessImage>
          <img src={successIllustration} alt="" />
        </SectionSuccessImage>
      </div>
    </SectionSuccess>
  )
}