import React, { useState } from 'react'
import { Modal, TouchableOpacity, View, Text, FlatList } from 'react-native'
import { Controller } from 'react-hook-form'

type Option = {
  label: string
  value: string | number
}

type Props = {
  control: any
  name: string
  label?: string
  placeholder?: string
  options: Option[]
  rightIcon?: React.ReactNode
  className?: string
  labelStyle?: any
  containerStyle?: any
  error?: any
}

const DropdownField = ({
  control,
  name,
  label,
  placeholder = 'Select',
  options,
  rightIcon,
  className = '',
  labelStyle,
  containerStyle,
  error
}: Props) => {
  const [visible, setVisible] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => {
        const selectedLabel = options.find((opt) => opt.value === value)?.label

        return (
          <View className={`mb-3 ${className}`}>
            {/* Label */}
            {label && (
              <Text
                className="mb-2 text-base font-medium text-gray-700"
                style={labelStyle}
              >
                {label}
              </Text>
            )}

            {/* box */}
            <TouchableOpacity
              onPress={() => setVisible(true)}
              className={`flex-row items-center justify-between rounded-2xl border bg-white
                ${
                  error
                    ? 'border-red-500'
                    : isFocused
                    ? 'border-primary'
                    : 'border-gray-300'
                }
              `}
              style={{
                height: 55,
                paddingHorizontal: 16,
                ...containerStyle
              }}
              onPressIn={() => setIsFocused(true)}
              onPressOut={() => setIsFocused(false)}
            >
              <Text
                className={
                  value ? 'text-base text-black' : 'text-base text-gray-400'
                }
              >
                {selectedLabel ?? placeholder}
              </Text>

              {rightIcon && <View className="ml-2">{rightIcon}</View>}
            </TouchableOpacity>

            {/* Dropdown Modal */}
            <Modal
              visible={visible}
              transparent
              animationType="fade"
              onRequestClose={() => setVisible(false)}
            >
              <TouchableOpacity
                className="flex-1 justify-center bg-black/40 px-20"
                onPress={() => setVisible(false)}
                activeOpacity={1}
              >
                <View className="rounded-2xl bg-white p-4">
                  <FlatList
                    data={options}
                    keyExtractor={(item) => item.value.toString()}
                    renderItem={({ item }) => {
                      const isSelected = value === item.value
                      return (
                        <TouchableOpacity
                          className={`rounded-xl px-3 py-3 ${
                            isSelected ? 'bg-primary/20' : ''
                          }`}
                          onPress={() => {
                            onChange(item.value)
                            setVisible(false)
                          }}
                        >
                          <Text
                            className={`text-base ${
                              isSelected
                                ? 'text-primary font-semibold'
                                : 'text-black'
                            }`}
                          >
                            {item.label}
                          </Text>
                        </TouchableOpacity>
                      )
                    }}
                  />
                </View>
              </TouchableOpacity>
            </Modal>

            {/* Error message */}
            {error && (
              <Text className="mt-1 text-sm text-red-500">{error.message}</Text>
            )}
          </View>
        )
      }}
    />
  )
}

export default DropdownField
