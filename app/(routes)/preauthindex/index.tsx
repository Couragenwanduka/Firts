import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter();
  return (
    <View className='bg-white flex justify-center items-center w-screen h-screen'>
      <Image source={require('../../../assets/images/preAuth.png')} />
      <Text style={{ fontFamily: 'LeagueSpartan' }} className='text-primary text-[48px] font-thin mt-2'> Skin </Text>
      <Text className='text-primary text-[48px] font-thin -mt-1'>Firts</Text>
      <Text className='text-primary text-[12px]'>Dermatology Center</Text>
      <TouchableOpacity className='bg-primary w-44 flex justify-center items-center h-10 rounded-2xl mt-5' onPress={() => router.push('/(routes)/login/login')}>
        <Text className='text-white text-base'> Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity className='bg-[#cad6ff] w-44 flex justify-center items-center h-10 rounded-2xl mt-5'>
        <Text className='text-primary text-base'> Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Index;
