import React from 'react';
import { View } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { Clickable, Input } from '../components';
import { Text } from 'react-native';
import tw from 'twrnc';
import { cv_list } from '../dummy/cv_list';

function Create(): JSX.Element {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      phone: "",
      experience: "",
      graduate: ""
    }
  });

  const onSubmit = (data: any) => {
    cv_list.push(data)
  };


  return (
    <View>
      <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 5,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder='Lütfen adınız giriniz.'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
      />
      {errors.name && <Text style={tw`text-xl text-red-600 font-semibold my-2`}>Lütfen doğru girdiğinizde emin olunuz.</Text>}

      <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 5,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder='Lütfen soyadınızı giriniz.'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="surname"
      />
      {errors.surname && <Text style={tw`text-xl text-red-600 font-semibold my-2`}>Lütfen doğru girdiğinizden emin olunuz.</Text>}

      <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 5,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder='Lütfen email adresi giriniz.'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
      />
      {errors.email && <Text style={tw`text-xl text-red-600 font-semibold my-2`}>Email doğru girdiğinizden emin olunuz.</Text>}

      <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 5,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder='Lütfen adınız giriniz.'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="phone"
      />
      {errors.phone && <Text style={tw`text-xl text-red-600	 font-semibold my-2`}>Lütfen telefon numarasını doğru girdiğinizden emin olunuz</Text>}

      <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder='Lütfen adınız giriniz.'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="experience"
      />
      {errors.experience && <Text style={tw`text-xl text-red-600 font-semibold my-2`}>Boş geçmeyiniz.</Text>}

      <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder='Lütfen adınız giriniz.'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="graduate"
      />
      {errors.graduate && <Text style={tw`text-xl text-red-600 font-semibold my-2`}>Boş geçmeyiniz.</Text>}

      <Clickable onPress={handleSubmit(onSubmit)} text="CV Oluştur" />
    </View>
  );
}

export { Create };
