import React, { useState } from 'react'
import { Card, CardContent, Typography, Button, Grid } from '@mui/material'
import BalanceIcon from '@mui/icons-material/Balance'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import MultiSelect from '../miscellaneous/MultiSelect'

import { useQuery } from '@tanstack/react-query'
import { getBranches } from 'src/services/branch'
import { getProvinces } from 'src/services/province'
import { getAllStatus } from 'src/services/status'
import { getServices } from 'src/services/service'
import { getUsers } from 'src/services/users'
import AddEvent from './AddEvent'
import EstimateFilter from './Estimates'

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

export default function Calendar() {
  const { data: branches = [] } = useQuery({ queryKey: ['branches'], queryFn: getBranches })
  const { data: provinces = [] } = useQuery({ queryKey: ['provinces'], queryFn: getProvinces })
  const { data: users = [] } = useQuery({ queryKey: ['users'], queryFn: getUsers })
  const { data: statuses = [] } = useQuery({ queryKey: ['statuses'], queryFn: getAllStatus })
  const { data: services = [] } = useQuery({ queryKey: ['services'], queryFn: getServices })

  let condition = true;
  const [filterOpen, setFilterOpen] = useState(false)

  const handleOpenFilter = () => {
    setFilterOpen(!filterOpen);
  }



  return (
    <Card>
      <CardContent>
        <Typography>Schedular</Typography>
        <EstimateFilter />
        <Button variant='contained' startIcon={<FilterAltIcon />} onClick={handleOpenFilter}>
          Filters
        </Button>
        <Grid container spacing={5} className='main_sec'>
          {filterOpen && (
            <>
              <Grid item xs={12} sm={3}>
                <MultiSelect
                  name='job_status'
                  label='Select a Branch'
                  // defaultValue={options.job_status}
                  // onChange={onChange}
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
                  name='job_status'
                  label='Select Representative'
                  // defaultValue={options.job_status}
                  // onChange={onChange}
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
                  name='job_status'
                  label='Select Event Type'
                  // defaultValue={options.job_status}
                  // onChange={onChange}
                  id='job-status'
                  options={statuses.map((status: any, key: number) => {
                    return {
                      value: status.id,
                      label: status.name
                    }
                  })}
                />
              </Grid>
            </>
          )}
          <Grid item xs={12} sm={3} md={4}>
            <AddEvent />
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            Assingned Jobs
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            Task
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            Meetings
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            Inspection
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={9} md={9} className='main_calendar'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
