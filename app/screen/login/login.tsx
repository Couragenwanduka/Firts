import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';

const Login: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [fontsLoaded] = useFonts({
    'LeagueSpartan': require('../../../assets/fonts/LeagueSpartan-VariableFont_wght.ttf'),
  });
  const router = useRouter();

  if (!fontsLoaded) {
    return <Text>Loading...</Text>; // Show loading or fallback UI while fonts are loading
  }

  return (
    <>
      <View className='flex h-screen w-screen gap-2'>
        <View className='flex flex-row p-3 items-center gap-10 mt-20 ml-5'>
          <AntDesign name="left" size={20} color="#2260ff"  onPress={() => router.back()} />
          <Text style={{ fontFamily: 'LeagueSpartan'}} className='text-primary text-xl font-medium'>Log In</Text>
        </View>

        <View>
          <Text style={{ fontFamily: 'LeagueSpartan'}} className='font-semibold text-2xl text-primary ml-5'>
            Welcome
          </Text>
        </View>

        <View>
          <Text style={{ fontFamily: 'LeagueSpartan'}} className='text-[12px] ml-5 mt-2'>
            Log in to access your account. Please enter your email and password to continue. Need help? Reset your password anytime.
          </Text>
        </View>

        <View className='flex justify-center items-center mt-8'>
          <View className='w-full ml-[10%]'>
          <Text style={{ fontFamily: 'LeagueSpartan'}} className='text-2xl font-medium'>Email</Text>
          <TextInput
            placeholder="example@example.com"
            value={text}
            onChangeText={(value) => setText(value)}
            className='bg-[#ecf1ff] w-[90%] h-16 rounded-xl placeholder:text-[#809CFF] text-[20px] p-5 focus:outline-none mt-5'
          />

          </View>
         
          <View className='relative w-full ml-[10%] mt-5'>
          <Text style={{ fontFamily: 'LeagueSpartan'}} className='text-2xl font-medium'>Password</Text>
            <TextInput
              placeholder="*************"
              value={password}
              onChangeText={(value) => setPassword(value)}
              className='bg-[#ecf1ff]  w-[90%]  h-16 rounded-xl placeholder:text-[#809CFF] text-[20px] p-5 focus:outline-none mt-5' // Added padding-right for space for icon
            />
            <Entypo 
              name="eye-with-line" 
              size={24} 
              color="black" 
              className="absolute right-16 top-[70%] transform -translate-y-1/2" // Positioned icon on the right
            />
          </View>
        </View>

        <View className='flex justify-center items-center'>
          <TouchableOpacity className='bg-primary w-44 flex justify-center items-center h-10 rounded-2xl mt-5'>
            <Text className='text-white'>Login</Text>
          </TouchableOpacity>
        </View>

        <View className='flex flex-row justify-center items-center mt-10 gap-10'>
          <AntDesign name="google" size={24} color="#2260ff" />
          <Entypo name="facebook" size={24} color="#2260ff" />
          <Entypo name="fingerprint" size={24} color="#2260ff" />
        </View>

        <View className='flex flex-row justify-center items-center mt-10 gap-2 '>
        <Text style={{ fontFamily: 'LeagueSpartan'}}>Don’t have an account?</Text>
        <Text style={{ fontFamily: 'LeagueSpartan'}} className='text-primary font-semibold cursor-pointer'>Sign Up</Text>
      </View>

      </View>
    </>
  );
};

export default Login;
