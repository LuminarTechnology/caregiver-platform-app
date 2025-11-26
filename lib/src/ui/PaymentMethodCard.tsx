import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

type PaymentMethodCardProps = {
  label?: string
  selected: boolean
  onPress: () => void
  children: React.ReactNode
  borderColor?: string
  bgColor?: string
}

const PaymentMethodCard: React.FC<PaymentMethodCardProps> = ({
  selected,
  onPress,
  children,
  borderColor = 'border-gray-300',
  bgColor = 'bg-white'
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`
        items-center justify-center rounded-xl border
        ${
          selected
            ? 'border-primary bg-primary/10'
            : `${borderColor} ${bgColor}`
        }
      `}
      style={{
        width: 95,
        height: 55,
        paddingVertical: 10
      }}
    >
      {children}
    </TouchableOpacity>
  )
}

export default PaymentMethodCard
