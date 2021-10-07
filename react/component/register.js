import React, {useState, useEffect} from 'react';
import {
  Image,
  Button,
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {Card, TextInput, ProgressBar, Colors} from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import moment from 'moment';
import Mybutton from '../component/button';
import Mybutton2 from '../component/button 2';

const โรงงานจำพวกที่ = [
  'โรงงานจำพวกที่ 1',
  'โรงงานจำพวกที่ 2',
  'โรงงานจำพวกที่ 3',
  'โรงงานจำพวกที่ 4',
];

const อยู่ในผังเมืองสี่ = [
  'อยู่ในผังเมืองสี่ 1',
  'อยู่ในผังเมืองสี่ 2',
  'อยู่ในผังเมืองสี่ 3',
  'อยู่ในผังเมืองสี่ 4',
];

const ทำเลโดยรอบเป็น = [
  'ทำเลโดยรอบเป็นทะเล',
  'ทำเลโดยรอบเป็นชุมชน',
  'ทำเลโดยรอบเป็นสนามบิน',
  'ทำเลโดยรอบเป็นโรงงาน',
  'ทำเลโดยรอบเป็นถนน',
  'ทำเลโดยรอบเป็นคลอง',
];

export default function Register({navigation}) {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(date + '/' + month + '/' + year);
  }, []);

  return (
    <ScrollView>
      <Card style={styles.Card}>
        <View style={styles.row}>
          <Text style={styles.label}>วันที่ {currentDate}</Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              paddingLeft: 149,
            }}>
            ขั้นตอน 1 / 4
          </Text>
        </View>
        <ProgressBar progress={0.25} color={Colors.lightGreenA700} />
      </Card>

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

          <View style={styles.Dropdown}>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 10,
                marginTop: 10,
                paddingRight: 48,
              }}>
              โรงงานจำพวกที่
            </Text>

            <SelectDropdown
              buttonStyle={styles.dropdown2BtnStyle}
              buttonTextStyle={styles.dropdown2BtnTxtStyle}
              data={โรงงานจำพวกที่}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
          </View>
          <Text style={{fontSize: 16, marginBottom: 10, marginTop: 10}}>
            ชำระค่าธรรมเนียมรายปี
          </Text>

          <Mybutton />
        </Card.Content>
      </Card>
      <Card style={styles.Card}>
        <View style={styles.Card2}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 10,
            }}>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://www.google.co.th/maps')}>
              <Image
                source={{
                  uri: 'https://www.zyrgon.com/wp-content/uploads/2019/06/googlemaps-Zyrgon.jpg',
                }}
                style={{
                  width: 351,
                  height: 216,
                  alignSelf: 'stretch',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.Viewform}>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 10,
                marginTop: 10,

                paddingRight: 31,
              }}>
              พิกัดที่ตั้ง (UTM)
            </Text>

            <TextInput
              style={{
                width: '60%',
                height: 50,
                borderRadius: 8,
                flex: 1,
                backgroundColor: '#C8C6C6',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'baseline',
                paddingHorizontal: 28,
                paddingRight: 20,
              }}
              mode="พิกัดที่ตั้ง (UTM)"
              placeholder="ระบุพิกัด"
              right={<TextInput.Affix text="/100" />}
            />
          </View>

          <View style={styles.Dropdown}>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 10,
                marginTop: 10,
                paddingRight: 48,
              }}>
              อยู่ในผังเมืองสี่
            </Text>

            <SelectDropdown
              buttonStyle={styles.dropdown2BtnStyle}
              buttonTextStyle={styles.dropdown2BtnTxtStyle}
              data={อยู่ในผังเมืองสี่}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
          </View>
          <View style={styles.Dropdown}>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 10,
                marginTop: 10,
                paddingRight: 30,
              }}>
              ทำเลโดยรอบเป็น
            </Text>

            <SelectDropdown
              buttonStyle={styles.dropdown2BtnStyle}
              buttonTextStyle={styles.dropdown2BtnTxtStyle}
              data={ทำเลโดยรอบเป็น}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
          </View>

          <Text style={{fontSize: 16, marginBottom: 10, marginTop: 10}}>
            ชำระค่าธรรมเนียมรายปี
          </Text>

          <Mybutton2 />
        </View>
      </Card>
      <Card style={styles.Card}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            style={styles.button}
            title="Register Page"
            onPress={() => navigation.navigate('Register Page2')}>
            <Text style={styles.btntext}>ต่อไป</Text>
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
    marginHorizontal: 15,
    marginVertical: 3,
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
