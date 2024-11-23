import { SafeAreaView, ScrollView, View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import InputForm from '@/components/Input/InputForm';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';

const Signup = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dob, setDob] = useState('');

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
               <StatusBar barStyle="dark-content" translucent={false}  backgroundColor={'#ecf1ff'}/>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <AntDesign
                            name="left"
                            size={30}
                            color="#2260ff"
                            onPress={() => router.back()}
                        />
                        <Text style={styles.headerText}>Hello!</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <InputForm
                            label="Full name"
                            placeholder="type your full name"
                            value={name}
                            onChangeText={setName}
                        />
                        <InputForm
                            label="Password"
                            placeholder="*************"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                        <InputForm
                            label="Email"
                            placeholder="example@example.com"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <InputForm
                            label="Mobile Number"
                            placeholder="0000000000"
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                        />
                        <InputForm
                            label="Date Of Birth"
                            placeholder="DD / MM /YYYY"
                            value={dob}
                            onChangeText={setDob}
                        />
                    </View>
                    <View>
                      <Text style={styles.text}>By continuing, you agree to</Text>
                      <View style={styles.textContainer}>
                      <Text style={styles.blueText}>Terms of Use Privacy Policy</Text>
                      <Text style={styles.text}>and </Text>
                      <Text style={styles.blueText}> Privacy Policy</Text>
                      </View>
                    </View>
                    <View style={styles.buttonContanier}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                    </View>
                    <Text style={styles.text}>Or Signup with </Text>
                    <View style={styles.socialIcons}>
                    <AntDesign name="google" size={24} color="#2260ff" />
                    <Entypo name="facebook" size={24} color="#2260ff" />
                    <Entypo name="fingerprint" size={24} color="#2260ff" />
                    </View>

                    <View style={styles.footer}>
                        <Text style={styles.text}>Already have an account? </Text>
                        <Text style={styles.blueText}>Login</Text>
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
        width: '100%',
        backgroundColor: '#ffffff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        marginTop: 40,
        gap: '30%', // Spacing between AntDesign icon and header text (not natively supported, workaround below)
    },
    headerText: {
        fontSize: 24, // Equivalent to Tailwind's text-3xl
        fontWeight: '500', // Equivalent to font-medium
        color: '#2260ff', // Primary text color
    },
    inputContainer: {
        width: '100%',
        marginTop: 40, // Equivalent to Tailwind's mt-20
        justifyContent: 'center',
        gap: 2, // Spacing between InputForm components (not natively supported, workaround below)
        marginBottom:15
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        gap: 30,
    },
    button:{
        backgroundColor: '#2260ff',
        width: 150,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    buttonContanier:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:19,
        marginBottom:20,
    },
    buttonText:{
        color:'white',
        fontSize:15

    },
    text:{
        color:'black',
        fontSize:15,
        fontWeight:'500',
        flexDirection:'row',
        justifyContent: 'center',
        alignSelf:'center',  // For centering text in a row (not natively supported, workaround below)
     
    },
    blueText:{
        color:'#2260ff',
        fontSize:15,
        fontWeight:'500',
        flexDirection:'row',
        justifyContent: 'center',
        alignSelf:'center'  // For centering text in a row (not natively supported, workaround below)
    },
    textContainer: {
        flexDirection: 'row', // Arranges children horizontally
        justifyContent: 'center', // Centers children horizontally
        alignItems: 'center', // Centers children vertically
        alignContent: 'center', // Aligns wrapped rows; useful only with 'flexWrap'
        gap:2,
        marginTop:10
    },
    footer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:150,
        marginTop:30,
      },
    
});

export default Signup;
