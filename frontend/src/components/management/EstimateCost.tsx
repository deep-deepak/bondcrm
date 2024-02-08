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
import { getEstimates } from 'src/services/estimates';
import DateRangePicker from '../miscellaneous/DateRangePicker'

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
    field: 'EST #',
    minWidth: 130,
    headerName: 'EST #',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'Customer Name',
    minWidth: 130,
    headerName: 'Customer Name',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'Project Manager',
    minWidth: 130,
    headerName: 'Project Manager',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'Branch',
    minWidth: 130,
    headerName: 'Branch',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'Gas Amount',
    minWidth: 130,
    headerName: 'Gas Amount',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'Current Gas YTD',
    minWidth: 130,
    headerName: 'Current Gas YTD',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'Garbage Amount',
    minWidth: 130,
    headerName: 'Garbage Amount',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'Current Garbage YTD',
    minWidth: 130,
    headerName: 'Current Garbage YTD',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'supplies amount',
    minWidth: 130,
    headerName: 'supplies amount',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'created on',
    minWidth: 130,
    headerName: 'created on',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'action',
    minWidth: 130,
    headerName: 'action',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.age}
      </Typography>
    )
  },
  
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

const EstimateCostList = () => {
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
        
          <Grid item xs={12} sm={6}>
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

          <Grid item xs={12} sm={6}>
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

export default EstimateCostList
