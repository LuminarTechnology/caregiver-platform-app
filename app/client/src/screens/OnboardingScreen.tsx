import { SafeAreaView } from 'react-native-safe-area-context'
import OnboardingSlider from '../components/onboarding/Onboarding'
import { useNavigation } from '@react-navigation/native'

export default function OnboardingScreen() {
  const navigation = useNavigation()

  const handleGetStarted = () => {
    navigation.navigate('Home' as never)
  }

  return (
    <SafeAreaView edges={[]} style={{ flex: 1, backgroundColor: '#000' }}>
      <OnboardingSlider />
    </SafeAreaView>
  )
}
