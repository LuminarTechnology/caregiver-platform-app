import React from 'react'
import { View, Text, Image, Pressable, ScrollView } from 'react-native'
import Button from '@lib/ui/Button'
import {
  ArrowRightIcon,
  CameraIcon,
  InformationIcon,
  NotificationIcon,
  QuestionCircleIcon,
  TwoPeopleIcon,
  VerifiedIcon
} from '@lib/icons'
import LogOutIcon from '@lib/icons/LogOutIcon'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {
  const navigation = useNavigation()

  return (
    <ScrollView className="flex-1 bg-white px-5">
      {/* Header */}
      <View className="mb-6 mt-14">
        <Text className="text-2xl font-semibold">Profile</Text>
        <Text className="mt-1 text-gray-500">
          Manage your account information
        </Text>
      </View>

      {/* Profile Card */}
      <View className="mb-6 flex-row items-center">
        <View className="relative mr-4">
          <Image
            source={require('../../../assets/images/ProfilePicture.png')}
            className="h-20 w-20 rounded-full"
          />

          {/* Camera Icon */}
          <Pressable className="bg-primary absolute bottom-0 right-0 rounded-full p-1">
            <CameraIcon width="16" height="16" stroke="#fff" />
          </Pressable>
        </View>

        <View>
          <Text className="text-xl font-semibold">Nasma Aktar</Text>
          <Text className="text-gray-500">Client</Text>

          {/* Verified Badge */}
          <View className="mt-2 w-fit rounded-lg bg-green-100 px-2 py-1">
            <Text className="text-xs font-medium text-green-700">
              Verified Account
            </Text>
          </View>
        </View>
      </View>

      {/* ACCOUNT SETTINGS */}
      <Text className="text-xs text-gray-400">ACCOUNT SETTINGS</Text>

      {/* Item Row */}
      <SettingsRow
        label="My Information"
        subtitle="Manage your Information"
        icon={<InformationIcon width="22" height="22" stroke="#4E4E4E" />}
        onPress={() => navigation.navigate('MyInformation' as never)}
      />

      <SettingsRow
        label="Emergency Contacts"
        subtitle="Add trusted emergency contacts"
        icon={<TwoPeopleIcon width="20" height="20" stroke="#4E4E4E" />}
      />

      <SettingsRow
        label="Notifications"
        subtitle="Manage your notification preferences"
        icon={<NotificationIcon width="19" height="19" stroke="#4E4E4E" />}
      />

      <SettingsRow
        label="Privacy & Security"
        subtitle="Control your privacy settings"
        icon={<VerifiedIcon width="21" height="21" stroke="#4E4E4E" />}
      />

      <SettingsRow
        label="Help & Support"
        subtitle="Get help and contact support"
        icon={<QuestionCircleIcon width="20" height="20" stroke="#4E4E4E" />}
      />

      {/* Logout Button */}
      <View className="mt-7">
        <Button
          title="Log Out"
          className="bg-primary"
          buttonPrimary
          onPress={() => console.log('Logout')}
          leftIcon={<LogOutIcon width="20" height="20" stroke="#FFFFFF" />}
        />
      </View>

      {/* Footer */}
      <View className="mb-14 mt-6 items-center">
        <Text className="text-xs text-gray-400">Caregiver v1.0.0</Text>
        <Text className="mt-1 text-xs text-gray-400">
          Part of HealthTech Solutions Platform
        </Text>

        <View className="mt-2 w-full items-center">
          <View className="w-48 flex-row items-center justify-between">
            <Text className="text-primary text-xs">Terms of Service</Text>

            <Text className="text-base text-gray-400">•</Text>

            <Text className="text-primary text-xs">Privacy Policy</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default ProfileScreen

/* Reusable Settings Row */
const SettingsRow = ({
  label,
  subtitle,
  icon,
  onPress
}: {
  label: string
  subtitle: string
  icon: React.ReactNode
  onPress?: () => void
}) => (
  <Pressable
    className="flex-row items-center border-b border-gray-100 py-4"
    onPress={onPress}
  >
    <View className="w-10">{icon}</View>

    <View className="flex-1">
      <Text className="text-base font-medium">{label}</Text>
      <Text className="text-sm text-gray-500">{subtitle}</Text>
    </View>

    <ArrowRightIcon width="22" height="22" stroke="#999999" />
  </Pressable>
)
