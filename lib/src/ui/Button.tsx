import { Pressable, Text, View } from 'react-native'

type ButtonProps = {
  title: string
  className?: string
  onPress: () => void
  children?: React.ReactNode
  buttonPrimary?: boolean
  buttonSecondary?: boolean
  leftIcon?: React.ReactNode
}

const Button = ({
  title,
  className,
  onPress,
  children,
  buttonPrimary,
  buttonSecondary,
  leftIcon
}: ButtonProps) => {
  return (
    <Pressable
      className={`border-primary h-[56px] flex-row items-center justify-center rounded-2xl border-[1.5px] ${
        buttonPrimary && 'bg-primary'
      } ${buttonSecondary && 'bg-secondary'} ${className}`}
      onPress={onPress}
    >
      {leftIcon && <View className="mr-2">{leftIcon}</View>}

      <Text
        className={`text-lg font-medium ${
          buttonPrimary ? 'text-white' : 'text-primary'
        }`}
      >
        {title}
      </Text>
    </Pressable>
  )
}

export default Button
