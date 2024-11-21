import React, { useEffect } from 'react';
import Index from '@/app/screen/onboarding';
import { useRouter } from 'expo-router';

const OnboardingScreen: React.FC = () => {
  const router = useRouter();  

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/(routes)/preauthindex'); 
    }, 2000);  

    return () => clearTimeout(timer); 
  }, [router]);

  return <Index />;  
};

export default OnboardingScreen;
