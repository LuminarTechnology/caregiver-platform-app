import Button from '@lib/ui/Button'
import PageHeader from '@lib/ui/PageHeader'
import {
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Animated
} from 'react-native'
import ChildCareSVG from '../../components/svg/ChildCareSVG'
import ElderlyCareSVG from '../../components/svg/ElderlyCareSVG'
import SpecializedCareSVG from '../../components/svg/SpecializedCareSVG'
import PostOperativeCareSVG from '../../components/svg/PostOperativeCareSVG'
import { useState, useEffect, useRef } from 'react'
import CheckedRadioIcon from '@lib/icons/CheckedRadioIcon'
import UncheckedRadioIcon from '@lib/icons/UncheckedRadioIcon'
import { useNavigation } from '@react-navigation/native'
import InputField from '@lib/ui/InputField'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import LocationIcon from '@lib/icons/LocationIcon'
import PhoneIcon from '@lib/icons/PhoneIcon'
import PlusCircleIcon from '@lib/icons/PlusCircleIcon'
import DateField from '@lib/ui/DateField'
import TimeField from '@lib/ui/TimeField'

const userDetailsSchema = z.object({
  careType: z.string().min(2).max(100),
  location: z
    .string()
    .min(2, 'Location must be at least 2 characters long')
    .max(100, 'Location must not exceed 100 characters')
    .regex(
      /^[a-zA-Z0-9 ,.-]+$/,
      'Location can only contain letters, numbers, commas, and periods'
    ),
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters long')
    .max(50, 'First name must not exceed 50 characters')
    .regex(
      /^[a-zA-Z'-]+$/,
      'First name can only contain letters, apostrophes, and hyphens'
    ),
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters long')
    .max(50, 'Last name must not exceed 50 characters')
    .regex(
      /^[a-zA-Z'-]+$/,
      'Last name can only contain letters, apostrophes, and hyphens'
    ),
  phoneNumber: z
    .string()
    .min(11, 'Phone number must be at least 11 characters long')
    .max(15, 'Phone number must not exceed 15 characters')
    .regex(
      /^\+?[1-9]\d{1,14}$/,
      'Phone number must be a valid international format'
    ),
  emergencyPhoneNumber: z
    .string()
    .min(11, 'Emergency contact number must be at least 11 characters long')
    .max(15, 'Emergency contact number must not exceed 15 characters')
    .regex(
      /^\+?[1-9]\d{1,14}$/,
      'Emergency contact number must be a valid international format'
    ),
  careTime: z.string().min(2).max(100),
  detailsCareType: z.string().min(2).max(100),
  children: z.array(
    z.object({
      id: z.number(),
      monthYear: z.string().min(2).max(100)
    })
  ),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  startTime: z.string().min(2).max(100).optional(),
  endTime: z.string().min(2).max(100).optional()
})

type UserDetailsFormData = z.infer<typeof userDetailsSchema>

const GetStarted = () => {
  const navigation = useNavigation()
  const [stepCount, setStepCount] = useState(1)
  const [selectedCareType, setSelectedCareType] = useState('child')
  const [careTime, setCareTime] = useState('')
  const [detailsCareType, setDetailsCareType] = useState('')
  const [children, setChildren] = useState([{ id: 1, monthYear: '' }])

  const methods = useForm<UserDetailsFormData>({
    resolver: zodResolver(userDetailsSchema),
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      emergencyPhoneNumber: '',
      location: '',
      careType: '',
      careTime: '',
      detailsCareType: '',
      children: [],
      startDate: undefined,
      endDate: undefined,
      startTime: undefined,
      endTime: undefined
    }
  })

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white"
    >
      <PageHeader title="Get Started" back={true} />
      <View className="flex flex-row items-center">
        {Array.from({ length: 7 }).map((_, index) => (
          <View
            key={index}
            className={`${
              stepCount >= index + 1 ? 'bg-primary' : 'bg-[#E4E4E4]'
            } h-[6px] flex-1 rounded-full`}
          ></View>
        ))}
      </View>
      <View className="flex-1 px-4 py-5">
        <View className="flex-1 flex-col justify-between gap-8">
          <ScrollView
            contentContainerStyle={{ paddingBottom: 30 }}
            showsVerticalScrollIndicator={false}
          >
            <FormProvider {...methods}>
              {stepCount === 1 && (
                <Section1
                  selectedCareType={selectedCareType}
                  setSelectedCareType={setSelectedCareType}
                />
              )}
              {stepCount === 2 && <Section2 />}
              {stepCount === 3 && (
                <Section3 careTime={careTime} setCareTime={setCareTime} />
              )}
              {stepCount === 4 && (
                <Section4
                  detailsCareType={detailsCareType}
                  setDetailsCareType={setDetailsCareType}
                />
              )}
              {stepCount === 5 && (
                <Section5 children={children} setChildren={setChildren} />
              )}
              {stepCount === 6 && <Section6 />}
              {stepCount === 7 && <Section7 />}
            </FormProvider>
          </ScrollView>

          {/* button  */}
          {stepCount !== 7 && (
            <View className="flex flex-row items-center gap-4 px-4 pb-3">
              {stepCount > 1 ? (
                <Button
                  title="Back"
                  onPress={() => setStepCount(stepCount - 1)}
                  buttonSecondary
                  className="flex-1"
                />
              ) : (
                <Button
                  title="Cancel"
                  onPress={() => navigation.goBack()}
                  buttonSecondary
                  className="flex-1"
                />
              )}
              {stepCount === 6 ? (
                <Button
                  title="Submit"
                  onPress={() => setStepCount(stepCount + 1)}
                  buttonPrimary
                  className="flex-1"
                />
              ) : (
                <Button
                  title="Next"
                  onPress={() => setStepCount(stepCount + 1)}
                  buttonPrimary
                  className="flex-1"
                />
              )}
            </View>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default GetStarted

//section 1 -----------------------//
const Section1 = ({
  selectedCareType,
  setSelectedCareType
}: {
  selectedCareType: string | null
  setSelectedCareType: (type: string | null) => void
}) => {
  const careTypes = [
    { id: 'child', label: 'Child Care', component: <ChildCareSVG /> },
    { id: 'elderly', label: 'Elderly Care', component: <ElderlyCareSVG /> },
    {
      id: 'post-operative',
      label: 'Post-Operative Care',
      component: <PostOperativeCareSVG />
    },
    {
      id: 'specialized',
      label: 'Specialized Dementia Care',
      component: <SpecializedCareSVG />
    }
  ]

  return (
    <View>
      <Text className="text-defaultBlack text-2xl font-bold leading-7">
        What kind of care do you need?
      </Text>
      <Text className="text-defaultBlack pt-2 text-base font-normal">
        Join Care giver gives you access to caregivers for the whole household.
      </Text>
      <View className="mt-6 flex flex-row flex-wrap gap-4">
        {careTypes.map((careType) => (
          <Pressable
            key={careType.id}
            className={`relative flex h-[150px] w-[48%] flex-col items-center justify-center gap-4 rounded-xl  ${
              selectedCareType === careType.id
                ? 'bg-foreground border-primary border-[1.5px]'
                : 'border border-[#90928B]'
            }`}
            onPress={() => setSelectedCareType(careType.id)}
          >
            {/* Checkbox */}
            <View className="absolute right-3 top-3">
              {selectedCareType === careType.id ? (
                <CheckedRadioIcon />
              ) : (
                <UncheckedRadioIcon />
              )}
            </View>
            {careType.component}
            <Text className="text-defaultBlack text-base font-normal leading-6">
              {careType.label}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  )
}

//section 2 -----------------------//
const Section2 = () => {
  const {
    control,
    formState: { errors }
  } = useFormContext()

  return (
    <View className="gap-4">
      <View className="bg-foreground rounded-2xl p-4">
        <View>
          <Text className="text-defaultBlack text-2xl font-medium leading-7">
            Where do you need care?
          </Text>
          <InputField
            control={control}
            name="location"
            placeholder="Enter your area or postcode"
            rightIcon={<LocationIcon />}
            className="mt-4"
          />
        </View>
      </View>
      <View className="bg-foreground rounded-2xl p-4">
        <Text className="text-defaultBlack text-2xl font-medium leading-7">
          Add a few details about yourself.
        </Text>
        <View className="mt-4 flex flex-row items-center gap-4">
          <InputField
            control={control}
            name="firstName"
            label="First name"
            placeholder="First name"
            className="w-[48%]"
          />
          <InputField
            control={control}
            name="lastName"
            label="Last name"
            placeholder="Last name"
            className="w-[48%]"
          />
        </View>
        <InputField
          control={control}
          name="phoneNumber"
          label="Phone number"
          placeholder="+880171234567"
          rightIcon={<PhoneIcon />}
        />
        <InputField
          control={control}
          name="emergencyPhoneNumber"
          label="Emergency Contract Number"
          placeholder="+880171234567"
          rightIcon={<PhoneIcon />}
        />
      </View>
    </View>
  )
}

//section 3 -----------------------//
const Section3 = ({
  careTime,
  setCareTime
}: {
  careTime: string
  setCareTime: (value: string) => void
}) => {
  const careTimes = [
    'Right now',
    'Within a week',
    'In 1-2 months',
    'Just browsing'
  ]

  return (
    <View className="bg-foreground rounded-2xl p-4">
      <Text className="text-defaultBlack text-2xl font-medium leading-7">
        When do you need care?
      </Text>
      <View className="mt-4 gap-4">
        {careTimes.map((time) => (
          <Pressable key={time} onPress={() => setCareTime(time)}>
            <View
              className={` rounded-2xl p-4 ${
                careTime === time
                  ? 'bg-foreground border-primary border-[1.5px]'
                  : 'bg-background border border-[#90928B]'
              }`}
            >
              <Text>{time}</Text>
              <View className="absolute right-4 top-3">
                {careTime === time ? (
                  <CheckedRadioIcon />
                ) : (
                  <UncheckedRadioIcon />
                )}
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  )
}

//section 4 -----------------------//
const Section4 = ({
  detailsCareType,
  setDetailsCareType
}: {
  detailsCareType: string
  setDetailsCareType: (value: string) => void
}) => {
  const detailsCareTypes = [
    {
      title: 'Nannies/ recurring sitters',
      description: 'Hire for regular hours, ongoing care, full or part-time.'
    },
    {
      title: 'One-time Sitters',
      description:
        'Book instantly for events, occasional plans, or backup care.'
    },
    {
      title: 'Daycare Centers',
      description: 'Find daycares, learning centers, or preschools near you.'
    },
    {
      title: 'Activities & Camps',
      description: 'Book art classes, after-school programs, or camps near you.'
    }
  ]

  return (
    <View className="bg-foreground rounded-2xl p-4">
      <Text className="text-defaultBlack text-2xl font-medium leading-7">
        What kind of care?
      </Text>
      <View className="mt-4 gap-4">
        {detailsCareTypes.map((type) => (
          <Pressable
            key={type.title}
            onPress={() => setDetailsCareType(type.title)}
          >
            <View
              className={`rounded-2xl p-4 ${
                detailsCareType === type.title
                  ? 'bg-foreground border-primary border-[1.5px]'
                  : 'bg-background border border-[#90928B]'
              }`}
            >
              <Text className="text-defaultBlack text-base font-medium">
                {type.title}
              </Text>
              <Text className="mt-1 text-sm text-gray-500">
                {type.description}
              </Text>
              <View className="absolute right-4 top-3">
                {detailsCareType === type.title ? (
                  <CheckedRadioIcon />
                ) : (
                  <UncheckedRadioIcon />
                )}
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  )
}

//section 5 -----------------------//
const Section5 = ({
  children,
  setChildren
}: {
  children: { id: number; monthYear: string }[]
  setChildren: (value: { id: number; monthYear: string }[]) => void
}) => {
  const { control } = useFormContext()

  const addChild = () => {
    const newChild = { id: Date.now(), monthYear: '' }
    setChildren([...children, newChild])
  }

  const removeChild = (id: number) => {
    const updatedChildren = children.filter((child) => child.id !== id)
    setChildren(updatedChildren)
  }

  return (
    <View className="bg-foreground rounded-2xl p-4">
      <Text className="text-defaultBlack text-2xl font-medium leading-7">
        Who needs care?
      </Text>

      <View className="mt-6">
        {children.map((child, index) => (
          <View key={child.id} className="relative">
            <InputField
              control={control}
              name={'Child' + (index + 1).toString()}
              label={'Child ' + (index + 1).toString()}
              placeholder="Month and Year (MM/YYYY)"
            />
            <View className="absolute right-0 top-0">
              <Text
                className="text-primary decoration-primary underline decoration-solid decoration-8"
                onPress={() => removeChild(child.id)}
              >
                Remove
              </Text>
            </View>
          </View>
        ))}
      </View>
      <Pressable onPress={addChild} className="flex-row items-center gap-2">
        <PlusCircleIcon />
        <Text className="text-primary text-base font-medium leading-6">
          Add Another Child
        </Text>
      </Pressable>
      <View className="mt-6 flex-row items-center gap-2">
        <UncheckedRadioIcon />
        <Text className="text-defaultBlack text-base font-medium leading-6">
          I'm expecting
        </Text>
      </View>
    </View>
  )
}

//section 6 -----------------------//
const Section6 = () => {
  const { control } = useFormContext()

  return (
    <View className="bg-foreground rounded-2xl p-4">
      <Text className="text-defaultBlack text-2xl font-medium leading-7">
        When do you need care?
      </Text>
      <View className="mt-3 gap-4">
        <DateField
          control={control}
          name="startDate"
          label="Estimated start date"
        />
        <DateField
          control={control}
          name="endDate"
          label="Estimated end date (optional)"
        />
        <View className="mt-4 flex-row gap-4">
          <View className="flex-1">
            <TimeField control={control} name="startTime" label="Start Time" />
          </View>
          <View className="flex-1">
            <TimeField control={control} name="endTime" label="End Time" />
          </View>
        </View>
      </View>
    </View>
  )
}

//section 7 -----------------------//
const Section7 = () => {
  const progress = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false
    }).start()
  }, [progress])

  const width = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%']
  })

  return (
    <View className="flex h-screen pt-8">
      <Text className="text-defaultBlack text-2xl font-medium leading-7">
        Did you know all individual caregiver start with a required background
        check?
      </Text>

      <View className="mt-60 ">
        <Text className="text-defaultBlack mt-6 text-base font-medium">
          Sit tight, we're finding matches near you...
        </Text>

        <View className="mt-6 flex-1">
          <View className="h-3 w-full overflow-hidden rounded-full bg-[#E6E6E6]">
            <Animated.View
              style={{ width }}
              className="bg-primary h-full rounded-full"
            />
          </View>
        </View>
      </View>
    </View>
  )
}
