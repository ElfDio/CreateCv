import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import tw from 'twrnc';

type TextInputProps = {
    title: string;
    message: boolean;
    search: boolean
}

const Header = (props: TextInputProps) => {
  const { title, message, search} = props;
  return (
    <View style={tw`flex flex-row justify-between items-center px-3 py-3`}>
        <Text style={tw`text-xl text-indigo-600 font-semibold`}>{title}</Text>
        { message ?  
        <TouchableOpacity>
            <Text style={tw`text-m text-indigo-600 font-semibold`}>Mesajlar</Text>
        </TouchableOpacity>: null }
        { search ?  
        <TouchableOpacity>   
            <Text style={tw`text-m text-indigo-600 font-semibold`}>Arama</Text> 
        </TouchableOpacity> : null }
    </View>
  );
}

export { Header };
