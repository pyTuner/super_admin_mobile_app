import React from 'react';
import { ScrollView, View, StyleSheet, FlatList } from 'react-native';
import { DataTable } from 'react-native-paper';

const data = [
  ['John Doe', 'Designer', '40', '2012/05/06', '$86,000'],
  ['Sam Smith', 'Developer', '55', '2009/04/15', '$100,000'],
  ['Jade Doe', 'CEO', '45', '2012/05/06', '$100,000'],
  ['Mike Doe', 'Engineer', '36', '2012/05/06', '$96,000'],
  ['Laura Smith', 'Designer', '34', '2012/05/06', '$87,000'],
  // Add more data here...
];

const DataTableScreen = () => {
  const renderItem = ({ item }) => (
    <DataTable.Row>
      {item.map((cell, index) => (
        <DataTable.Cell key={index}>{cell}</DataTable.Cell>
      ))}
    </DataTable.Row>
  );

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Name</DataTable.Title>
              <DataTable.Title>Position</DataTable.Title>
              <DataTable.Title>Age</DataTable.Title>
              <DataTable.Title>Date</DataTable.Title>
              <DataTable.Title numeric>Salary</DataTable.Title>
            </DataTable.Header>
          </DataTable>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
});

export default DataTableScreen;
