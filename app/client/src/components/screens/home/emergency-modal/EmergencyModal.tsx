import React from 'react';
import { View, Modal, ScrollView, Linking } from 'react-native';
import { ModalHeader } from './ModalHeader';
import { ImmediateEmergency } from './ImmediateEmergency';
import { NearbyHospitals } from './NearbyHospitals';
import { AmbulanceServices } from './AmbulanceServices';
import { EmergencyContacts } from './EmergencyContacts';
import { PlatformSupport } from './PlatformSupport';

interface EmergencyModalProps {
  visible: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ visible, onClose }) => {
  const handleCall = (number: string) => {
    Linking.openURL(`tel:${number}`);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <View className="flex-1 bg-black/50">
        <View className="mt-auto bg-white rounded-t-3xl max-h-[90%]">
          <ModalHeader onClose={onClose} />
          <ScrollView showsVerticalScrollIndicator={false} className='p-4'>
            <ImmediateEmergency onCall={handleCall} />
            <NearbyHospitals />
            <AmbulanceServices />
            <EmergencyContacts />
            <PlatformSupport />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};