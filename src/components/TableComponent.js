// DynamicTable.js
import React, { useState, useEffect } from 'react';
import { DataTable } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const TableComponent = ({ headers, items, numberOfItemsPerPageList }) => {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(numberOfItemsPerPageList[0]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <ScrollView horizontal={true}>
      <DataTable style={styles.table}>
        <DataTable.Header>
          {headers.map((header, index) => (
            <DataTable.Title key={index}  style={styles.cell}>{header}</DataTable.Title>
          ))}
        </DataTable.Header>

        {items.slice(from, to).map((item, index) => (
          <DataTable.Row key={index}>
            {Object.values(item).map((value, i) => (
              <DataTable.Cell key={i} style={styles.cell} >
                {value}
              </DataTable.Cell>
            ))}
          </DataTable.Row>
        ))}

        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(items.length / itemsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${items.length}`}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={itemsPerPage}
          onItemsPerPageChange={setItemsPerPage}
          showFastPaginationControls
          selectPageDropdownLabel={'Rows per page'}
        />
      </DataTable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  table: { flex: 1 },
  cell: { flexBasis: 100, flexGrow: 1, justifyContent: 'center' },
});

export default TableComponent;
