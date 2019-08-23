// Importe de bibliotecas para fazer o componente
import React from 'react';
import { Text, View } from 'react-native';

// Fazer o componente
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, //para iOS
    shadowOpacity: 0.2, //para iOS
    elevation: 2, //para Android
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Fazer o componente acessível para otras partes do aplicativo
export { Header };
