import { Pressable, Text } from 'react-native'

type ButtonProps = {
  title: string
  onPress: () => void
  children?: React.ReactNode
  buttonPrimary?: boolean
  buttonSecondary?: boolean
}

const Button = ({
  title,
  onPress,
  children,
  buttonPrimary,
  buttonSecondary
}: ButtonProps) => {
  return (
    <Pressable
      className={`border-primary flex h-[56px] w-full items-center justify-center rounded-2xl border-[1.5px] ${
        buttonPrimary && 'bg-primary'
      } ${buttonSecondary && 'bg-secondary'}`}
      onPress={onPress}
    >
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
