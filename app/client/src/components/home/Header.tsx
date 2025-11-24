import { CallIcon, LocationIcon, NotificationIcon } from '@lib/icons'
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { EmergencyModal } from './emergency-modal/EmergencyModal'

interface HeaderProps {
  userName: string
  location: string
}

export const Header: React.FC<HeaderProps> = ({ userName, location }) => {
  const [emergencyVisible, setEmergencyVisible] = useState(false)
  const insets = useSafeAreaInsets()

  return (
    <View
      className="flex-row items-center justify-between bg-white px-4 pb-4 pt-3"
      style={{ paddingTop: insets.top + 12 }}
    >
      <View className="flex-1 flex-row items-center">
        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }}
          className="mr-3 h-10 w-10 rounded-full"
        />
        <View>
          <Text className="text-lg font-normal text-[#292A27]">
            Hello {userName}
          </Text>
          <View className="mt-1 flex-row items-center">
            <LocationIcon width={16} height={16} color="#292A27" />
            <Text className="ml-1 text-xs text-[#292A27]">{location}</Text>
          </View>
        </View>
      </View>

      <View className="flex-row items-center gap-3">
        <TouchableOpacity
          onPress={() => setEmergencyVisible(true)}
          className="flex-row items-center justify-center gap-1 rounded-2xl bg-[#FFF7F9] px-4 py-2"
        >
          {/* <AlertCircle size={20} color="#A41845" /> */}
          <CallIcon color={'#F51448'} />
          <Text className="text ml-1 text-[#F51448]">SOS</Text>
          <EmergencyModal
            visible={emergencyVisible}
            onClose={() => setEmergencyVisible(false)}
          />
        </TouchableOpacity>
        <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-[#F6F6F6]">
          <NotificationIcon />
        </TouchableOpacity>
      </View>
    </View>
  )
}
