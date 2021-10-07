import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function End({navigation}) {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home Page')}>
        <Text style={styles.btntext}>ขอขอบคุณ{'\n'}สำหรับการรายงานผล</Text>
      </TouchableOpacity>
      <Image
        source={{
          uri: 'https://image.shutterstock.com/image-vector/hand-drawn-lettering-thankyou-decorative-260nw-1535896373.jpg',
        }}
        style={{
          width: '100%',
          height: 216,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'flex-end',
          marginTop: 10,
          padding: 10,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'flex-end',
    width: '80%',
    marginVertical: 100,
    padding: 10,
    backgroundColor: '#F0E5CF',
    borderRadius: 5,
    borderStyle: 'dotted',
    borderColor: '#d2d2d2',
    borderWidth: 1.5,
    borderRadius: 1.5,
  },
  btntext: {
    color: '#4B6587',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
});
