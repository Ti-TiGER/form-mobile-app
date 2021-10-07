import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function Home({navigation}) {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Register Page')}>
        <Text style={styles.btntext}>
          ระบบลงทะเบียน{'\n'}เพื่อรายงานผลการตรวจโรงงาน
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'flex-end',
    width: '100%',
    marginTop: 250,
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
