import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {RadioButton} from 'react-native-paper';

const Mybutton = () => {
  const [checked, setChecked] = React.useState('first');

  return (
    <View style={styles.Viewform}>
      <RadioButton
        value="first"
        status={checked === 'first' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('first')}
        formHorizontalAlignment={false}
      />
      <Text
        style={{
          fontSize: 16,
          marginBottom: 10,
          marginTop: 6,
          paddingRight: 90,
        }}>
        ครบถ้วน
      </Text>
      <RadioButton
        value="second"
        color={'red'}
        status={checked === 'second' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('second')}
        formHorizontalAlignment={false}
      />
      <Text
        style={{
          fontSize: 16,
          marginBottom: 10,
          marginTop: 6,
        }}>
        ไม่ครบถ้วน
      </Text>
    </View>
  );
};

export default Mybutton;

const styles = StyleSheet.create({
  Viewform: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
  },
});
