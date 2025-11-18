import React from 'react'
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native'

interface CaregiverActionModalProps {
  visible: boolean
  onClose: () => void
  caregiverName: string
  onReport?: () => void
  onRate?: () => void
  onMessage?: () => void
}

const CaregiverActionModal: React.FC<CaregiverActionModalProps> = ({
  visible,
  onClose,
  caregiverName,
  onReport,
  onRate,
  onMessage
}) => {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 items-center justify-center bg-black/40">
          <TouchableWithoutFeedback>
            <View className="w-[80%] rounded-lg bg-white py-4 shadow-lg">
              <TouchableOpacity onPress={onReport}>
                <Text className="py-3 text-center text-base font-medium text-red-500">
                  Report {caregiverName}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={onRate}>
                <Text className="py-3 text-center text-base font-medium text-pink-600">
                  Rate {caregiverName}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={onMessage}>
                <Text className="py-3 text-center text-base font-medium text-pink-600">
                  Message {caregiverName}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={onClose}>
                <Text className="py-3 text-center text-base font-medium text-red-500">
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default CaregiverActionModal
