import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text, Pressable, ViewStyle, TextStyle } from 'react-native'
import ArrowBackIcon from '@lib/icons/ArrowBackIcon'

type HeaderIcon = {
  icon: React.ReactNode
  onPress: () => void
}

type PageHeaderProps = {
  title: string
  back?: boolean
  fallback?: string
  variant?: 'primary' | 'secondary'
  titlePosition?: 'left' | 'center' | 'right'
  titleStyle?: TextStyle
  rightIcon?: HeaderIcon
  containerStyle?: ViewStyle
}

const PageHeader = ({
  title,
  back = true,
  fallback = 'Main',
  variant = 'primary',
  titlePosition = 'left',
  titleStyle,
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

  const isSecondary = variant === 'secondary'

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
      {/* Back Button */}
      {back && (
        <Pressable
          onPress={handleBack}
          style={
            // secondary = use absolute
            isSecondary
              ? { position: 'absolute', left: 16, zIndex: 10 }
              : { marginRight: 12 } // primary = normal spacing
          }
        >
          <ArrowBackIcon width="18" height="18" fill="#333" />
        </Pressable>
      )}

      {/* Title */}
      <Text
        style={[
          {
            flex: 1,
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: isSecondary ? titlePosition : 'left',
            color: '#A41845'
          },
          titleStyle
        ]}
      >
        {title}
      </Text>

      {/* Right Icon — only for secondary */}
      {isSecondary && rightIcon && (
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

export default PageHeader
