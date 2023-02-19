import React from 'react';
import { FlatList } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import { Header } from '../components';
import { cv_list } from '../dummy/cv_list';
import tw from 'twrnc';

function Profile(): JSX.Element {

  return (
    <>
      <Header title='Profilim' message={false} search={false} />
      <View style={tw`flex flex-row px-4 py-4`}>
        <Text style={tw`text-xl text-indigo-500 font-semibold`}> {cv_list[0].name} </Text>
        <Text style={tw`text-xl text-indigo-500 font-semibold`}> {cv_list[0].surname} </Text>
      </View>
      <View style={tw`flex flex-row justify-between px-4 py-4`}>
        <Text style={tw`text-s text-black font-light`}> {cv_list[0].email} </Text>
        <Text style={tw`text-s text-black font-light`}> {cv_list[0].phone} </Text>
      </View>
      <View style={tw`flex flex-column justify-between px-4 py-4 bg-gray-200 border-2 border-slate-400`}>
        <View style={tw`flex flex-row justify-between`}>
          <Text> Üniversite : {cv_list[0].graduate} </Text>
          <Text> Deneyim : {cv_list[0].experience} </Text>
        </View>
      </View>
      <View style={tw`flex flex-row justify-between px-4 py-4 mt-5`}>
        <Text style={tw`text-l text-black font-light`}> Toplam Oluşturulan CV sayısı : </Text>
        <Text style={tw`text-xl text-black font-bold text-indigo-500`}> {cv_list.length} </Text>
      </View>
    </>
  );
}



export { Profile };
