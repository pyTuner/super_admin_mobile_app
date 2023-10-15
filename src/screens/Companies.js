import React from 'react';
import { View, StyleSheet } from 'react-native';
import TableComponent from '../components/TableComponent';

export default Companies = () => {
  const headers = ['No', 'Name', 'Location', 'Actions'];
  const items = [
    {
      No: 1,
      Name: "John Doe",
      Location: "New York",
      Actions: ["add", "update", "delete"]
  },
  {
      No: 2,
      Name: "Jane Smith",
      Location: "Los Angeles",
      Actions: ["add", "update", "delete"]
  },
  {
      No: 3,
      Name: "Michael Johnson",
      Location: "Chicago",
      Actions: ["add", "update", "delete"]
  },
  {
      No: 4,
      Name: "Emily Williams",
      Location: "Houston",
      Actions: ["add", "update", "delete"]
  },
  {
      No: 5,
      Name: "Daniel Brown",
      Location: "Phoenix",
      Actions: ["add", "update", "delete"]
  }
  ]; 

  const numberOfItemsPerPageList = [7, 10, 15];

  const tableStyle = styles.table;
  const cellStyle = styles.cell;

  return (
    <View >
      <TableComponent
        headers={headers}
        items={items}
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        tableStyle={tableStyle}
        cellStyle={cellStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  table: { flex: 1, margin: 20 },
  cell: { flexBasis: 100, flexGrow: 1, justifyContent: 'center' },
});
