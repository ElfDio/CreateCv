import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import { Header } from '../components';
import tw from 'twrnc';
import { CvContext } from '../store/Provider';

function Profile(): JSX.Element {
  const cvList = useContext(CvContext);
  return (
    <>
      <Header title='Profile' message={false} search={false} />
      <View style={tw`flex flex-row px-4 py-4`}>
        <Text style={tw`text-xl text-indigo-500 font-semibold`}> {cvList.cv_list[0].name} </Text>
        <Text style={tw`text-xl text-indigo-500 font-semibold`}> {cvList.cv_list[0].surname} </Text>
      </View>
      <View style={tw`flex flex-row justify-between px-4 py-4`}>
        <Text style={tw`text-s text-black font-light`}> {cvList.cv_list[0].email} </Text>
        <Text style={tw`text-s text-black font-light`}> {cvList.cv_list[0].phone} </Text>
      </View>
      <View style={tw`flex flex-column justify-between px-4 py-4 bg-gray-200 border-2 border-slate-400`}>
        <View style={tw`flex flex-row justify-between`}>
          <Text> Üniversite : {cvList.cv_list[0].graduate} </Text>
          <Text> Deneyim : {cvList.cv_list[0].experience} </Text>
        </View>
      </View>
      <View style={tw`flex flex-row justify-between px-4 py-4 mt-5`}>
        <Text style={tw`text-l text-black font-light`}> Toplam Oluşturulan CV sayısı : </Text>
        <Text style={tw`text-xl text-black font-bold text-indigo-500`}> {cvList.cv_list.length} </Text>
      </View>
    </>
  );
}



export { Profile };
