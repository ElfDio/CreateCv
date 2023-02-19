import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { Text, View } from 'react-native';
import tw from 'twrnc';
import { Clickable, Input } from '../components';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../route/RouteParamList';

type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Router'>;

function Login(): JSX.Element {
  const navigation = useNavigation<homeScreenProp>();
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
    }
  });
  const onSubmit = (data: any) => navigation.navigate('Router');

  return (
    <View style={tw`flex-1 flex-col justify-center items-center`}>
      <Text style={tw`text-2xl text-indigo-600 font-semibold`}>INNOVANCE</Text>
        <View>
            <Controller
              control={control}
              rules={{
                required: true,
                maxLength: 5,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder='Lütfen kullanıcı adınız giriniz.'
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="username"
            />
              {errors.username && <Text style={tw`text-xl text-red-600	 font-semibold my-2`}>This is required.</Text>}
            <Clickable onPress={handleSubmit(onSubmit)} text="Giriş Yap" />
        </View>
    </View>
  );
}

export { Login };
