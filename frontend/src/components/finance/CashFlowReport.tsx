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
import 'react-datepicker/dist/react-datepicker.css'

import DatePicker from 'react-datepicker'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

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
    field: 'estimate',
    minWidth: 130,
    headerName: 'estimate',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'po/claim #',
    minWidth: 130,
    headerName: 'po/claim #',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'PM',
    minWidth: 130,
    headerName: 'PM',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'customer name',
    minWidth: 130,
    headerName: 'customer name',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'collection responsibility',
    minWidth: 130,
    headerName: 'collection responsibility',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'collection status',
    minWidth: 130,
    headerName: 'collection status',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'customer notes',
    minWidth: 130,
    headerName: 'customer notes',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'service type',
    minWidth: 130,
    headerName: 'service type',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'status',
    minWidth: 130,
    headerName: 'status',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'expected collection',
    minWidth: 130,
    headerName: 'expected collection',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'target date',
    minWidth: 130,
    headerName: 'target date',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'target date history',
    minWidth: 130,
    headerName: 'target date history',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'net amount($)',
    minWidth: 130,
    headerName: 'net amount($)',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'expected net profit',
    minWidth: 130,
    headerName: 'expected net profit',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'invoice amount',
    minWidth: 130,
    headerName: 'invoice amount',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'bidget cost($)',
    minWidth: 130,
    headerName: 'bidget cost($)',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'actual cost($)',
    minWidth: 130,
    headerName: 'actual cost($)',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'net profit',
    minWidth: 130,
    headerName: 'net profit',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'net collected',
    minWidth: 130,
    headerName: 'net collected',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'Remaining balance',
    minWidth: 130,
    headerName: 'Remaining Balance',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'create date',
    minWidth: 130,
    headerName: 'create date',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'update date',
    minWidth: 130,
    headerName: 'update date',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'collection date',
    minWidth: 130,
    headerName: 'collection date',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'due date',
    minWidth: 130,
    headerName: 'due date',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'end date',
    minWidth: 130,
    headerName: 'end date',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'branch name',
    minWidth: 130,
    headerName: 'branch name',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'cash flow',
    minWidth: 130,
    headerName: 'cash flow',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'insurance',
    minWidth: 130,
    headerName: 'insurance',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },{
    flex: 0.125,
    field: 'insurance company',
    minWidth: 130,
    headerName: 'insurance company',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },{
    flex: 0.125,
    field: 'assigned to finance',
    minWidth: 130,
    headerName: 'assigned to finance',
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

const CashFlowReportList = () => {
  // ** States
  const [options, setOptions] = useState<OptionsType>(defaultOptions)
  const [total, setTotal] = useState<number>(0)
  const [sort, setSort] = useState<SortType>('asc')
  const [searchValue, setSearchValue] = useState<string>('')
  const [sortColumn, setSortColumn] = useState<string>('full_name')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 25 })
  const [selectedDate, setSelectedDate] = useState(null)

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
          <DatePickerWrapper >
            <DatePicker
              selected={selectedDate}
              onChange={(date:any) => setSelectedDate(date)}
              placeholderText="CashFlow by"
              filterDate={date => date.getDay() !== 6 && date.getDay() !== 0} // weekends cancel
              showYearDropdown // year show and scrolldown alos
              scrollableYearDropdown
              
            />
            </DatePickerWrapper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <MultiSelect
              name='job_status'
              label='Select Project Manager'
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
            <FormControl fullWidth>
              <InputLabel htmlFor='date-type'>Select Neglect</InputLabel>
              <Select
                name='date_type'
                value={options.date_type}
                label='Select Branch'
                onChange={handleChange}
                labelId='date-type'
                aria-describedby='date-type'
              >
                <MenuItem value={1}>yes</MenuItem>
                <MenuItem value={2}>no</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <MultiSelect
              name='service'
              label='Select Insurance'
              defaultValue={options.service}
              onChange={onChange}
              id='service'
              options={services.map((service: any, key: number) => {
                return {
                  value: service.id,
                  label: service.name
                }
              })}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <MultiSelect
              name='service'
              label='Select Status'
              defaultValue={options.service}
              onChange={onChange}
              id='service'
              options={services.map((service: any, key: number) => {
                return {
                  value: service.id,
                  label: service.name
                }
              })}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <MultiSelect
              name='service'
              label='Select Collection Status'
              defaultValue={options.service}
              onChange={onChange}
              id='service'
              options={services.map((service: any, key: number) => {
                return {
                  value: service.id,
                  label: service.name
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

export default CashFlowReportList
