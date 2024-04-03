// Images
import { Coffee, Cube, ShoppingCart, Timer } from 'phosphor-react';
import imageHero from '../../../../assets/images/coffee-hero.png';
import { SectionHero, SectionHeroText } from './styles';

export function Hero() {
  return (
    <SectionHero>
      <div className="container">
        <SectionHeroText>
          <h1>Find the perfect coffee for any time of day</h1>
          <h4>With Coffee Delivery you receive your coffee wherever you are, anytime</h4>
          <ul>
            <li className='item__01'>
              <div className="icon">
                <ShoppingCart size={16} />
              </div>
              <p>Simple and secure purchase</p>
            </li>
            <li className='item__02'>
              <div className="icon">
                <Cube size={16} />
              </div>
              <p>Packaging keeps the coffee intact</p>
            </li>
            <li className='item__03'>
              <div className="icon">
                <Timer size={16} />
              </div>
              <p>Fast and tracked delivery</p>
            </li>
            <li className='item__04'>
              <div className="icon">
                <Coffee size={16} />
              </div>
              <p>The coffee arrives fresh to you</p>
            </li>
          </ul>
        </SectionHeroText>
        <div className="hero__image">
          <img src={imageHero} alt="" title="" />
        </div>
      </div>
    </SectionHero>
  )
}