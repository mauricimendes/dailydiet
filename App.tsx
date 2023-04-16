import { StatusBar, Text } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'

import { Routes } from './src/routes'
import theme from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  })

  if (!fontsLoaded) return <Text>Carregando...</Text>

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      <Routes />
    </ThemeProvider>
  )
}