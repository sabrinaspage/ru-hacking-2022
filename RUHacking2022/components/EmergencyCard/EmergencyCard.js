import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

const EmergencyCard = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={326}
    height={70}
    fill="none"
    {...props}
  >
    <Rect width={326} height={70} fill="#EFF0F7" rx={8} />
    <Path
      fill="#E61B00"
      d="M27.506 32.655v1.846h2.977v1.716h-2.977v2.002h3.367V40h-5.59v-9.126h5.59v1.781h-3.367zm14.317.013c.901 0 1.616.273 2.145.819.537.546.806 1.304.806 2.275V40h-2.21v-3.939c0-.468-.126-.828-.377-1.079-.243-.26-.58-.39-1.014-.39-.434 0-.776.13-1.027.39-.243.251-.364.611-.364 1.079V40h-2.21v-3.939c0-.468-.126-.828-.377-1.079-.243-.26-.58-.39-1.014-.39-.434 0-.776.13-1.027.39-.243.251-.364.611-.364 1.079V40h-2.223v-7.254h2.223v.91a2.32 2.32 0 0 1 .884-.715 2.724 2.724 0 0 1 1.235-.273c.546 0 1.031.117 1.456.351.433.234.771.568 1.014 1.001a2.922 2.922 0 0 1 1.027-.975 2.775 2.775 0 0 1 1.417-.377zm11.593 3.588c0 .208-.012.425-.038.65h-5.032c.035.45.178.797.43 1.04.26.234.576.351.948.351.555 0 .94-.234 1.158-.702h2.366a3.206 3.206 0 0 1-.663 1.287c-.313.381-.707.68-1.184.897a3.82 3.82 0 0 1-1.599.325c-.71 0-1.343-.152-1.898-.455a3.236 3.236 0 0 1-1.3-1.3c-.312-.563-.468-1.222-.468-1.976s.152-1.413.456-1.976a3.236 3.236 0 0 1 1.3-1.3c.554-.303 1.191-.455 1.91-.455.703 0 1.327.147 1.873.442.546.295.97.715 1.274 1.261.312.546.468 1.183.468 1.911zm-2.274-.585c0-.381-.13-.685-.39-.91-.26-.225-.586-.338-.976-.338-.372 0-.689.108-.949.325-.25.217-.407.524-.468.923h2.782zm5.92-1.716c.26-.399.585-.71.975-.936a2.48 2.48 0 0 1 1.3-.351v2.353h-.61c-.555 0-.971.121-1.249.364-.277.234-.416.65-.416 1.248V40H54.84v-7.254h2.223v1.209zm6.344-1.313c.511 0 .957.104 1.339.312.39.208.689.481.897.819v-1.027h2.223v7.241c0 .667-.135 1.27-.403 1.807-.26.546-.663.98-1.21 1.3-.537.32-1.208.481-2.014.481-1.075 0-1.946-.256-2.613-.767-.668-.503-1.049-1.187-1.144-2.054h2.197c.07.277.234.494.494.65.26.165.58.247.962.247.46 0 .823-.134 1.092-.403.277-.26.416-.68.416-1.261V38.96a2.52 2.52 0 0 1-.897.832c-.382.208-.828.312-1.34.312a3.005 3.005 0 0 1-1.624-.455c-.486-.312-.871-.75-1.157-1.313-.278-.572-.416-1.23-.416-1.976 0-.745.138-1.4.416-1.963.286-.563.671-.997 1.157-1.3a3.004 3.004 0 0 1 1.625-.455zm2.236 3.731c0-.555-.156-.992-.468-1.313a1.479 1.479 0 0 0-1.118-.481c-.442 0-.82.16-1.131.481-.304.312-.455.745-.455 1.3s.151.997.455 1.326c.312.32.689.481 1.13.481.443 0 .815-.16 1.119-.481.312-.32.468-.758.468-1.313zm10.919-.117c0 .208-.013.425-.039.65h-5.031c.035.45.178.797.429 1.04.26.234.576.351.949.351.555 0 .94-.234 1.157-.702h2.366a3.203 3.203 0 0 1-.663 1.287c-.312.381-.706.68-1.183.897a3.82 3.82 0 0 1-1.599.325c-.71 0-1.343-.152-1.898-.455a3.236 3.236 0 0 1-1.3-1.3c-.312-.563-.468-1.222-.468-1.976s.152-1.413.455-1.976a3.236 3.236 0 0 1 1.3-1.3c.555-.303 1.192-.455 1.911-.455.702 0 1.326.147 1.872.442.546.295.97.715 1.274 1.261.312.546.468 1.183.468 1.911zm-2.275-.585c0-.381-.13-.685-.39-.91-.26-.225-.585-.338-.975-.338a1.43 1.43 0 0 0-.949.325c-.251.217-.407.524-.468.923h2.782zm8.118-3.003c.85 0 1.525.277 2.028.832.511.546.767 1.3.767 2.262V40h-2.21v-3.939c0-.485-.126-.862-.377-1.131-.252-.269-.59-.403-1.014-.403-.425 0-.763.134-1.014.403-.252.269-.377.646-.377 1.131V40h-2.223v-7.254h2.223v.962c.225-.32.528-.572.91-.754.381-.19.81-.286 1.287-.286zm4.148 3.705c0-.754.151-1.413.454-1.976a3.26 3.26 0 0 1 1.287-1.3c.555-.303 1.188-.455 1.898-.455.91 0 1.669.238 2.275.715.616.477 1.019 1.148 1.21 2.015h-2.367c-.199-.555-.584-.832-1.156-.832-.408 0-.733.16-.976.481-.242.312-.364.763-.364 1.352 0 .59.122 1.044.364 1.365.243.312.568.468.975.468.573 0 .958-.277 1.157-.832h2.367c-.191.85-.594 1.517-1.21 2.002-.615.485-1.373.728-2.274.728-.711 0-1.344-.152-1.898-.455a3.26 3.26 0 0 1-1.287-1.3c-.304-.563-.456-1.222-.456-1.976zm15.973-3.627-4.55 10.699h-2.392l1.664-3.692-2.951-7.007h2.483l1.677 4.537 1.664-4.537h2.405z"
    />
    <Path stroke="#14142B" d="m288 28 6.963 6.963L288 41.926" />
  </Svg>
)

export default EmergencyCard