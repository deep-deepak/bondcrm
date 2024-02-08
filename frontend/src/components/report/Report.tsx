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

const ReportList = () => {
  // ** States
  const [options, setOptions] = useState<OptionsType>(defaultOptions)
  const [sort, setSort] = useState<SortType>('asc')
  const [searchValue, setSearchValue] = useState<string>('')
  const [sortColumn, setSortColumn] = useState<string>('full_name')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 25 })

  
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
          <Grid item xs={12} sm={8}>
            <MultiSelect
              name='job_status'
              label='Select The Report Category'
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

        <Typography variant='h4' sx={{textAlign:"center",height:'100%'}}>Choose Filters For Get Report</Typography>
       
      </CardContent>
    </Card>
  )
}

export default ReportList
