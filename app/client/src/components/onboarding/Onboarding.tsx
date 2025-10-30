import Button from '@lib/ui/Button'
import { View, Text, Dimensions, ImageBackground } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import Carousel from 'react-native-reanimated-carousel'

const { width, height } = Dimensions.get('window')

const slides = [
  {
    id: 1,
    title: 'Care that fits your family’s needs',
    subtitle:
      'Search by service type, availability, and location to connect with trusted caregivers.',
    image: require('../../assets/images/o1.jpg')
  },
  {
    id: 2,
    title: 'Book. Pay. Relax.',
    subtitle:
      'Seamless scheduling, secure payments, and real-time tracking — all in one app.',
    image: require('../../assets/images/o2.jpg')
  },
  {
    id: 3,
    title: 'Your safety is our priority',
    subtitle: 'Verified caregivers and secure bookings you can rely on.',
    image: require('../../assets/images/o3.jpg')
  }
]

export default function FullscreenSlider() {
  const progress = useSharedValue(0)

  return (
    <View className="relative flex-1">
      <Carousel
        width={width}
        height={height}
        data={slides}
        autoPlay={true}
        autoPlayInterval={5000}
        scrollAnimationDuration={700}
        onProgressChange={(_, absoluteProgress) => {
          progress.value = absoluteProgress
        }}
        renderItem={({ item }) => (
          <View className="mb-32">
            <ImageBackground
              source={
                typeof item.image === 'number'
                  ? item.image
                  : { uri: String(item.image) }
              }
              className="h-full w-full items-center justify-center"
              resizeMode="cover"
            >
              <View className="absolute inset-0 bg-black/50" />
              <View className="flex h-full items-start justify-between px-4 py-16">
                <Text className="text-center text-xl font-bold text-white">
                  CareGiver.com
                </Text>
                <View className="flex items-start">
                  <Text className="mb-2 text-left text-4xl font-bold leading-10 text-white">
                    {item.title}
                  </Text>
                  <Text className="text-left text-base text-white">
                    {item.subtitle}
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        )}
      />
      <View className="absolute bottom-0 w-full bg-[#194D48]/30 px-4 pb-10 pt-6 shadow-2xl">
        <Button
          title="Get Started"
          onPress={() => {
            console.log('Get Started Pressed')
          }}
          buttonPrimary
        />
      </View>

      {/* Pagination Dots */}
      <View className="absolute bottom-40 left-4 mt-5 flex-row justify-center">
        {slides.map((_, index) => (
          <PaginationDot key={index} index={index} progress={progress} />
        ))}
      </View>
    </View>
  )
}

const AnimatedView = Animated.createAnimatedComponent(View)

function PaginationDot({
  index,
  progress
}: {
  index: number
  progress: Animated.SharedValue<number>
}) {
  const animatedDot = useAnimatedStyle(() => {
    const distance = Math.abs(progress.value - index)
    const width = withTiming(distance < 0.5 ? 24 : 5, { duration: 300 })
    const height = withTiming(distance < 0.5 ? 5 : 5, { duration: 300 })
    const opacity = withTiming(distance < 0.5 ? 1 : 1, { duration: 300 })
    return {
      width: width,
      height: height,
      opacity
    }
  })

  return (
    <AnimatedView className="mx-1 rounded-full bg-white" style={animatedDot} />
  )
}
