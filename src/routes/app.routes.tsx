import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { Statistic } from '@screens/Statistic'
import { Feedback } from '@screens/Feedback'
import { Create } from '@screens/Create'
import { Details } from '@screens/Details'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home} />
      <Screen name='statistic' component={Statistic} />
      <Screen name='feedback' component={Feedback} />
      <Screen name='create' component={Create} />
      <Screen name='details' component={Details} />
    </Navigator>
  )
}