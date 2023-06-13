import React from 'react'
import { View, Text, Platform } from 'react-native'
import { ColorStatus } from '../../models/theme'
import { SvgProps, NumberProp } from "react-native-svg";


type SvgLoaderProps = {
    component: React.FC<SvgProps>,
    size?: NumberProp,
    height?: NumberProp,
    width?: NumberProp,
    status?: ColorStatus,
    fallbackIconName?: string
    fallbackIconSize?: number
    fallbackIconStatus?: ColorStatus
}

export default function SvgLoader({ component, size, height, width, status, fallbackIconName, fallbackIconSize, fallbackIconStatus, ...props }: SvgLoaderProps) {
    // const { color } = useEvaColor()
    const SvgComponent = component
    const iconName = fallbackIconName || 'question-mark-circle-outline'

    const svgProps = {
        preserveAspectRatio: "xMinYMin slice",
        // viewBox: "0 0 100 100",
        ...(size && { height: size, width: size }),
        ...(height && { height }),
        ...(width && { width }),
        // ...(status && { fill: color[status] })
    }

    return (
        Platform.select({
            native: () => <SvgComponent {...props} {...svgProps} />,
            default: () => (
              <SvgComponent {...props} {...svgProps} />
            )
        })()
    )
}
