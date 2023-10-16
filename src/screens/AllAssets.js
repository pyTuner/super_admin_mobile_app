import React from 'react';
import { View, StyleSheet } from 'react-native';
import TableComponent from '../components/TableComponent';

export default AllAssets = () => {
  const headers = ['No', 'Company Name', 'Gateway', 'Device Type', 'Model', 'Device Status', 'Installation Date'];
  const items = [
    {
      "No": 1,
      "Company Name": "ABC Corp",
      "Gateway": "Gateway A",
      "Device Type": "Sensor",
      "Model": "Model X",
      "Device Status": "Active",
      "Installation Date": "2023-01-15"
    },
    {
      "No": 2,
      "Company Name": "XYZ Inc",
      "Gateway": "Gateway B",
      "Device Type": "Actuator",
      "Model": "Model Y",
      "Device Status": "Inactive",
      "Installation Date": "2023-02-28"
    },
    {
      "No": 3,
      "Company Name": "MNO Ltd",
      "Gateway": "Gateway C",
      "Device Type": "Sensor",
      "Model": "Model Z",
      "Device Status": "Active",
      "Installation Date": "2023-03-12"
    },
    {
      "No": 4,
      "Company Name": "PQR Co.",
      "Gateway": "Gateway D",
      "Device Type": "Actuator",
      "Model": "Model W",
      "Device Status": "Inactive",
      "Installation Date": "2023-04-05"
    },
    {
      "No": 5,
      "Company Name": "DEF Industries",
      "Gateway": "Gateway E",
      "Device Type": "Sensor",
      "Model": "Model V",
      "Device Status": "Active",
      "Installation Date": "2023-05-20"
    },
    {
      "No": 6,
      "Company Name": "GHI Corporation",
      "Gateway": "Gateway F",
      "Device Type": "Sensor",
      "Model": "Model U",
      "Device Status": "Active",
      "Installation Date": "2023-06-10"
    },
    // {
    //   "No": 7,
    //   "Company Name": "JKL Enterprises",
    //   "Gateway": "Gateway G",
    //   "Device Type": "Actuator",
    //   "Model": "Model T",
    //   "Device Status": "Inactive",
    //   "Installation Date": "2023-07-01"
    // },
    // {
    //   "No": 8,
    //   "Company Name": "VWX Limited",
    //   "Gateway": "Gateway H",
    //   "Device Type": "Sensor",
    //   "Model": "Model S",
    //   "Device Status": "Active",
    //   "Installation Date": "2023-08-15"
    // },
    // {
    //   "No": 9,
    //   "Company Name": "RST Corporation",
    //   "Gateway": "Gateway I",
    //   "Device Type": "Sensor",
    //   "Model": "Model R",
    //   "Device Status": "Inactive",
    //   "Installation Date": "2023-09-02"
    // },
    // {
    //   "No": 10,
    //   "Company Name": "LMN Industries",
    //   "Gateway": "Gateway J",
    //   "Device Type": "Actuator",
    //   "Model": "Model Q",
    //   "Device Status": "Active",
    //   "Installation Date": "2023-10-18"
    // },
    // {
    //   "No": 11,
    //   "Company Name": "OPQ Corp",
    //   "Gateway": "Gateway K",
    //   "Device Type": "Sensor",
    //   "Model": "Model P",
    //   "Device Status": "Active",
    //   "Installation Date": "2023-11-11"
    // },
    // {
    //   "No": 12,
    //   "Company Name": "UVW Inc",
    //   "Gateway": "Gateway L",
    //   "Device Type": "Actuator",
    //   "Model": "Model O",
    //   "Device Status": "Inactive",
    //   "Installation Date": "2023-12-05"
    // },
    // {
    //   "No": 13,
    //   "Company Name": "EFG Ltd",
    //   "Gateway": "Gateway M",
    //   "Device Type": "Sensor",
    //   "Model": "Model N",
    //   "Device Status": "Active",
    //   "Installation Date": "2024-01-03"
    // },
    // {
    //   "No": 14,
    //   "Company Name": "HIJ Corporation",
    //   "Gateway": "Gateway N",
    //   "Device Type": "Sensor",
    //   "Model": "Model M",
    //   "Device Status": "Inactive",
    //   "Installation Date": "2024-02-20"
    // },
    // {
    //   "No": 15,
    //   "Company Name": "QRS Enterprises",
    //   "Gateway": "Gateway O",
    //   "Device Type": "Actuator",
    //   "Model": "Model L",
    //   "Device Status": "Active",
    //   "Installation Date": "2024-03-12"
    // }
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





