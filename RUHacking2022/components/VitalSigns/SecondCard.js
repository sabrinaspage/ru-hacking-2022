import * as React from "react"
import Svg, { Rect, Path, Defs, Pattern, Use } from "react-native-svg"

const SecondCard = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={169}
    height={256}
    fill="none"
    {...props}
  >
    <Rect width={184} height={256} fill="#EFF0F7" rx={32} />
    <Path
      fill="#6E7191"
      d="M58.09 33.86c0 .61-.14 1.17-.42 1.68-.28.5-.71.905-1.29 1.215-.58.31-1.3.465-2.16.465h-1.59V41h-2.565V30.47h4.155c.84 0 1.55.145 2.13.435.58.29 1.015.69 1.305 1.2.29.51.435 1.095.435 1.755zm-4.065 1.32c.49 0 .855-.115 1.095-.345.24-.23.36-.555.36-.975 0-.42-.12-.745-.36-.975-.24-.23-.605-.345-1.095-.345H52.63v2.64h1.395zm14.415-2.55V41h-2.565v-1.14c-.26.37-.615.67-1.065.9-.44.22-.93.33-1.47.33-.64 0-1.205-.14-1.695-.42a2.93 2.93 0 0 1-1.14-1.245c-.27-.54-.405-1.175-.405-1.905v-4.89h2.55v4.545c0 .56.145.995.435 1.305.29.31.68.465 1.17.465.5 0 .895-.155 1.185-.465.29-.31.435-.745.435-1.305V32.63h2.565zm5.157-2.73V41h-2.564V29.9h2.564zm6.014 11.22c-.73 0-1.38-.125-1.95-.375-.57-.25-1.02-.59-1.35-1.02-.33-.44-.515-.93-.555-1.47h2.535c.03.29.165.525.405.705.24.18.535.27.885.27.32 0 .565-.06.735-.18.18-.13.27-.295.27-.495 0-.24-.125-.415-.375-.525-.25-.12-.655-.25-1.215-.39-.6-.14-1.1-.285-1.5-.435-.4-.16-.745-.405-1.035-.735-.29-.34-.435-.795-.435-1.365 0-.48.13-.915.39-1.305.27-.4.66-.715 1.17-.945.52-.23 1.135-.345 1.845-.345 1.05 0 1.875.26 2.475.78.61.52.96 1.21 1.05 2.07h-2.37a1.01 1.01 0 0 0-.39-.69c-.21-.17-.49-.255-.84-.255-.3 0-.53.06-.69.18a.532.532 0 0 0-.24.465c0 .24.125.42.375.54.26.12.66.24 1.2.36.62.16 1.125.32 1.515.48.39.15.73.4 1.02.75.3.34.455.8.465 1.38 0 .49-.14.93-.42 1.32-.27.38-.665.68-1.185.9-.51.22-1.105.33-1.785.33zm13.6-4.44c0 .24-.015.49-.045.75H87.36c.04.52.205.92.495 1.2.3.27.665.405 1.095.405.64 0 1.085-.27 1.335-.81h2.73a3.698 3.698 0 0 1-.765 1.485c-.36.44-.815.785-1.365 1.035-.55.25-1.165.375-1.845.375-.82 0-1.55-.175-2.19-.525-.64-.35-1.14-.85-1.5-1.5-.36-.65-.54-1.41-.54-2.28 0-.87.175-1.63.525-2.28.36-.65.86-1.15 1.5-1.5.64-.35 1.375-.525 2.205-.525.81 0 1.53.17 2.16.51.63.34 1.12.825 1.47 1.455.36.63.54 1.365.54 2.205zm-2.625-.675c0-.44-.15-.79-.45-1.05-.3-.26-.675-.39-1.125-.39-.43 0-.795.125-1.095.375-.29.25-.47.605-.54 1.065h3.21zM104.613 41l-2.19-3.975h-.615V41h-2.566V30.47h4.306c.83 0 1.535.145 2.115.435.59.29 1.03.69 1.32 1.2.29.5.435 1.06.435 1.68 0 .7-.2 1.325-.6 1.875-.39.55-.97.94-1.74 1.17l2.43 4.17h-2.895zm-2.805-5.79h1.59c.47 0 .82-.115 1.05-.345.24-.23.36-.555.36-.975 0-.4-.12-.715-.36-.945-.23-.23-.58-.345-1.05-.345h-1.59v2.61zm7.46 1.59c0-.86.16-1.615.48-2.265.33-.65.775-1.15 1.335-1.5a3.466 3.466 0 0 1 1.875-.525c.59 0 1.105.12 1.545.36.45.24.795.555 1.035.945V32.63h2.565V41h-2.565v-1.185c-.25.39-.6.705-1.05.945-.44.24-.955.36-1.545.36-.68 0-1.3-.175-1.86-.525-.56-.36-1.005-.865-1.335-1.515-.32-.66-.48-1.42-.48-2.28zm6.27.015c0-.64-.18-1.145-.54-1.515-.35-.37-.78-.555-1.29-.555s-.945.185-1.305.555c-.35.36-.525.86-.525 1.5s.175 1.15.525 1.53c.36.37.795.555 1.305.555.51 0 .94-.185 1.29-.555.36-.37.54-.875.54-1.515zm9.835 2.01V41h-1.305c-.93 0-1.655-.225-2.175-.675-.52-.46-.78-1.205-.78-2.235v-3.33h-1.02v-2.13h1.02v-2.04h2.565v2.04h1.68v2.13h-1.68v3.36c0 .25.06.43.18.54.12.11.32.165.6.165h.915zm10.069-2.145c0 .24-.015.49-.045.75h-5.805c.04.52.205.92.495 1.2.3.27.665.405 1.095.405.64 0 1.085-.27 1.335-.81h2.73a3.698 3.698 0 0 1-.765 1.485c-.36.44-.815.785-1.365 1.035-.55.25-1.165.375-1.845.375-.82 0-1.55-.175-2.19-.525-.64-.35-1.14-.85-1.5-1.5-.36-.65-.54-1.41-.54-2.28 0-.87.175-1.63.525-2.28.36-.65.86-1.15 1.5-1.5.64-.35 1.375-.525 2.205-.525.81 0 1.53.17 2.16.51.63.34 1.12.825 1.47 1.455.36.63.54 1.365.54 2.205zm-2.625-.675c0-.44-.15-.79-.45-1.05-.3-.26-.675-.39-1.125-.39-.43 0-.795.125-1.095.375-.29.25-.47.605-.54 1.065h3.21z"
    />
    <Path fill="url(#a)" d="M25 71h159v156H25z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use transform="matrix(.00195 0 0 .002 0 -.01)" />
      </Pattern>
    </Defs>
  </Svg>
)

export default SecondCard