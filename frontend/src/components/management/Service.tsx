// ** React Imports
import { useEffect, useState, useCallback, ChangeEvent, ReactNode } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { DataGrid, GridColDef, GridRenderCellParams, GridSortModel } from '@mui/x-data-grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** ThirdParty Components
import axios from 'src/utils/axios'
import AddIcon from '@mui/icons-material/Add'
// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'
import ServerSideToolbar from 'src/views/table/data-grid/ServerSideToolbar'

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'
import { DataGridRowType } from 'src/@fake-db/types'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'
import { CardContent, Divider, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { getYears } from 'src/helpers'
import { useQuery } from '@tanstack/react-query'
import { getBranches } from 'src/services/branch'
import { getProvinces } from 'src/services/province'
import { getAllStatus } from 'src/services/status'
import { getServices } from 'src/services/service'
import { getUsers } from 'src/services/users'
import MultiSelect from '../miscellaneous/MultiSelect'
import { getEstimates } from 'src/services/estimates'
import Link from 'next/link'

interface StatusObj {
  [key: number]: {
    title: string
    color: ThemeColor
  }
}

type SortType = 'asc' | 'desc' | undefined | null

// ** renders client column
const renderClient = (params: GridRenderCellParams) => {
  const { row } = params
  const stateNum = Math.floor(Math.random() * 6)
  const states = ['success', 'error', 'warning', 'info', 'primary', 'secondary']
  const color = states[stateNum]

  if (row.avatar.length) {
    return <CustomAvatar src={`/images/avatars/${row.avatar}`} sx={{ mr: 3, width: '1.875rem', height: '1.875rem' }} />
  } else {
    return (
      <CustomAvatar
        skin='light'
        color={color as ThemeColor}
        sx={{ mr: 3, fontSize: '.8rem', width: '1.875rem', height: '1.875rem' }}
      >
        {getInitials(row.full_name ? row.full_name : 'John Doe')}
      </CustomAvatar>
    )
  }
}

const statusObj: StatusObj = {
  1: { title: 'current', color: 'primary' },
  2: { title: 'professional', color: 'success' },
  3: { title: 'rejected', color: 'error' },
  4: { title: 'resigned', color: 'warning' },
  5: { title: 'applied', color: 'info' }
}

const columns: GridColDef[] = [
  {
    flex: 0.125,
    field: 'Service',
    minWidth: 130,
    headerName: 'Service',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'Gross',
    minWidth: 130,
    headerName: 'Gross',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'Net Sale',
    minWidth: 130,
    headerName: 'Net Sale',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'QBO Profit & Loss',
    minWidth: 130,
    headerName: 'QBO Profit & Loss',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'Expected Budget',
    minWidth: 130,
    headerName: 'Expected Budget',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'Total cost',
    minWidth: 130,
    headerName: 'Total cost',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'Net Profit',
    minWidth: 130,
    headerName: 'Net Profit',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'Cog',
    minWidth: 130,
    headerName: 'Cog',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'Labour Cost',
    minWidth: 130,
    headerName: 'Labour Cost',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'SUPPLIES',
    minWidth: 130,
    headerName: 'SUPPLIES',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'PO Amount',
    minWidth: 130,
    headerName: 'PO Amount',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'No Of Est',
    minWidth: 130,
    headerName: 'No Of Est',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'Jobs',
    minWidth: 130,
    headerName: 'Jobs',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'Avg job',
    minWidth: 130,
    headerName: 'Avg job',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'Closing Rate',
    minWidth: 130,
    headerName: 'Closing Rate',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  }
]

type OptionsType = {
  date_range: string
  date_type: string
  job_status: string[]
  service: string[]
  branch: string[]
  province: string[]
  representative: string[]
  year: string[]
  invoice_type: string
  inspection_type: string
}

const defaultOptions: OptionsType = {
  date_range: '',
  date_type: '',
  job_status: [],
  service: [],
  branch: [],
  province: [],
  representative: [],
  year: [new Date().getFullYear().toString()],
  invoice_type: '',
  inspection_type: ''
}

const ManagementServiceReportList = () => {
  // ** States
  const [options, setOptions] = useState<OptionsType>(defaultOptions)
  const [total, setTotal] = useState<number>(0)
  const [sort, setSort] = useState<SortType>('asc')
  const [searchValue, setSearchValue] = useState<string>('')
  const [sortColumn, setSortColumn] = useState<string>('full_name')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 25 })

  const handleSortModel = (newModel: GridSortModel) => {
    if (newModel.length) {
      setSort(newModel[0].sort)
      setSortColumn(newModel[0].field)
    } else {
      setSort('asc')
      setSortColumn('full_name')
    }
  }

  const handleSearch = (value: string) => {
    setSearchValue(value)
  }

  const handleChange = (event: SelectChangeEvent<string>) => {
    console.log(event)
  }

  const onChange = (name: string, value: string[]) => {
    setOptions((prev: OptionsType) => ({ ...prev, [name]: value }))
    // setOptions(prevOptions => ({...prevOptions, }))
  }

  let estimateQueryOptions: any = {
    date_range: options.date_range,
    date_type: options.date_type,
    job_status: options.job_status,
    service: options.service,
    branch: options.branch,
    province: options.province,
    representative: options.representative,
    year: options.year,
    invoice_type: options.invoice_type,
    inspection_type: options.inspection_type,
    start: paginationModel.page * paginationModel.pageSize,
    limit: paginationModel.pageSize,
    q: searchValue,
    sort: {
      type: sort,
      column: sortColumn
    }
  }

  const {
    isLoading,
    isError,
    error,
    data: estimates = [],
    isFetching,
    isPreviousData
  } = useQuery(['estimates', estimateQueryOptions], () => getEstimates(estimateQueryOptions))
  const { data: branches = [] } = useQuery({ queryKey: ['branches'], queryFn: getBranches })
  const { data: provinces = [] } = useQuery({ queryKey: ['provinces'], queryFn: getProvinces })
  const { data: users = [] } = useQuery({ queryKey: ['users'], queryFn: getUsers })
  const { data: statuses = [] } = useQuery({ queryKey: ['statuses'], queryFn: getAllStatus })
  const { data: services = [] } = useQuery({ queryKey: ['services'], queryFn: getServices })

  return (
    <Card>
      <CardContent>
        <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
            <MultiSelect
              name='job_status'
              label='Select Year'
              defaultValue={options.job_status}
              onChange={onChange}
              id='job-status'
              options={statuses.map((status: any, key: number) => {
                return {
                  value: status.id,
                  label: status.name
                }
              })}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <MultiSelect
              name='job_status'
              label='Select Month'
              defaultValue={options.job_status}
              onChange={onChange}
              id='job-status'
              options={statuses.map((status: any, key: number) => {
                return {
                  value: status.id,
                  label: status.name
                }
              })}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <MultiSelect
              name='job_status'
              label='Select Branch'
              defaultValue={options.job_status}
              onChange={onChange}
              id='job-status'
              options={statuses.map((status: any, key: number) => {
                return {
                  value: status.id,
                  label: status.name
                }
              })}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <MultiSelect
              name='job_status'
              label='Select Service'
              defaultValue={options.job_status}
              onChange={onChange}
              id='job-status'
              options={statuses.map((status: any, key: number) => {
                return {
                  value: status.id,
                  label: status.name
                }
              })}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <MultiSelect
              name='job_status'
              label='Select Status'
              defaultValue={options.job_status}
              onChange={onChange}
              id='job-status'
              options={statuses.map((status: any, key: number) => {
                return {
                  value: status.id,
                  label: status.name
                }
              })}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <MultiSelect
              name='job_status'
              label='Select Representative'
              defaultValue={options.job_status}
              onChange={onChange}
              id='job-status'
              options={statuses.map((status: any, key: number) => {
                return {
                  value: status.id,
                  label: status.name
                }
              })}
            />
          </Grid>
        </Grid>
        <Divider component='div' sx={{ my: 4 }} />
        <DataGrid
          autoHeight
          pagination
          rows={estimates}
          rowCount={total}
          columns={columns}
          checkboxSelection
          sortingMode='server'
          paginationMode='server'
          pageSizeOptions={[7, 10, 25, 50]}
          paginationModel={paginationModel}
          onSortModelChange={handleSortModel}
          slots={{ toolbar: ServerSideToolbar }}
          onPaginationModelChange={setPaginationModel}
          slotProps={{
            baseButton: {
              variant: 'outlined'
            },
            toolbar: {
              value: searchValue,
              clearSearch: () => handleSearch(''),
              onChange: (event: ChangeEvent<HTMLInputElement>) => handleSearch(event.target.value)
            }
          }}
        />
      </CardContent>
    </Card>
  )
}

export default ManagementServiceReportList
