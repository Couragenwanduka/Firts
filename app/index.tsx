import React, { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Redirect } from 'expo-router';
import { View, Text } from 'react-native';
import '../public/style/global.css'

const Index = () => {
    const [loggedInUser, setLoggedInUser] = useState(false); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                // const token = await SecureStore.getItemAsync("accessToken");
                const token = 'accessToken';
                console.log("Token:", token);
                setLoggedInUser(!!token); 
                setLoggedInUser(true);
            } catch (error) {
                console.error("Error fetching token:", error);
                setLoggedInUser(false); 
            } finally {
                setLoading(false);
            }
        };

        checkLoginStatus(); 
    }, []); 

    if (loading) {
     
        return <View><Text>Loading...</Text></View>;
    }

    
    return (
        <>
            {loggedInUser ? (
                <Redirect href='/(routes)/onboarding' />
            ) : (
                <Redirect href="/" />
            )}
        </>
    );
};

export default Index;
