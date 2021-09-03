import {createGlobalStyle} from "styled-components";
import Italiana from '../src/fonts/Italiana-Regular.ttf'
import Cormorant from '../src/fonts/Cormorant-Regular.ttf'

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Italiana';
    src: url(${Italiana})
  }

  @font-face {
    font-family: 'Cormorant';
    src: url(${Cormorant})
  }
`
export default FontStyles;
