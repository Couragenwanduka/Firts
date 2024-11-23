import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { FC } from 'react';

interface InputFormProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    placeholder?: string;
}

const InputForm: FC<InputFormProps> = ({ label, value, onChangeText, secureTextEntry, placeholder }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                style={styles.input}
                placeholderTextColor="#809CFF" // For placeholder text color
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10, // Spacing between input fields
    },
    label: {
        fontSize: 19,
        fontWeight: '600',
        marginBottom: 10, // Space between label and input field
        marginLeft:25,
    },
    input: {
        backgroundColor: '#ecf1ff',
        height: 64, // Equivalent to 16 Tailwind units
        borderRadius: 12, // Equivalent to rounded-xl
        fontSize: 18,
        paddingHorizontal: 16, // For inner spacing
        paddingVertical: 10,
        color: '#000', // Text color inside the input field
        width:'90%',
        marginLeft:22
    },
});

export default InputForm;
