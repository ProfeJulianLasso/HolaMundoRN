import React, {ReactElement} from 'react';
import {StyleSheet, Text} from 'react-native';
import {TextHelloWorldComponent} from "./components/TextHelloWorld";

const styles = StyleSheet.create({
  text: {
fontSize: 40,
color: '#de0fd7',
  },
});

const App = (): ReactElement => {
  return (
    <>
      <Text style={ styles.text }>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <TextHelloWorldComponent />
    </>
  );
};

export default App;
