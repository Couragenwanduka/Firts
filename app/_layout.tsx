import React from 'react'
import { ThemeProvider } from '@/context/theme.context'
import { Stack } from 'expo-router'
import '../public/style/global.css'

export default function _layout() {
  return (
   <ThemeProvider>
    <Stack screenOptions={{headerShown:false}}>
          <Stack.Screen name='index' />
          <Stack.Screen name='(routes)/onboarding/index' />
          <Stack.Screen name='(routes)/preauth'/>
          <Stack.Screen name='(routes)/login/login'/>
          <Stack.Screen name='(routes)/signup/index'/>
    </Stack>
   </ThemeProvider>
  )
}