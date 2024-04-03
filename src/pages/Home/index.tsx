import { Card } from "../../components/Card";
import { Hero } from "./components/Hero";
import { AllCoffee, ContentContainer } from "./styles";
import {coffees} from '../../../data.json'; // import from data.json file

export function Home(){

  return (
    <>
      <Hero/>
      {/* Content */ }
      <ContentContainer>
        <div className="container">
          <h2>Our Coffee</h2>
          <AllCoffee>
            {
              // Map the Coffees array
              coffees.map((item) => {
                return (
                  <Card coffee={item} key={item.id}/>
                )
              })
            }
          </AllCoffee>
        </div>
      </ContentContainer>
    </>
  )
}