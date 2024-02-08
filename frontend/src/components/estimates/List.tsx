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
        flex: 0.25,
        minWidth: 100,
        field: 'sno',
        headerName: 'ID',
        renderCell: (params: GridRenderCellParams) => {
            return (
                <Typography variant='body2' sx={{ color: 'text.primary' }}>
                    {params.value + 100000}
                </Typography>
            )
        }
    },
    {
        flex: 0.25,
        minWidth: 250,
        field: 'full_name',
        headerName: 'Customer Name',
        renderCell: (params: GridRenderCellParams) => {
            const { row } = params

            return (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {renderClient(params)}
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
                            {row.full_name}
                        </Typography>
                        <Typography noWrap variant='caption'>
                            {row.email}
                        </Typography>
                    </Box>
                </Box>
            )
        }
    },
    {
        flex: 0.175,
        type: 'claim',
        minWidth: 120,
        headerName: 'Claim #',
        field: 'claim',
        valueGetter: params => new Date(params.value),
        renderCell: (params: GridRenderCellParams) => {
            return (
                <Typography variant='body2' sx={{ color: 'text.primary' }}>
                    #{params.row.id + 30000}
                </Typography>
            )
        }
    },
    {
        flex: 0.175,
        minWidth: 250,
        field: 'pm',
        headerName: 'PM',
        renderCell: (params: GridRenderCellParams) => {
            const { row } = params

            return (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {renderClient(params)}
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
                            {row.full_name}
                        </Typography>
                        <Typography noWrap variant='caption'>
                            {row.email}
                        </Typography>
                    </Box>
                </Box>
            )
        }
    },
    {
        flex: 0.125,
        field: 'branch',
        minWidth: 80,
        headerName: 'Branch',
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.age}
            </Typography>
        )
    },
    {
        flex: 0.175,
        minWidth: 140,
        field: 'address',
        headerName: 'Address',
        renderCell: (params: GridRenderCellParams) => {
            const status = statusObj[params.row.status]

            return (
                <CustomChip
                    rounded
                    size='small'
                    skin='light'
                    color={status.color}
                    label={status.title}
                    sx={{ '& .MuiChip-label': { textTransform: 'capitalize' } }}
                />
            )
        }
    },
    {
        flex: 0.175,
        field: 'mobile',
        minWidth: 130,
        headerName: 'Mobile',
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.age}
            </Typography>
        )
    },
    {
        flex: 0.175,
        field: 'status',
        minWidth: 130,
        headerName: 'Status',
        renderCell: (params: GridRenderCellParams) => {
            const status = statusObj[params.row.status]

            return (
                <CustomChip
                    rounded
                    size='small'
                    skin='light'
                    color={status.color}
                    label={status.title}
                    sx={{ '& .MuiChip-label': { textTransform: 'capitalize' } }}
                />
            )
        }
    },
    {
        flex: 0.175,
        field: 'service',
        minWidth: 130,
        headerName: 'Service',
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.full_name}
            </Typography>
        )
    },
    {
        flex: 0.125,
        field: 'customer',
        minWidth: 160,
        headerName: 'Customer Notes',
        renderCell: (params: GridRenderCellParams) => (
            <Button variant='contained' size='small' endIcon={<Icon icon='tabler:notebook' />}>
                Show Notes
            </Button>
        )
    },
    {
        flex: 0.125,
        field: 'updated_at',
        minWidth: 130,
        headerName: 'Last Updated',
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.age}
            </Typography>
        )
    },
    {
        flex: 0.125,
        field: 'total',
        minWidth: 130,
        headerName: 'Total Amount',
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.age}
            </Typography>
        )
    },
    {
        flex: 0.125,
        field: 'net_amount',
        minWidth: 130,
        headerName: 'Net Amount',
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.age}
            </Typography>
        )
    },
    {
        flex: 0.125,
        field: 'net_paid',
        minWidth: 130,
        headerName: 'Net Paid',
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.age}
            </Typography>
        )
    },
    {
        flex: 0.125,
        field: 'discount',
        minWidth: 130,
        headerName: 'Discount',
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.age}
            </Typography>
        )
    },
    {
        flex: 0.125,
        field: 'balance',
        minWidth: 130,
        headerName: 'Balance',
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.age}
            </Typography>
        )
    },
    {
        flex: 0.125,
        field: 'po_amount',
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
        field: 'date',
        minWidth: 130,
        headerName: 'Estimate Date',
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.age}
            </Typography>
        )
    },
    {
        flex: 0.125,
        field: 'total_cost',
        minWidth: 130,
        headerName: 'Total Cost',
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.age}
            </Typography>
        )
    },
    {
        flex: 0.125,
        field: 'total_hours',
        minWidth: 130,
        headerName: 'Total Hours',
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.age}
            </Typography>
        )
    },
    {
        flex: 0.125,
        field: 'profit_amount',
        minWidth: 130,
        headerName: 'Profit Amount',
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.age}
            </Typography>
        )
    },
    {
        flex: 0.125,
        field: 'profit_percentage',
        minWidth: 130,
        headerName: 'Profit %',
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.age}
            </Typography>
        )
    },
    {
        flex: 0.125,
        field: 'inspection',
        minWidth: 130,
        headerName: 'Inspection',
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.age}
            </Typography>
        )
    },
    {
        flex: 0.125,
        field: 'job_start',
        minWidth: 130,
        headerName: 'Job Start',
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.age}
            </Typography>
        )
    },
    {
        flex: 0.125,
        field: 'invoice',
        minWidth: 130,
        headerName: 'Invoice',
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.age}
            </Typography>
        )
    },
    {
        flex: 0.125,
        field: 'assigned_to_finance',
        minWidth: 130,
        headerName: 'Assigned To Finance',
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.age}
            </Typography>
        )
    },
    {
        flex: 0.125,
        field: 'warranty_certificate',
        minWidth: 130,
        headerName: 'Warranty Certificate',
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.age}
            </Typography>
        )
    },
];

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

const EstimateList = () => {
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
            <Link href='/estimates/add'>
          <Button
            variant='outlined'
            startIcon={<AddIcon />}
            className='add_new_btn'
          >
            Add New
          </Button>
          </Link>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={3}>
                        <FormControl fullWidth>
                            <InputLabel
                                htmlFor='date-range'
                            >
                                Date Range
                            </InputLabel>
                            <Select
                                name="date_range"
                                value={options.date_range}
                                label='Date Range'
                                onChange={handleChange}
                                labelId='date-range'
                                aria-describedby='date-range'
                            >
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl fullWidth>
                            <InputLabel
                                htmlFor='date-type'
                            >
                                Date Type
                            </InputLabel>
                            <Select
                                name="date_type"
                                value={options.date_type}
                                label='Date type'
                                onChange={handleChange}
                                labelId='date-type'
                                aria-describedby='date-type'
                            >
                                <MenuItem value={1}>Created Date</MenuItem>
                                <MenuItem value={2}>Updated Date</MenuItem>
                                <MenuItem value={3}>Job Start Date</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <MultiSelect
                            name="job_status"
                            label='Job Status'
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
                    <Grid item xs={12} sm={3}>
                        <MultiSelect
                            name="service"
                            label='Service'
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
                    <Grid item xs={12} sm={3}>
                        <MultiSelect
                            name="branch"
                            defaultValue={options.branch}
                            label='Branch'
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
                    <Grid item xs={12} sm={3}>
                        <MultiSelect
                            name="province"
                            label='Province'
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
                    <Grid item xs={12} sm={3}>
                        <MultiSelect
                            name="representative"
                            defaultValue={options.representative}
                            label='Project Manager'
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
                    <Grid item xs={12} sm={3}>
                        <MultiSelect
                            name="year"
                            defaultValue={options.year}
                            label='Year'
                            onChange={onChange}
                            id='year'
                            options={getYears().map((year: number) => {
                                return {
                                    value: year,
                                    label: year.toString()
                                }
                            })}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl fullWidth>
                            <InputLabel
                                htmlFor='invoice-type'
                            >
                                Invoice Type
                            </InputLabel>
                            <Select
                                name="invoice_type"
                                value={options.invoice_type}
                                label='Invoice Type'
                                onChange={handleChange}
                                labelId='invoice-type'
                                aria-describedby='invoice-type'
                            >
                                <MenuItem value="yes">Yes</MenuItem>
                                <MenuItem value="No">No</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl fullWidth>
                            <InputLabel
                                htmlFor='inspection-type'
                            >
                                Inspection Type
                            </InputLabel>
                            <Select
                                name="inspection_type"
                                value={options.inspection_type}
                                label='Inspection Type'
                                onChange={handleChange}
                                labelId='inspection-type'
                                aria-describedby='inspection-type'
                            >
                                <MenuItem value="yes">Yes</MenuItem>
                                <MenuItem value="no">No</MenuItem>
                            </Select>
                        </FormControl>
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

export default EstimateList
