import { ScrollViewProps } from 'react-native'

export type ContainerScreenProps = {
    children: React.ReactNode
    scroll?: boolean
    padding?: number
    level?: string
    refresh?: boolean
    scrollViewProps?: ScrollViewProps
    hasCustomBottomNavigation?: boolean //? this property depend on scroll
}