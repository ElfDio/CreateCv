import React from 'react';
import { TextInput, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import tw from 'twrnc';

type TextInputProps = {
    value: string;
    placeholder: string;
    onChangeText?: ((text: string) => void) | undefined
    onBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined

}

const Input = (props: TextInputProps) => {
  const { value, placeholder, onChangeText, onBlur} = props;
  return (
    <TextInput
        style={tw`rounded-md border-2 border-gray-800 border-solid bg-transparent w-75 my-4 px-2`}
        value={value}
        onChangeText={onChangeText} 
        placeholder={placeholder}
        onBlur={onBlur}
        />
  );
}

export { Input };
