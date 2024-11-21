import React from 'react';
import { Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';

const Index = () => {
  const [fontsLoaded] = useFonts({
    'LeagueSpartan': require('../../../assets/fonts/LeagueSpartan-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>; // Show loading or fallback UI while fonts are loading
  }

  return (
    <View className='bg-primary h-screen flex justify-center items-center gap-6'>
      <Image  source={require('../../../assets/icons/onBoardingIcon.png')} style={{ width: 100, height: 100 }}/>
      <Text style={{ fontFamily: 'LeagueSpartan'}} className='text-white text-[48px] font-thin'> Skin </Text>
      <Text  className='text-white text-[48px] font-thin -mt-10'>Firts</Text>
      <Text className='text-white text-[12px]'>Dermatology Center</Text>
    </View>
  );
};

export default Index;
