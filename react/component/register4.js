import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Card, TextInput, ProgressBar, Colors} from 'react-native-paper';
import Mybutton2 from './button 2';

export default function Register4({navigation}) {
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
            ขั้นตอน 4 / 4
          </Text>
        </View>
        <ProgressBar progress={1} color={Colors.lightGreenA700} />
      </Card>

      <Card style={styles.Card}>
        <Card.Content>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#000000',
            }}>
            คำตอบเลือกอย่างใดอย่างหนึ่ง
          </Text>
          <Mybutton2 />

          <Text style={styles.text}>สรุปผลการตรวจของพนักงานเจ้าหน้าที่</Text>
          <TextInput
            style={styles.Txtinput}
            mode="flat"
            placeholder="ระบุข้อมูล"
          />
          <Text style={styles.text}>ความเห็นของหัวหน้ากลุ่มโรงงาน</Text>
          <TextInput
            style={styles.Txtinput}
            mode="flat"
            placeholder="ระบุข้อมูล"
          />
        </Card.Content>
      </Card>

      <Card style={styles.Card2}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            style={styles.button}
            title="Home Page"
            onPress={() => navigation.navigate('End Page')}>
            <Text style={styles.btntext}>ยืนยัน</Text>
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
    marginTop: 45,
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
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    paddingTop: 10,
    paddingBottom: 20,
  },
  Txtinput: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 5,
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 15,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: '#d2d2d2',
    borderWidth: 1.5,
    borderRadius: 1.5,
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
    backgroundColor: '#2ab05d',
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
