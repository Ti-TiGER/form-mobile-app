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

export default function Register3({navigation}) {
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
            ขั้นตอน 3 / 4
          </Text>
        </View>
        <ProgressBar progress={0.75} color={Colors.lightGreenA700} />
      </Card>

      <Card style={styles.Card}>
        <Card.Content>
          <Text style={{fontSize: 18, marginBottom: 10, fontWeight: 'bold'}}>
            อาคารโรงงาน
          </Text>
          <View style={styles.Viewform}>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 10,
                marginTop: 10,
                paddingRight: 34,
              }}>
              ความสูงเฉลี่ย
            </Text>

            <TextInput
              style={styles.Txtinput}
              mode="flat"
              placeholder="ระบุข้อมูล"
              keyboardType="numeric"
              right={<TextInput.Affix text="หน่วย" />}
            />
          </View>
          <Text style={{fontSize: 14, marginTop: 10, color: '#545454'}}>
            เลือกคำตอบอย่างใดอย่างหนึ่ง
          </Text>
          <Mybutton2 />
          <View style={styles.Viewform}>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 10,
                marginTop: 10,
                paddingRight: 34,
              }}>
              เนื่องจาก
            </Text>

            <TextInput
              style={styles.Txtinput}
              mode="flat"
              placeholder="ระบุเหตุผล"
            />
          </View>

          <Text style={{fontSize: 14, marginTop: 10, color: '#545454'}}>
            เลือกคำตอบอย่างใดอย่างหนึ่ง
          </Text>
          <Mybutton2 />
          <View style={styles.Viewform}>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 10,
                marginTop: 10,
                paddingRight: 34,
              }}>
              เนื่องจาก
            </Text>

            <TextInput
              style={styles.Txtinput}
              mode="flat"
              placeholder="ระบุเหตุผล"
            />
          </View>

          <Text style={{fontSize: 14, marginTop: 10, color: '#545454'}}>
            เลือกคำตอบอย่างใดอย่างหนึ่ง
          </Text>
          <Mybutton2 />
          <View style={styles.Viewform}>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 10,
                marginTop: 10,
                paddingRight: 34,
              }}>
              เนื่องจาก
            </Text>

            <TextInput
              style={styles.Txtinput}
              mode="flat"
              placeholder="ระบุเหตุผล"
            />
          </View>

          <Text style={{fontSize: 14, marginTop: 10, color: '#545454'}}>
            เลือกคำตอบอย่างใดอย่างหนึ่ง
          </Text>
          <Mybutton2 />
          <View style={styles.Viewform}>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 10,
                marginTop: 10,
                paddingRight: 34,
              }}>
              เนื่องจาก
            </Text>

            <TextInput
              style={styles.Txtinput}
              mode="flat"
              placeholder="ระบุเหตุผล"
            />
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.Card}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            style={styles.button}
            title="Register Page4"
            onPress={() => navigation.navigate('Register Page4')}>
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
