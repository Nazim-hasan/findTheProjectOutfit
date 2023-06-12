import React, { useState } from 'react'
import { View, RefreshControl, ScrollView } from 'react-native'
// import { ScrollView } from 'react-native-gesture-handler'

import { ContainerScreenProps } from '../models/screen'

const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function Container({
    children,
    scroll,
    refresh,
    padding = 20,
    level = '2',
    scrollViewProps,
    hasCustomBottomNavigation = false //? enable scroll if bottom navigation is custom
}: ContainerScreenProps) {
    const [refreshing, setRefreshing] = useState(false);
    const [scrollContainerKey, setScrollContainerKey] = useState(+new Date())
    const pad = `${padding}px`

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setScrollContainerKey(+new Date())
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <>
            {/* Todo: custom App TopNavigation */}
            {/*  */}
            {/* use viewprops to pass navigation props to view element */}

            {scroll ?
                <View style={{ flex: 1 }}>
                    <ScrollView
                        contentContainerStyle={tw`flex-grow px-[${pad}]`}
                        {...(refresh && {
                            refreshControl: <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        })}
                        {...(scroll && scrollViewProps && scrollViewProps)}
                    >
                        <View
                            style={{
                                flex: 1, ...tw.style(
                                    `py-[${pad}]`,
                                    hasCustomBottomNavigation && `pb-26`
                                )
                            }}
                            key={scrollContainerKey}
                        >
                            {children}
                        </View>
                    </ScrollView>
                </View>
                :
                <View style={{ flex: 1, ...tw`p-[${pad}]` }}>
                    {children}
                </View>
            }
        </>
    )
}

// const styles = StyleSheet.create({})
