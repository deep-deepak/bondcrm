// ** React Imports
import { useEffect, useState, useCallback, ChangeEvent, ReactNode } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid, GridColDef, GridRenderCellParams, GridSortModel } from '@mui/x-data-grid'

// ** ThirdParty Components
import axios from 'axios'

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
        minWidth: 290,
        field: 'full_name',
        headerName: 'Name',
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
        type: 'date',
        minWidth: 120,
        headerName: 'Mobile',
        field: 'mobile',
        valueGetter: params => new Date(params.value),
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.start_date}
            </Typography>
        )
    },
    {
        flex: 0.175,
        minWidth: 110,
        field: 'address',
        headerName: 'Address',
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.salary}
            </Typography>
        )
    },
    {
        flex: 0.125,
        field: 'notes',
        minWidth: 80,
        headerName: 'Notes',
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.age}
            </Typography>
        )
    },
    {
        flex: 0.175,
        minWidth: 140,
        field: 'service',
        headerName: 'Service',
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
        field: 'branch',
        minWidth: 130,
        headerName: 'Branch',
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.age}
            </Typography>
        )
    },
    {
        flex: 0.175,
        field: 'lead_source',
        minWidth: 130,
        headerName: 'Lead Source',
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.age}
            </Typography>
        )
    },
    {
        flex: 0.175,
        field: 'source_name',
        minWidth: 130,
        headerName: 'Source Name',
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
        headerName: 'Job Status',
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.age}
            </Typography>
        )
    },
    {
        flex: 0.125,
        field: 'created_by',
        minWidth: 130,
        headerName: 'Created By',
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.age}
            </Typography>
        )
    },
    {
        flex: 0.125,
        field: 'created_at',
        minWidth: 130,
        headerName: 'Created At',
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant='body2' sx={{ color: 'text.primary' }}>
                {params.row.age}
            </Typography>
        )
    },
]

var currentYear = new Date().getFullYear();
let years: number[] = [];
for (let i = 2018; i <= currentYear; i++) {
    years.push(i);

}

const months: string[] = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    ;

const CustomerList = () => {
    // ** States
    const [total, setTotal] = useState<number>(0)
    const [sort, setSort] = useState<SortType>('asc')
    const [rows, setRows] = useState<DataGridRowType[]>([])
    const [searchValue, setSearchValue] = useState<string>('')
    const [sortColumn, setSortColumn] = useState<string>('full_name')
    const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 25 })

    function loadServerRows(currentPage: number, data: DataGridRowType[]) {
        return data.slice(currentPage * paginationModel.pageSize, (currentPage + 1) * paginationModel.pageSize)
    }

    const fetchTableData = useCallback(
        async (sort: SortType, q: string, column: string) => {
            await axios
                .get('/api/table/data', {
                    params: {
                        q,
                        sort,
                        column
                    }
                })
                .then(res => {
                    setTotal(res.data.total)
                    setRows(loadServerRows(paginationModel.page, res.data.data))
                })
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [paginationModel]
    )

    useEffect(() => {
        fetchTableData(sort, searchValue, sortColumn)
    }, [fetchTableData, searchValue, sort, sortColumn])

    const handleSortModel = (newModel: GridSortModel) => {
        if (newModel.length) {
            setSort(newModel[0].sort)
            setSortColumn(newModel[0].field)
            fetchTableData(newModel[0].sort, searchValue, newModel[0].field)
        } else {
            setSort('asc')
            setSortColumn('full_name')
        }
    }

    const handleSearch = (value: string) => {
        setSearchValue(value)
        fetchTableData(sort, value, sortColumn)
    }

    const onChange = (event: SelectChangeEvent<string>, child: ReactNode) => {
        console.log(event, child)
    }

    return (
        <Card>
            <CardContent>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={3}>
                        <FormControl fullWidth>
                            <InputLabel
                                htmlFor='branch'
                            >
                                Branch
                            </InputLabel>
                            <Select
                                label='Country'
                                onChange={onChange}
                                labelId='branch'
                                aria-describedby='branch'
                                placeholder='Select Branch'
                            >
                                <MenuItem value='UK'>UK</MenuItem>
                                <MenuItem value='USA'>USA</MenuItem>
                                <MenuItem value='Australia'>Australia</MenuItem>
                                <MenuItem value='Germany'>Germany</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl fullWidth>
                            <InputLabel
                                htmlFor='status'
                            >
                                Job Status
                            </InputLabel>
                            <Select
                                label='Country'
                                onChange={onChange}
                                labelId='status'
                                aria-describedby='status'
                                placeholder='Select Job Status'
                            >
                                <MenuItem value='UK'>UK</MenuItem>
                                <MenuItem value='USA'>USA</MenuItem>
                                <MenuItem value='Australia'>Australia</MenuItem>
                                <MenuItem value='Germany'>Germany</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl fullWidth>
                            <InputLabel
                                htmlFor='branch'
                            >
                                Branch
                            </InputLabel>
                            <Select
                                label='Country'
                                onChange={onChange}
                                labelId='branch'
                                aria-describedby='branch'
                                placeholder='Select Branch'
                            >
                                <MenuItem value='UK'>UK</MenuItem>
                                <MenuItem value='USA'>USA</MenuItem>
                                <MenuItem value='Australia'>Australia</MenuItem>
                                <MenuItem value='Germany'>Germany</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={0} sm={3}></Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl fullWidth>
                            <InputLabel
                                htmlFor='year'
                            >
                                Year
                            </InputLabel>
                            <Select
                                label='Year'
                                labelId='year'
                                onChange={onChange}
                                placeholder='Select Year'
                            >
                                {years.map((year: number) => (<MenuItem value={year}>{year}</MenuItem>))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl fullWidth>
                            <InputLabel
                                htmlFor='month'
                            >
                                Month
                            </InputLabel>
                            <Select
                                label='Month'
                                onChange={onChange}
                                labelId='month'
                                aria-describedby='month'
                                placeholder='Select Month'
                            >
                                {
                                    months.map((month: string, key: number) => (
                                        <MenuItem value={key + 1}>{month}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl fullWidth>
                            <InputLabel
                                htmlFor='service'
                            >
                                Service
                            </InputLabel>
                            <Select
                                label='Country'
                                onChange={onChange}
                                labelId='service'
                                aria-describedby='service'
                                placeholder='Select Service'
                            >
                                <MenuItem value='UK'>UK</MenuItem>
                                <MenuItem value='USA'>USA</MenuItem>
                                <MenuItem value='Australia'>Australia</MenuItem>
                                <MenuItem value='Germany'>Germany</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}></Grid>
                </Grid>
                <Divider component="div" sx={{ my: 4 }} />
                <DataGrid
                    autoHeight
                    pagination
                    rows={rows}
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

export default CustomerList
