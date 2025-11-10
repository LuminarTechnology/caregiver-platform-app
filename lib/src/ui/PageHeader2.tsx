import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import * as React from 'react'
import { View, Text, Pressable, ViewStyle, TextStyle } from 'react-native'
import ArrowBackIcon from '@lib/icons/ArrowBackIcon'

type HeaderIcon = {
  icon: React.ReactNode
  onPress: () => void
  position?: 'left' | 'right'
}

type PageHeaderProps = {
  title: string
  titleStyle?: TextStyle
  titlePosition?: 'left' | 'center' | 'right'
  back?: boolean

  onBack?: () => void
  fallback?: string
  rightIcon?: HeaderIcon
  containerStyle?: ViewStyle
}

const PageHeader2 = ({
  title,
  titleStyle,
  titlePosition = 'center',
  back = true,
  fallback = 'Main',
  rightIcon,
  containerStyle
}: PageHeaderProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack()
    } else {
      navigation.navigate(fallback)
    }
  }

  return (
    <View
      className="bg-foreground"
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          padding: 16,
          position: 'relative'
        },
        containerStyle
      ]}
    >
      {back && (
        <Pressable onPress={handleBack} style={{ zIndex: 10 }}>
          <ArrowBackIcon width="16" height="16" fill="#333" />
        </Pressable>
      )}

      {/* Title */}
      <Text
        style={[
          {
            flex: 1,
            textAlign: titlePosition,
            fontSize: 16,
            fontWeight: 'bold',
            color: '#A41845'
          },
          titleStyle
        ]}
      >
        {title}
      </Text>

      {/* Right Icon */}
      {rightIcon && (
        <Pressable
          onPress={rightIcon.onPress}
          style={{ position: 'absolute', right: 16 }}
        >
          {rightIcon.icon}
        </Pressable>
      )}
    </View>
  )
}

export default PageHeader2
