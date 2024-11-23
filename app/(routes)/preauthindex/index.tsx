import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter();
  return (
    <View className='bg-white flex justify-center items-center w-screen h-screen'>
      <Image source={require('../../../assets/images/preAuth.png')} />
      <Text style={{ fontFamily: 'LeagueSpartan' }} className='text-primary text-[48px] font-thin mt-10'> Skin </Text>
      <Text className='text-primary text-[48px] font-thin -mt-1'>Firts</Text>
      <Text className='text-primary text-[16px] font-medium mt-3'>Dermatology Center</Text>
      <Text className='text-[12px] text-center ml-5 mt-20 break-words w-10/12 text-[#070707]'>Skincare is not just about looking good; it’s about feeling good.
      When you invest in your skin, you invest in yourself,
      so wear your confidence every day.</Text>
      <TouchableOpacity className='bg-primary w-52 flex justify-center items-center h-10 rounded-2xl mt-10' onPress={() => router.push('/(routes)/login/login')}>
        <Text className='text-white text-xl'> Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity className='bg-[#cad6ff] w-52 flex justify-center items-center h-10 rounded-2xl mt-5' onPress={() => router.push('/(routes)/signup')}>
        <Text className='text-primary text-xl'> Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Index;
