import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {DataTable} from 'react-native-paper';

export default function Datatable({navigation}) {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>ผลิตภัณฑ์</DataTable.Title>
        <DataTable.Title numeric>ปริมาณการใช้ต่อปี</DataTable.Title>
        <DataTable.Title numeric>แหล่งจำหน่าย</DataTable.Title>
      </DataTable.Header>
    </DataTable>
  );
}

const styles = StyleSheet.create({
  Header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d2d2d2',
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'flex-end',
    width: '80%',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderStyle: 'dotted',
    borderColor: '#d2d2d2',
    borderWidth: 1.5,
    borderRadius: 1.5,
  },
});
