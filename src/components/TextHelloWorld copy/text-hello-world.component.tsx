import React, {ReactElement} from 'react';
import {Text, View} from 'react-native';
import {style} from './style';

const TextHelloWorldComponent = (): ReactElement => {
  return (
    <View>
      <Text style={style.text}>Hola a todos desde TextHelloWorldComponent</Text>
    </View>
  );
};

export default TextHelloWorldComponent;
