import { RadioInputContainer, StyledInput, StyledLabel } from "./styles";
import {InputHTMLAttributes, LegacyRef, forwardRef} from "react";

// Interface containing InputHTMLAttributes + those below set to required
export interface InputElementProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  disabled?: boolean;
  isSelected?: boolean; // Additional property to indicate if the radio button is selected
}

export const RadioInput = forwardRef(function RadioInput (
  {id, label, name, disabled = false, isSelected, children, ...rest } : InputElementProps, // Destructure props including children, isSelected, and rest
   ref : LegacyRef<HTMLInputElement>,  // Define the ref for the input element
   ){
    return (
      <RadioInputContainer data-state={isSelected}> {/* Container with a data-state attribute */}
        <StyledInput type="radio" name={name} id={id} disabled={disabled} {...rest} ref={ref}/> {/* Radio input element with ref and other props */}
        <StyledLabel htmlFor={id} disabled={disabled}>
          {children} {/* Render any children passed to the Radio component */}
          {label}
        </StyledLabel>
      </RadioInputContainer>
    )
})