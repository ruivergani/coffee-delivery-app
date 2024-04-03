import { ThemeProvider } from 'styled-components'; // Apply Theme
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { CartContextProvider } from './contexts/CartProvider';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        {/* Context Shopping Cart */}
        <CartContextProvider>
          <Router />
        </CartContextProvider>
        <GlobalStyle/>
      </ThemeProvider>
    </BrowserRouter>
  )
}