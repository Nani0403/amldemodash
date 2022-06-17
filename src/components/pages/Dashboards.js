import React, { useState } from 'react';
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Button, Checkbox } from '@mui/material';
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import { Label } from '@mui/icons-material';
//import DeleteIcon from '@mui/icons-material/Delete';
//import EditIcon from '@mui/icons-material/Edit';
//import { textAlign } from '@mui/system';

const rows = [
  {
    id: 1,
    select: false,
  },
  { id: 2, select: false },
  { id: 3, select: false },
  { id: 4, select: false },
  { id: 5, select: false },
  { id: 6, select: false },
  { id: 7, select: false },
  { id: 8, select: false },
  { id: 9, select: false },
  { id: 10, select: false },
  { id: 11, select: false },
  { id: 12, select: false },
  { id: 13, select: false },
  { id: 14, select: false },
  { id: 15, select: false },
  { id: 16, select: false },
  { id: 17, select: false },
];
export default function DataTable1() {
  const [rowData, setRowData] = useState(rows);
  const columns = [
    { field: 'id', headerName: 'Sr.no', width: 25, align: 'center' },
    {
      field: 'Tagging Link',
      headerName: 'Tagging Link',
      width: 900,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'Lablling ID',
      headerName: 'Lablling ID',
      width: 250,
      editable: true,
      headerAlign: 'center',
      align: 'center',
      value: 'lableid',
      cells: () => {
        return (
          <label onPageChange={(e) => setLabel(e.target.value)} />
        );
      },
    },
    {
      field: 'Action',
      headerAlign: 'center',
      align: 'center',
      value: 'checkbx',
      renderCell: (data) => {
        return (
          <input
            className="ckk"
            onClick={() => handleClick(data.row)}
            type={'checkbox'}
            onPageChange={(e) => setCheck(e.target.checked)}
          />
        );
      },
    },
    {
      headerName: 'Job status',
      field: 'select',
      headerAlign: 'center',
      align: 'center',
      width: 100,
      value: 'status',
      renderCell: (data) => {
        return (
          <text
            onPageChange={(e) => setStatus(e.target.value)}
            style={{
              color: data.row.select === true ? 'green' : 'red',
            }}
          >
            {data.row.select === true ? 'Done' : 'Pending'}
          </text>
        );
      },
    },
  ];
  function handleData(e) {
    e.preventDefault();
    console.warn('all data', lableid, checkbx, status);
  }
  const [lableid, setLabel] = useState('');
  const [checkbx, setCheck] = useState('');
  const [status, setStatus] = useState('');
  const handleClick = (data) => {
    const newState = rowData.map((obj) =>
      obj.id === data.id ? { ...obj, select: !data.select } : obj
    );
    setRowData(newState);
  };
  return (
    <div
      style={{
        alignItems: 'center',
        height: '900px',
        width: '1600px',
        marginTop: '3%',
      }}
    >
      <h1>Soccer Detection</h1> 
      <DataGrid
        sx={{ m: 2 }}
        rows={rowData}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[100]}
        colsPerPageOptions={[5]}
        align="center"
      />
    </div>
  );
}