import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '../components/TabBar'

const _layout = () => {
    return (
        <Tabs
            tabBar={props => <TabBar {...props} />}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Safety Map"
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: "Individuals"


                }}
            />
            <Tabs.Screen
                name="create"
                options={{
                    title: "Details"
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile"
                }}
            />
        </Tabs>
    )
}

export default _layout