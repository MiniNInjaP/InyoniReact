import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values


const theme = extendTheme({
  colors: {
    primary: {
      100: '#17733A'
    },
    secondary: {
      100: "#6D6D6D"
    },
    heading: {
      100: "#474747"
    }
  }
})
export default theme