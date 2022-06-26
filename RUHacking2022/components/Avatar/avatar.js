import * as React from "react"
import Svg, { Path } from "react-native-svg"

const DefaultAvatar = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 450" {...props}>
    <Path fill="#5ABCBB" d="M0 0h145v145H0z" />
    <Path
      fill="#F1C9A5"
      d="M109.374 115.394c-4.964-9.396-36.875-15.292-36.875-15.292s-31.91 5.896-36.874 15.292C31.957 128.433 28.888 145 28.888 145h87.223c.001 0-2.071-17.764-6.737-29.606z"
    />
    <Path
      fill="#E4B692"
      d="M72.499 100.102s31.911 5.896 36.875 15.292c4.665 11.842 6.737 29.606 6.737 29.606H72.499v-44.898z"
    />
    <Path fill="#F1C9A5" d="M63.813 81h17.374v29.077H63.813z" />
    <Path fill="#E4B692" d="M72.499 81h8.688v29.077h-8.688z" />
    <Path
      fill="#DDAC8C"
      d="M63.813 94.474c1.563 4.485 7.868 7.057 12.499 7.057 1.676 0 3.306-.281 4.875-.795V81H63.813v13.474z"
      opacity={0.1}
    />
    <Path
      fill="#F1C9A5"
      d="M94.837 62.653c0-18.162-10.001-28.489-22.338-28.489-12.336 0-22.337 10.327-22.337 28.489 0 24.428 10.001 32.886 22.337 32.886 12.338 0 22.338-9.476 22.338-32.886z"
    />
    <Path
      fill="#F1C9A5"
      d="M94.837 62.653c0-18.162-10.001-28.489-22.338-28.489-12.336 0-22.337 10.327-22.337 28.489 0 24.428 10.001 32.886 22.337 32.886 12.338 0 22.338-9.476 22.338-32.886z"
    />
    <Path
      fill="#F1C9A5"
      d="M45.161 67.031c-.684-4.957 2.046-9.318 6.092-9.74 4.053-.422 7.888 3.259 8.567 8.216.683 4.953-2.053 9.315-6.1 9.739-4.049.419-7.88-3.258-8.559-8.215z"
    />
    <Path
      fill="#E4B692"
      d="M94.837 62.653c0-18.162-10.001-28.489-22.338-28.489v61.375c12.338 0 22.338-9.476 22.338-32.886z"
    />
    <Path
      fill="#102F41"
      d="M109.374 115.394c-3.181-6.021-17.418-10.601-27.242-13.117-.382 4.99-4.545 8.923-9.633 8.923-5.088 0-9.25-3.933-9.632-8.923-9.824 2.516-24.061 7.096-27.242 13.117C31.957 128.433 28.888 145 28.888 145h87.223c.001 0-2.071-17.764-6.737-29.606z"
    />
    <Path
      fill="#231F20"
      d="M53.941 84.27c4.859 8.252 9.698 9.528 9.698 9.528l1.466 4.755H61.35l-.915-2.051H58.42l-.733-2.517-1.996.839-.475-2.797h-1.833l-.641-2.331-1.374.653-1.374-2.145-1.923-1.025.916-3.17h-2.289l.092-3.357-1.741.56-.641-2.983-2.931-1.119 2.564-2.611-1.282-.466 1.373-2.423-1.007-.466-.184-2.891-2.93-.559 1.649-2.611-2.016-3.17 2.382-1.306-1.282-3.169.732-2.984-2.747-2.238 3.846-.372v-2.797l1.1-2.424-1.1-2.051 2.016-1.678-2.016-1.679 2.198-2.238v-1.305l2.016-1.678-.916-2.611 3.662.746.184-4.475 2.748.932.915-1.864 3.114.373s-.732-1.492.549-1.492c1.282 0 4.397 1.306 4.397 1.306l1.648-2.238 3.663 2.611 1.283-2.611 2.381 2.797 2.234-2.797v25.36c-2.895-.248-4.433-.248-10.782-2.735-2.197 1.492-9.28 11.686-9.28 12.68s-1.222 11.189-1.222 11.189l-1.274-6.08c0-.004 1.27 12.806 3.848 17.185zm36.688 0c-4.669 8.252-9.318 9.528-9.318 9.528l-1.408 4.755h3.607l.88-2.051h1.937l.703-2.517 1.919.839.457-2.797h1.761l.615-2.331 1.32.653 1.32-2.145 1.848-1.025-.88-3.17h2.199l-.088-3.357 1.673.56.615-2.983 2.816-1.119-2.465-2.611 1.233-.466-1.32-2.423.968-.466.177-2.891 2.814-.559-1.584-2.611 1.937-3.17-2.288-1.306 1.231-3.169-.703-2.984 2.64-2.238-3.695-.372v-2.797l-1.057-2.424 1.057-2.051-1.937-1.678 1.937-1.679-2.112-2.238v-1.305l-1.936-1.678.881-2.611-3.52.746-.177-4.475-2.64.932-.88-1.864-2.992.373s.704-1.492-.527-1.492c-1.232 0-4.225 1.306-4.225 1.306l-1.584-2.238-3.52 2.611-1.232-2.611-2.288 2.797-2.146-2.797v25.36c2.78-.248 4.259-.248 10.359-2.735 2.112 1.492 8.917 11.686 8.917 12.68s1.174 11.189 1.174 11.189l1.225-6.08c0-.004-1.22 12.806-3.698 17.185z"
    />
    <Path
      fill="#F1C9A5"
      d="M45.161 67.031c-.684-4.957 2.046-9.318 6.092-9.74 4.053-.422 7.888 3.259 8.567 8.216.683 4.953-2.053 9.315-6.1 9.739-4.049.419-7.88-3.258-8.559-8.215z"
    />
    <Path
      fill="#E4B692"
      d="M91.438 75.246c-4.05-.424-6.783-4.787-6.098-9.739.677-4.957 4.513-8.638 8.563-8.216 4.047.422 6.777 4.783 6.094 9.74-.679 4.957-4.51 8.634-8.559 8.215z"
    />
  </Svg>
)

export default DefaultAvatar