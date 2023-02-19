import React from 'react';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

type ClickableProps = {
    text: string;
    onPress?: ((event: GestureResponderEvent) => void) | undefined
}

const Clickable = (props: ClickableProps) => {
  const { text , onPress} = props;
  return (
    <TouchableOpacity
        style={tw`rounded-md border-2 border-gray-800 border-solid bg-transparent px-3 py-3 bg-indigo-600`}
        onPress={onPress}>

        <Text  style={tw`text-white text-center text-xl font-semibold`}>{text}</Text>

    </TouchableOpacity>
  );
}

export { Clickable };
