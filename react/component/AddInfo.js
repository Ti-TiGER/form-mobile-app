import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Card, TextInput} from 'react-native-paper';

export default function Addinfo({navigation}) {
  return (
    <ScrollView>
      <Card style={styles.Card}>
        <Card.Content>
          <Text style={{fontSize: 18, marginBottom: 10, fontWeight: 'bold'}}>
            ข้อมูลทั่วไป
          </Text>
          <View style={styles.Viewform}>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 10,
                marginTop: 10,
                paddingRight: 63,
              }}>
              ชื่อโรงงาน
            </Text>

            <TextInput
              style={styles.Txtinput}
              mode="flat"
              placeholder="ระบุข้อมูล"
              right={<TextInput.Affix text="/100" />}
            />
          </View>

          <View style={styles.Viewform}>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 10,
                marginTop: 10,
                paddingRight: 31,
              }}>
              ประกอบกิจการ
            </Text>

            <TextInput
              style={styles.Txtinput}
              mode="flat"
              placeholder="ระบุข้อมูล"
              right={<TextInput.Affix text="/100" />}
            />
          </View>

          <View style={styles.Viewform}>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 10,
                marginTop: 10,
                paddingRight: 40,
              }}>
              เบอร์โทรศัพท์
            </Text>

            <TextInput
              style={styles.Txtinput}
              mode="flat"
              placeholder="ระบุข้อมูล"
              keyboardType="numeric"
              right={<TextInput.Icon name="eye" />}
              right={<TextInput.Affix text="/10" />}
              autoCorrect={false}
            />
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.Card2}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            style={styles.button}
            title="Register Page"
            onPress={() => navigation.navigate('Register Page2')}>
            <Text style={styles.btntext}>ยืนยัน</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Card: {
    marginHorizontal: 3,
    marginVertical: 3,
  },
  Card2: {
    marginTop: 270,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  form: {
    color: '#F3D5C0',
  },
  Viewform: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
  },
  Txtinput: {
    width: '60%',
    height: 50,
    backgroundColor: '#C8C6C6',
    borderRadius: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    paddingHorizontal: 28,
  },
  button: {
    width: '100%',
    height: 45,
    alignSelf: 'auto',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'flex-end',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#004e65',
    borderRadius: 5,
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 10,
  },
  labeldate: {
    fontWeight: 'bold',
    fontSize: 18,
    alignItems: 'flex-start',
  },
  inputWrap: {
    flex: 1,
    borderColor: '#cccccc',
    borderBottomWidth: 1,
    marginBottom: 10,
    flexDirection: 'row',
  },
  dropdown2BtnStyle: {
    width: '60%',
    height: 50,
    backgroundColor: '#C8C6C6',
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 28,
  },
  dropdown2BtnTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  Dropdown: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
  },
});
