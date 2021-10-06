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
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F0E5CF',
    marginTop: 200,
  },
  btntext: {
    color: '#4B6587',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
});
