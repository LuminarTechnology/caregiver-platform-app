import { SafeAreaView } from 'react-native-safe-area-context'
import OnboardingSlider from '../components/onboarding/Onboarding'

export default function OnboardingScreen() {
  return (
    <SafeAreaView edges={[]} style={{ flex: 1, backgroundColor: '#000' }}>
      <OnboardingSlider />
    </SafeAreaView>
  )
}
