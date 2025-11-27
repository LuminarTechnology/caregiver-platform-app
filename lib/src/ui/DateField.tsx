import React, { useState } from 'react'
import { Control, Controller } from 'react-hook-form'
import { View, Text, Pressable, Platform } from 'react-native'
import CalendarIcon from '@lib/icons/CalendarIcon'
import DateTimePicker, {
  DateTimePickerEvent
} from '@react-native-community/datetimepicker'

interface DatePickerFieldProps {
  control: Control<any>
  name: string
  label?: string
  labelStyle?: object
}

export const DatePickerField: React.FC<DatePickerFieldProps> = ({
  name,
  label,
  control,
  labelStyle
}) => {
  const [show, setShow] = useState(false)

  const formatDate = (date?: Date | null) => {
    if (!date) return ''
    const d = new Date(date)
    const dd = String(d.getDate()).padStart(2, '0')
    const mm = String(d.getMonth() + 1).padStart(2, '0')
    const yyyy = d.getFullYear()
    return `${dd}/${mm}/${yyyy}`
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <View>
          {label && (
            <Text className="mb-2 text-base font-medium " style={labelStyle}>
              {label}
            </Text>
          )}

          <Pressable
            onPress={() => setShow(true)}
            className="h-14 flex-row items-center justify-between rounded-2xl border border-[#90928B] bg-white p-4"
          >
            <Text
              className={`text-base ${
                value ? 'text-defaultBlack' : 'text-muted'
              }`}
            >
              {value ? formatDate(value) : 'DD/MM/YYYY'}
            </Text>
            <View className="ml-2">
              <CalendarIcon width={20} height={20} />
            </View>
          </Pressable>

          {show && (
            <DateTimePicker
              value={value || new Date()}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={(event: DateTimePickerEvent, selectedDate?: Date) => {
                setShow(Platform.OS === 'ios') // keep open on iOS
                if (selectedDate) onChange(selectedDate)
              }}
            />
          )}
        </View>
      )}
    />
  )
}

export default DatePickerField
