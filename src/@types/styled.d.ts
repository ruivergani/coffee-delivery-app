// File that contains only @type
import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme // all props in the ThemeType

// Create @type for style-components
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {} 
  // DefaultTheme (from styled-components)
}