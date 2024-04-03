import { InputHTMLAttributes, useState, FocusEvent, forwardRef, LegacyRef} from "react";
import { Box, ErrorMessage, InputWrapper } from "./styles";
import { FieldError } from 'react-hook-form';

// Creating the InputText Props extending default HTML props
export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement>{
  optional?: boolean; // optional boolean type
  error?: FieldError; //
  containerProps?: InputHTMLAttributes<HTMLDivElement>;
}
// Component
export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  function InputText(
  { optional, error, containerProps, onFocus, onBlur, ...rest }: InputTextProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  // forwardRef = function is used to pass a ref through to a component. The `forwardRef` function is used to allow a parent component to send a ref to its child components.

  // States
  const [isFocused, setIsFocused] = useState(false);
  // Functions
  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    // Sets the state variable isFocused to true when the input field gains focus
    setIsFocused(true);
    // Invokes the onFocus function if it exists and passes the event object as an argument
    onFocus?.(event)  // if onFocus exists, invokes the function
  }
  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    // Sets the state variable isFocused to false when the input field loses focus
    setIsFocused(false);
    onBlur?.(event)
  }
  return (
    <Box {...containerProps}>
      <InputWrapper data-state={isFocused ? 'focused' : 'blurred'} haserror={!!error}>
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          {...rest} // inherit  all other props passed to it</input>
          >
        </input>
        {optional && <span>Optional</span>}
      </InputWrapper>
      {
        error?.message ? (
          <ErrorMessage role="alert">{error.message}</ErrorMessage>
        ) : null
      }
    </Box>
  )
})