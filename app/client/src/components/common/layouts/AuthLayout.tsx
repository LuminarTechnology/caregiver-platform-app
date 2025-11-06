import { PropsWithChildren } from 'react'
import { View } from 'react-native'
import PageHeader from '../PageHeader'

type Props = PropsWithChildren<{
  pageTitle: string
}>

const AuthLayout = ({ children, pageTitle = 'CareGiver.com' }: Props) => {
  return (
    <View className="bg-background flex-1">
      <PageHeader title={pageTitle} />
      {children}
    </View>
  )
}

export default AuthLayout
