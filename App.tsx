/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, View, } from 'react-native';

import { DefaultButton, CustomModal, Typography } from './src/components';

import { colors } from './src/utils/theme';
import { DEVICE_WIDTH } from './src/utils/dimensions';

// HOMEWORK: En todos los lugares donde se usa el Text implementar Typography

const App = () => {
  const [ isModalVisible, setModalVisible ] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  }

  const hideModal = () => {
    setModalVisible(false);
  }

  return (
    <>
      <SafeAreaView style={{ backgroundColor: colors.verylightBlue }} />
        <ScrollView style={{ backgroundColor: colors.verylightBlue, flex: 1, width: '100%' }}>
          <View style={ styles.mainContainer }>
            <Typography color={ colors.mainOrange } size={ 30 } variant='bold'>
              Hola Mundo!
            </Typography>
            <Typography variant='medium'>Subtitulo</Typography>
            <Image
              resizeMode='contain'
              style={styles.image}
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
            <Image
              resizeMode='contain'
              style={styles.image}
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
            <Image
              resizeMode='contain'
              style={styles.image}
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
            <Image
              resizeMode='contain'
              style={styles.image}
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
            <Image
              resizeMode='contain'
              style={styles.image}
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
            <Image
              resizeMode='contain'
              style={styles.image}
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
            <Image
              resizeMode='contain'
              style={styles.image}
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
            <Image
              resizeMode='contain'
              style={styles.image}
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
            <Image
              resizeMode='contain'
              style={styles.image}
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
            <DefaultButton
              onPress={ showModal }
              text='Mostrar Hola Mundo'
              textSize={ 20 }
              variant='secondary'
            />
            <CustomModal
              description='Esto es un mensaje de hola mundo.'
              visible={ isModalVisible }
              onPressPrimaryButton={ hideModal }
              onPressSecondaryButton={ hideModal }
              primaryButtonText='Ok'
              secondaryButtonText='Cancel'
              title='Hola mundo!'
              variant='info'
            ></CustomModal>
          </View>
        </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.verylightBlue,
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 30,
    width: '100%',
 },
 title: {
   marginBottom: 10,
 },
 image: {
  minHeight: 100,
  width: DEVICE_WIDTH * 0.5,
 },
 button: {
   backgroundColor: 'green',
   width: 50,
 }
});

export default App;
