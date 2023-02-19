import React from 'react';
import { FlatList } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import { Header } from '../components';
import { cv_list } from '../dummy/cv_list';
import tw from 'twrnc';

function Timeline(): JSX.Element {

  return (
    <>
    <Header title='Geçmiş' message={false} search={false} />
      <FlatList 
        style={tw`px-3`}
        data={cv_list}
        renderItem={({ item }) => (
          <View style={tw`flex flex-column justify-between mt-4 px-3 py-3 bg-gray-200 border-2 rounded border-slate-400`}>
            <View style={tw`flex flex-row justify-between`}>
              <View style={tw`flex flex-column justify-between`}>
                <Text> {item.name} </Text>
                <Text> {item.surname} </Text>
              </View>
              <View style={tw`flex flex-column justify-between`}>
                <Text> {item.email} </Text>
                <Text> {item.phone} </Text>
              </View>
            </View>
            <View style={tw`flex flex-row justify-between mt-4`}>
              <Text> Üniversite : {item.graduate} </Text>
              <Text> Deneyim : {item.experience} </Text>
            </View>
          </View>
        )}
      />
    </>
  );
}



export { Timeline };
