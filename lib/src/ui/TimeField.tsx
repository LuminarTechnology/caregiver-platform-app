import React, { useState } from 'react'
import { Control, Controller } from 'react-hook-form'
import { View, Text, Pressable, Platform } from 'react-native'
import DateTimePicker, {
  DateTimePickerEvent
} from '@react-native-community/datetimepicker'
import ClockIcon from '@lib/icons/ClockIcon'

interface TimeFieldProps {
  control: Control<any>
  name: string
  label?: string
}

const pad = (n: number) => String(n).padStart(2, '0')

const formatTime = (date?: Date | null) => {
  if (!date) return ''
  const d = new Date(date)
  return `${pad(d.getHours())}:${pad(d.getMinutes())}`
}

const TimeField: React.FC<TimeFieldProps> = ({ control, name, label }) => {
  const [show, setShow] = useState(false)

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <View>
          {label && (
            <Text className="text-defaultBlack mb-2 text-base font-medium">
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
              {value ? formatTime(value) : 'HH:MM'}
            </Text>
            <View className="ml-2">
              <ClockIcon width={18} height={18} />
            </View>
          </Pressable>

          {show && (
            <DateTimePicker
              value={value || new Date()}
              mode="time"
              is24Hour={true}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={(event: DateTimePickerEvent, selectedDate?: Date) => {
                setShow(Platform.OS === 'ios')
                if (selectedDate) onChange(selectedDate)
              }}
            />
          )}
        </View>
      )}
    />
  )
}

export default TimeField
