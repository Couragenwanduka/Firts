import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';

const Login: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [fontsLoaded] = useFonts({
    LeagueSpartan: require('@/assets/fonts/LeagueSpartan-VariableFont_wght.ttf'),
  });
  const router = useRouter();

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
         <StatusBar barStyle="dark-content" translucent={false}  backgroundColor={'#ecf1ff'}/>
        {/* Header */}
        <View style={styles.header}>
          <AntDesign name="left" size={30} color="#2260ff" onPress={() => router.back()} />
          <Text style={styles.headerText}>Hello!</Text>
        </View>

        {/* Welcome Section */}
        <View>
          <Text style={styles.welcomeText}>Welcome Back</Text>
        </View>
        <View>
          <Text style={styles.descriptionText}>
            Healthy skin is the foundation of confidence and beauty. Care for it daily with love
            and intention, and let your natural glow shine through.
          </Text>
        </View>

        {/* Input Fields */}
        <View style={styles.inputSection}>
          <View style={styles.inputContainer}>
            <Text style={[styles.label, ]}>Email</Text>
            <TextInput
              placeholder="example@example.com"
              value={text}
              onChangeText={(value) => setText(value)}
              style={styles.input}
            />
          </View>

          <View style={[styles.inputContainer, styles.passwordContainer]}>
            <Text style={[styles.label]}>Password</Text>
            <TextInput
              placeholder="*************"
              value={password}
              onChangeText={(value) => setPassword(value)}
              style={styles.input}
              secureTextEntry
            />
            <Entypo name="eye-with-line" size={24} color="black" style={styles.icon} />
          </View>
        </View>

        {/* Login Button */}
        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* Social Icons */}
        <View style={styles.socialIcons}>
          <AntDesign name="google" size={24} color="#2260ff" />
          <Entypo name="facebook" size={24} color="#2260ff" />
          <Entypo name="fingerprint" size={24} color="#2260ff" />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text >Don’t have an account?</Text>
          <Text style={styles.signUpText}>Sign Up</Text>
        </View>
      </View>
     </ScrollView>
   </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
},
scrollContainer: {
    flexGrow: 1,
},
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 100,
    gap:'40%',
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#2260ff',
    fontFamily:'Helvetica'
   
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: '600',
    marginTop: 50,
    marginLeft: 10,
    color: '#2260ff',
    fontFamily:'Helvetica'
  },
  descriptionText: {
    fontSize: 14,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    color: '#000',
    fontFamily:'Helvetica'
  },
  inputSection: {
    marginTop: 20,
    alignItems: 'center',
  },
  inputContainer: {
    width: '90%',
    marginTop: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
  },
  input: {
    backgroundColor: '#ecf1ff',
    height: 60,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    marginTop: 10,
    color: '#000',
  },
  passwordContainer: {
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 50,
  },
  buttonSection: {
    marginTop: 30,
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#2260ff',
    width: 150,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    gap: 30,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom:250
  },
  signUpText: {
    color: '#2260ff',
    fontWeight: '600',
    marginLeft: 5,
  },
});

export default Login;
