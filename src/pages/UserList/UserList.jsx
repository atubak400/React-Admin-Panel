import React from 'react'
import './userList.css'
import { DataGrid } from '@material-ui/data-grid'

function UserList() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img className='userListImg' src={params.row.Avatar} alt='' />
            {params.row.Username}
          </div>
        )
      },
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 150,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      editable: true,
    },

    {
      field: 'transaction',
      headerName: 'Transaction',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
  ]

  const rows = [
    {
      id: 1,
      Username: 'Robert De Niro',
      Avatar:
        'https://m.media-amazon.com/images/M/MV5BMjAwNDU3MzcyOV5BMl5BanBnXkFtZTcwMjc0MTIxMw@@._V1_UY209_CR9,0,140,209_AL_.jpg',
      email: 'rob@yahoo.com',
      status: 'active',
      transaction: '$123.00',
    },
    {
      id: 2,
      Username: 'Denzel Washington',
      Avatar:
        'https://m.media-amazon.com/images/M/MV5BMjE5NDU2Mzc3MV5BMl5BanBnXkFtZTcwNjAwNTE5OQ@@._V1_UY209_CR8,0,140,209_AL_.jpg',
      email: 'den@yahoo.com',
      status: 'active',
      transaction: '$123.00',
    },
    {
      id: 3,
      Username: 'Meryl Streep',
      Avatar:
        'https://m.media-amazon.com/images/M/MV5BMTU4Mjk5MDExOF5BMl5BanBnXkFtZTcwOTU1MTMyMw@@._V1_UY209_CR4,0,140,209_AL_.jpg',
      email: 'maryl@yahoo.com',
      status: 'active',
      transaction: '$123.00',
    },
    {
      id: 4,
      Username: 'Sidney Poitier',
      Avatar:
        'https://m.media-amazon.com/images/M/MV5BMTQ0OTE3MzQ2Nl5BMl5BanBnXkFtZTcwMDc2MDc1NA@@._V1_UX140_CR0,0,140,209_AL_.jpg',
      email: 'sid@yahoo.com',
      status: 'active',
      transaction: '$123.00',
    },
    {
      id: 5,
      Username: 'Leonardo DiCaprio',
      Avatar:
        'https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY209_CR7,0,140,209_AL_.jpg',
      email: 'leo@yahoo.com',
      status: 'active',
      transaction: '$123.00',
    },
    {
      id: 6,
      Username: 'Cate Blanchett',
      Avatar:
        'https://m.media-amazon.com/images/M/MV5BMTc1MDI0MDg1NV5BMl5BanBnXkFtZTgwMDM3OTAzMTE@._V1_UY209_CR2,0,140,209_AL_.jpg',
      email: 'cate@yahoo.com',
      status: 'active',
      transaction: '$123.00',
    },
    {
      id: 7,
      Username: 'Kate Winslet',
      Avatar:
        'https://m.media-amazon.com/images/M/MV5BODgzMzM2NTE0Ml5BMl5BanBnXkFtZTcwMTcyMTkyOQ@@._V1_UX140_CR0,0,140,209_AL_.jpg',
      email: 'kate@yahoo.com',
      status: 'active',
      transaction: '$123.00',
    },
    {
      id: 8,
      Username: 'Viola Davis',
      Avatar:
        'https://m.media-amazon.com/images/M/MV5BNzUxNjM4ODI1OV5BMl5BanBnXkFtZTgwNTEwNDE2OTE@._V1_UY209_CR15,0,140,209_AL_.jpg',
      email: 'viola@yahoo.com',
      status: 'active',
      transaction: '$123.00',
    },
    {
      id: 9,
      Username: 'Johnny Depp',
      Avatar:
        'https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_UY209_CR3,0,140,209_AL_.jpg',
      email: 'johnny@yahoo.com',
      status: 'active',
      transaction: '$123.00',
    },
    {
      id: 10,
      Username: 'Morgan Freeman',
      Avatar:
        'https://m.media-amazon.com/images/M/MV5BMTc0MDMyMzI2OF5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._V1_UX140_CR0,0,140,209_AL_.jpg',
      email: 'morgan@yahoo.com',
      status: 'active',
      transaction: '$123.00',
    },
  ]

  return (
    <div className='userList'>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />{' '}
    </div>
  )
}

export default UserList
