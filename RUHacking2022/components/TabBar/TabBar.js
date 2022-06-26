import * as React from "react"
import Svg, { Path } from "react-native-svg"

const TabBar = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={390}
    height={80}
    fill="none"
    {...props}
  >
    <Path fill="#F7F7FC" d="M0 0h390v80H0z" />
    <Path
      stroke="#14142B"
      d="M40.297 21.027a2 2 0 0 0-.464 1.28v12.776a3 3 0 0 0 3 3h12.334a3 3 0 0 0 3-3V22.307a2 2 0 0 0-.464-1.28l-1.992-2.39a2 2 0 0 0-1.537-.72H43.826a2 2 0 0 0-1.537.72l-1.992 2.39zm-.464 1.015h18.334"
    />
    <Path stroke="#14142B" d="M52.667 26.167a3.667 3.667 0 0 1-7.334 0" />
    <Path
      fill="#14142B"
      d="M35.883 57.091a4.12 4.12 0 0 1-1.638-.312 2.734 2.734 0 0 1-1.144-.91 2.294 2.294 0 0 1-.416-1.365h1.586c.034.39.186.71.455.962.277.251.663.377 1.157.377.511 0 .91-.121 1.196-.364.286-.251.429-.572.429-.962 0-.303-.091-.55-.273-.741a1.716 1.716 0 0 0-.663-.442 9.52 9.52 0 0 0-1.092-.338c-.59-.156-1.07-.312-1.443-.468a2.442 2.442 0 0 1-.936-.754c-.26-.338-.39-.789-.39-1.352 0-.52.13-.975.39-1.365s.624-.689 1.092-.897c.468-.208 1.01-.312 1.625-.312.875 0 1.59.221 2.145.663.563.433.875 1.031.936 1.794H37.26c-.026-.33-.182-.611-.468-.845-.286-.234-.663-.351-1.131-.351-.425 0-.772.108-1.04.325-.269.217-.403.529-.403.936 0 .277.082.507.247.689.173.173.39.312.65.416.26.104.615.217 1.066.338.598.165 1.083.33 1.456.494.381.165.702.42.962.767.268.338.403.793.403 1.365 0 .46-.126.893-.377 1.3-.243.407-.603.737-1.08.988-.467.243-1.022.364-1.663.364zm8.823-7.371c.546 0 1.032.117 1.456.351.434.234.772.58 1.014 1.04.252.46.377 1.014.377 1.664V57h-1.469v-4.004c0-.641-.16-1.131-.48-1.469-.321-.347-.759-.52-1.314-.52-.554 0-.996.173-1.326.52-.32.338-.48.828-.48 1.469V57H41v-9.62h1.482v3.289c.252-.303.568-.537.95-.702.39-.165.814-.247 1.273-.247zm8.095 7.397a3.71 3.71 0 0 1-1.833-.455 3.373 3.373 0 0 1-1.287-1.3c-.312-.563-.468-1.213-.468-1.95 0-.728.16-1.374.48-1.937.321-.563.76-.997 1.314-1.3a3.81 3.81 0 0 1 1.859-.455 3.81 3.81 0 0 1 1.859.455c.554.303.992.737 1.313 1.3.32.563.48 1.209.48 1.937s-.164 1.374-.493 1.937a3.455 3.455 0 0 1-1.352 1.313 3.885 3.885 0 0 1-1.872.455zm0-1.287c.381 0 .736-.091 1.066-.273.338-.182.61-.455.819-.819.208-.364.312-.806.312-1.326s-.1-.958-.3-1.313a2.01 2.01 0 0 0-.792-.819 2.169 2.169 0 0 0-1.066-.273c-.382 0-.737.091-1.066.273-.32.182-.577.455-.767.819-.19.355-.286.793-.286 1.313 0 .771.195 1.37.585 1.794.398.416.897.624 1.495.624zm6.915-4.94c.251-.33.593-.607 1.027-.832a3.137 3.137 0 0 1 1.469-.338c.624 0 1.191.156 1.703.468.52.303.927.732 1.222 1.287.294.555.442 1.192.442 1.911 0 .72-.147 1.365-.442 1.937a3.345 3.345 0 0 1-1.222 1.326 3.206 3.206 0 0 1-1.703.468c-.546 0-1.032-.108-1.456-.325a3.34 3.34 0 0 1-1.04-.832v4.446h-1.482V49.837h1.482v1.053zm4.355 2.496c0-.494-.104-.919-.312-1.274a1.985 1.985 0 0 0-.806-.819 2.138 2.138 0 0 0-2.132 0c-.33.19-.598.468-.806.832-.2.364-.3.793-.3 1.287 0 .494.1.927.3 1.3.208.364.477.641.806.832a2.138 2.138 0 0 0 2.132 0c.338-.2.606-.485.806-.858.208-.373.312-.806.312-1.3zm123.608-18.924H182.7a.75.75 0 0 1-.566-.27 1 1 0 0 1-.234-.654V17.846h-1.6a.751.751 0 0 1-.566-.27 1 1 0 0 1-.234-.653 1 1 0 0 1 .234-.653.751.751 0 0 1 .566-.27h22.4a.75.75 0 0 1 .566.27 1 1 0 0 1 .234.653 1 1 0 0 1-.234.653.751.751 0 0 1-.566.27h-1.6v15.692a1 1 0 0 1-.234.653.75.75 0 0 1-.566.27h-4.97L198.102 40h-1.847l-2.771-5.538h-3.958L186.754 40h-1.846l2.771-5.538zM199.5 17.846h-16v14.77h16v-14.77zm-12.234 9.884a.798.798 0 0 1-.259.2.714.714 0 0 1-.614 0 .798.798 0 0 1-.259-.2.93.93 0 0 1-.174-.3 1.055 1.055 0 0 1 0-.707.93.93 0 0 1 .174-.3l3.691-4.257 3.136 2.714 2.715-3.918a.86.86 0 0 1 .237-.25.698.698 0 0 1 .624-.097c.104.033.202.09.286.169a.898.898 0 0 1 .206.285 1.046 1.046 0 0 1 .055.724.964.964 0 0 1-.16.322l-3.683 5.315-3.266-2.827-2.709 3.126v.002zm-8.052 21.235c.962 0 1.802.186 2.522.559a3.855 3.855 0 0 1 1.677 1.586c.398.685.598 1.486.598 2.405 0 .919-.2 1.716-.598 2.392a3.898 3.898 0 0 1-1.677 1.56c-.72.355-1.56.533-2.522.533h-2.951v-9.035h2.951zm0 7.826c1.057 0 1.867-.286 2.431-.858.563-.572.845-1.378.845-2.418 0-1.049-.282-1.868-.845-2.457-.564-.59-1.374-.884-2.431-.884h-1.469v6.617h1.469zm6.021-2.405c0-.72.148-1.356.442-1.911a3.308 3.308 0 0 1 2.938-1.755c.564 0 1.053.113 1.469.338.425.217.763.49 1.014.819v-1.04h1.495V58h-1.495v-1.066a2.93 2.93 0 0 1-1.027.845c-.433.225-.927.338-1.482.338a3.185 3.185 0 0 1-1.69-.468 3.482 3.482 0 0 1-1.222-1.326c-.294-.572-.442-1.218-.442-1.937zm5.863.026c0-.494-.104-.923-.312-1.287a2.093 2.093 0 0 0-1.859-1.118c-.381 0-.736.095-1.066.286a2.096 2.096 0 0 0-.806.819c-.199.355-.299.78-.299 1.274s.1.927.299 1.3c.208.373.477.659.806.858.338.19.694.286 1.066.286a2.093 2.093 0 0 0 1.859-1.118c.208-.373.312-.806.312-1.3zm5.421-2.366v3.965c0 .269.061.464.182.585.13.113.347.169.65.169h.91V58h-1.17c-.667 0-1.179-.156-1.534-.468-.355-.312-.533-.819-.533-1.521v-3.965h-.845v-1.209h.845v-1.781h1.495v1.781h1.742v1.209h-1.742zm2.864 2.34c0-.72.147-1.356.442-1.911a3.3 3.3 0 0 1 2.938-1.755c.563 0 1.053.113 1.469.338.425.217.763.49 1.014.819v-1.04h1.495V58h-1.495v-1.066a2.94 2.94 0 0 1-1.027.845c-.433.225-.927.338-1.482.338a3.182 3.182 0 0 1-1.69-.468 3.474 3.474 0 0 1-1.222-1.326c-.295-.572-.442-1.218-.442-1.937zm5.863.026c0-.494-.104-.923-.312-1.287a2.1 2.1 0 0 0-.793-.832 2.091 2.091 0 0 0-1.066-.286c-.381 0-.737.095-1.066.286a2.096 2.096 0 0 0-.806.819c-.199.355-.299.78-.299 1.274s.1.927.299 1.3c.208.373.477.659.806.858a2.137 2.137 0 0 0 2.132 0 2.1 2.1 0 0 0 .793-.832c.208-.373.312-.806.312-1.3z"
    />
    <Path
      stroke="#14142B"
      d="M343.738 32.864c-1.452-.736-3.762-1.656-6.238-1.656-2.476 0-4.786.92-6.238 1.656-1.02.516-1.631 1.547-1.765 2.682l-.247 2.079h16.5l-.247-2.079c-.134-1.135-.745-2.166-1.765-2.682zm-6.238-5.781a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25z"
    />
    <Path
      fill="#14142B"
      d="M323.94 50.656c0 .46-.108.893-.325 1.3-.217.407-.563.741-1.04 1.001-.477.251-1.088.377-1.833.377h-1.638V57h-1.482v-9.035h3.12c.693 0 1.278.121 1.755.364.485.234.845.555 1.079.962.243.407.364.862.364 1.365zm-3.198 1.469c.563 0 .984-.126 1.261-.377.277-.26.416-.624.416-1.092 0-.988-.559-1.482-1.677-1.482h-1.638v2.951h1.638zm6.343-1.248c.217-.364.503-.646.858-.845.364-.208.793-.312 1.287-.312v1.534h-.377c-.58 0-1.022.147-1.326.442-.294.295-.442.806-.442 1.534V57h-1.482v-7.163h1.482v1.04zm6.865 6.24a3.71 3.71 0 0 1-1.833-.455 3.373 3.373 0 0 1-1.287-1.3c-.312-.563-.468-1.213-.468-1.95 0-.728.16-1.374.481-1.937.32-.563.758-.997 1.313-1.3a3.808 3.808 0 0 1 1.859-.455c.684 0 1.304.152 1.859.455.554.303.992.737 1.313 1.3.32.563.481 1.209.481 1.937s-.165 1.374-.494 1.937a3.46 3.46 0 0 1-1.352 1.313 3.889 3.889 0 0 1-1.872.455zm0-1.287c.381 0 .736-.091 1.066-.273.338-.182.611-.455.819-.819.208-.364.312-.806.312-1.326s-.1-.958-.299-1.313a2.015 2.015 0 0 0-.793-.819 2.171 2.171 0 0 0-1.066-.273c-.382 0-.737.091-1.066.273a1.947 1.947 0 0 0-.767.819c-.191.355-.286.793-.286 1.313 0 .771.195 1.37.585 1.794.398.416.897.624 1.495.624zm8.436-4.784h-1.326V57h-1.495v-5.954h-.845v-1.209h.845v-.507c0-.823.216-1.421.65-1.794.442-.381 1.131-.572 2.067-.572v1.235c-.451 0-.767.087-.949.26-.182.165-.273.455-.273.871v.507h1.326v1.209zm2.317-2.158a.918.918 0 0 1-.676-.273.918.918 0 0 1-.273-.676c0-.269.091-.494.273-.676a.918.918 0 0 1 .676-.273c.26 0 .481.091.663.273a.918.918 0 0 1 .273.676.918.918 0 0 1-.273.676.903.903 0 0 1-.663.273zm.728.949V57h-1.482v-7.163h1.482zm3.678-2.457V57h-1.482v-9.62h1.482zm8.761 5.863c0 .269-.018.511-.052.728h-5.473c.043.572.255 1.031.637 1.378.381.347.849.52 1.404.52.797 0 1.36-.334 1.69-1.001h1.599a3.25 3.25 0 0 1-1.183 1.625c-.564.416-1.266.624-2.106.624-.685 0-1.3-.152-1.846-.455a3.396 3.396 0 0 1-1.274-1.3c-.304-.563-.455-1.213-.455-1.95 0-.737.147-1.382.442-1.937a3.192 3.192 0 0 1 1.261-1.3c.546-.303 1.17-.455 1.872-.455.676 0 1.278.147 1.807.442.528.295.94.71 1.235 1.248.294.529.442 1.14.442 1.833zm-1.547-.468c-.009-.546-.204-.984-.585-1.313-.382-.33-.854-.494-1.417-.494a1.89 1.89 0 0 0-1.313.494c-.364.32-.581.758-.65 1.313h3.965z"
    />
  </Svg>
)

export default TabBar
