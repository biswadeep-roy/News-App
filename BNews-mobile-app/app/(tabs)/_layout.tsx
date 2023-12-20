import React from 'react';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import Colors from '../../constants/Colors';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome5>['name'];
  color: string;
}) {
  return <FontAwesome5 size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'BNews',
          tabBarIcon: ({ color }) => <TabBarIcon name="newspaper" color={color} />, 
          headerRight: () => (
            <Link href="/modal" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome5
                  name="envelope" 
                  size={25}
                  color={Colors[colorScheme ?? 'light'].text}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
          
          ),
        }}
      />

    </Tabs>
  );
}
