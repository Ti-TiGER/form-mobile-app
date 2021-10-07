import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {Card, TextInput, ProgressBar, Colors} from 'react-native-paper';
import Datatable from './Datatable';
import Datatable2 from './Datatable2';

export default function Register2({navigation}) {
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
            ขั้นตอน 2 / 4
          </Text>
        </View>
        <ProgressBar progress={0.5} color={Colors.lightGreenA700} />
      </Card>

      <Card style={styles.Card}>
        <Card.Content>
          <Text style={{fontSize: 18, marginBottom: 10, fontWeight: 'bold'}}>
            ข้อมูลการผลิต
          </Text>
          <View style={styles.Viewform}>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 10,
                marginTop: 10,
                paddingRight: 34,
              }}>
              คนงานชาย
            </Text>

            <TextInput
              style={styles.Txtinput}
              mode="flat"
              placeholder="ระบุข้อมูล"
              keyboardType="numeric"
              right={<TextInput.Affix text="คน" />}
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
              คนงานหญิง
            </Text>

            <TextInput
              style={styles.Txtinput}
              mode="flat"
              placeholder="ระบุข้อมูล"
              keyboardType="numeric"
              right={<TextInput.Affix text="คน" />}
            />
          </View>

          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginBottom: 10,
              marginTop: 10,
            }}>
            วัตถุดิบ
          </Text>

          <Datatable />

          <TouchableOpacity
            style={styles.button2}
            title="Addinfo Page"
            onPress={() => navigation.navigate('Addinfo Page')}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="plus"
                size={30}
                color="#d2d2d2"
                style={{paddingRight: 5}}
              />
              <Text style={styles.text}>เพิ่มข้อมูล</Text>
            </View>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginBottom: 10,
              marginTop: 10,
            }}>
            ผลิตภัณฑ์
          </Text>

          <Datatable2 />

          <TouchableOpacity
            style={styles.button2}
            title="Addinfo Page"
            onPress={() => navigation.navigate('Addinfo Page')}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="plus"
                size={30}
                color="#d2d2d2"
                style={{paddingRight: 5}}
              />
              <Text style={styles.text}>เพิ่มข้อมูล</Text>
            </View>
          </TouchableOpacity>
        </Card.Content>
      </Card>

      <Card style={styles.Card}>
        <Card.Content>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginBottom: 10,
              fontWeight: 'bold',
            }}>
            ผังกระบวนการผลิต
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Addinfo Page')}>
              <Icon2
                name="plussquareo"
                size={80}
                color="#d2d2d2"
                style={{paddingRight: 5}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Addinfo Page')}>
              <Icon2
                name="plussquareo"
                size={80}
                color="#d2d2d2"
                style={{paddingRight: 5}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Addinfo Page')}>
              <Icon2
                name="plussquareo"
                size={80}
                color="#d2d2d2"
                style={{paddingRight: 5}}
              />
            </TouchableOpacity>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.Card2}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            style={styles.button}
            title="Register Page"
            onPress={() => navigation.navigate('Register Page3')}>
            <Text style={styles.btntext}>ต่อไป</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Card: {
    marginHorizontal: 5,
    marginVertical: 5,
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
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d2d2d2',
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
  button2: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'flex-end',
    width: '100%',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderStyle: 'dotted',
    borderColor: '#d2d2d2',
    borderWidth: 1.5,
    borderRadius: 1.5,
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
