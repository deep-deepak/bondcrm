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
      field: 'Name',
      minWidth: 130,
      headerName: 'Name',
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.age}
        </Typography>
      )
    },
    {
      flex: 0.125,
      field: 'Website',
      minWidth: 130,
      headerName: 'Website',
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.age}
        </Typography>
      )
    },
    {
      flex: 0.125,
      field: 'Occupation',
      minWidth: 130,
      headerName: 'Occupation',
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.age}
        </Typography>
      )
    },
    {
      flex: 0.125,
      field: 'PIP',
      minWidth: 130,
      headerName: 'PIP',
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.age}
        </Typography>
      )
    },
    {
      flex: 0.125,
      field: 'Email',
      minWidth: 130,
      headerName: 'Email',
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.age}
        </Typography>
      )
    },
    {
      flex: 0.125,
      field: 'Phone',
      minWidth: 130,
      headerName: 'Phone',
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.age}
        </Typography>
      )
    },
    {
      flex: 0.125,
      field: 'Representative',
      minWidth: 130,
      headerName: 'Representative',
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.age}
        </Typography>
      )
    },
    {
      flex: 0.125,
      field: 'Last Intraction',
      minWidth: 130,
      headerName: 'Last Intraction',
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.age}
        </Typography>
      )
    },{
      flex: 0.125,
      field: 'Notes',
      minWidth: 130,
      headerName: 'Notes',
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.age}
        </Typography>
      )
    },
    {
      flex: 0.125,
      field: 'Neglect',
      minWidth: 130,
      headerName: 'Neglect',
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.age}
        </Typography>
      )
    },
    {
      flex: 0.125,
      field: 'No. Of Leads',
      minWidth: 130,
      headerName: 'No. Of Leads',
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.age}
        </Typography>
      )
    },
    {
      flex: 0.125,
      field: 'No. Of Estimates',
      minWidth: 130,
      headerName: 'No. Of Estimates',
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.age}
        </Typography>
      )
    },
    {
      flex: 0.125,
      field: 'Craeted At',
      minWidth: 130,
      headerName: 'Craeted At',
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.age}
        </Typography>
      )
    },
    {
        flex: 0.125,
        field: 'Action',
        minWidth: 130,
        headerName: 'Action',
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
    date_range: "",
    date_type: "",
    job_status: [],
    service: [],
    branch: [],
    province: [],
    representative: [],
    year: [new Date().getFullYear().toString()],
    invoice_type: "",
    inspection_type: ""
}

const NetworkList = () => {
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
        setOptions((prev: OptionsType) => ({ ...prev, [name]: value }));
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

    const { isLoading, isError, error, data: estimates = [], isFetching, isPreviousData, } = useQuery(['estimates', estimateQueryOptions], () => getEstimates(estimateQueryOptions))
    const { data: branches = [] } = useQuery({ queryKey: ['branches'], queryFn: getBranches })
    const { data: provinces = [] } = useQuery({ queryKey: ['provinces'], queryFn: getProvinces })
    const { data: users = [] } = useQuery({ queryKey: ['users'], queryFn: getUsers })
    const { data: statuses = [] } = useQuery({ queryKey: ['statuses'], queryFn: getAllStatus })
    const { data: services = [] } = useQuery({ queryKey: ['services'], queryFn: getServices })

    return (
        <Card>
            <CardContent>
            <Link href='/networks/create'>
          <Button
            variant='outlined'
            startIcon={<AddIcon />}
            className='add_new_btn'
          >
            Add New
          </Button>
          </Link>
                <Grid container spacing={5}>
                <Grid item xs={12} sm={4}>
                        <MultiSelect
                            name="job_status"
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
                        <FormControl fullWidth>
                            <InputLabel
                                htmlFor='date-type'
                            >
                                Select Neglect
                            </InputLabel>
                            <Select
                                name="date_type"
                                value={options.date_type}
                                label='Date type'
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
                            name="branch"
                            defaultValue={options.branch}
                            label='Select Branch'
                            onChange={onChange}
                            id='branch'
                            options={branches.map((branch: any) => {
                                return {
                                    value: branch.id,
                                    label: branch.name
                                }
                            })}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <MultiSelect
                            name="service"
                            label='Select Representatives'
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
                            name="province"
                            label='Select Network'
                            defaultValue={options.province}
                            onChange={onChange}
                            id='province'
                            options={provinces.map((province: any) => {
                                return {
                                    value: province.id,
                                    label: province.name
                                }
                            })}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <MultiSelect
                            name="representative"
                            defaultValue={options.representative}
                            label='Select Pipeline'
                            onChange={onChange}
                            id='project-manager'
                            options={users.map((user: any) => {
                                return {
                                    value: user.id,
                                    label: user.name
                                }
                            })}
                        />
                    </Grid>
                    
                   
                </Grid>
                <Divider component="div" sx={{ my: 4 }} />
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

export default NetworkList
