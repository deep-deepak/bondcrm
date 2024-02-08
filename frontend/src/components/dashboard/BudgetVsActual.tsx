import { MouseEvent, useState } from 'react'
// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

// ** Icons Imports
import Icon from 'src/@core/components/icon'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import { getYears } from 'src/helpers'

// ** Util Import
import Link from "next/link"
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
import { Button, Grid } from '@mui/material'

const series = [32, 41, 41]

const lineSeries = [
  { name: 'Last Month', data: [20, 10, 30, 16, 24, 5, 30, 23, 28, 5, 30] },
  { name: 'This Month', data: [50, 40, 60, 46, 54, 35, 70, 53, 58, 35, 60] }
]

const BudgetVsActual = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [budgetYear, setBudgetYear] = useState<number>(new Date().getFullYear())
  // ** Hook
  const theme = useTheme()
  const { settings } = useSettings()
  const { direction } = settings


  const lineOptions: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      sparkline: { enabled: true }
    },
    stroke: {
      width: [1, 2],
      curve: 'smooth',
      dashArray: [5, 0]
    },
    colors: [theme.palette.divider, hexToRGBA(theme.palette.primary.main, 1)],
    grid: {
      padding: { top: -5 },
      yaxis: {
        lines: { show: false }
      }
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: {
      labels: { show: false }
    }
  }

  const options: ApexOptions = {
    colors: [
      theme.palette.success.main,
      theme.palette.warning.main,
      theme.palette.error.main
    ],
    stroke: { width: 0 },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    labels: ['Withing', 'Equal', 'Beyond'],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    grid: {
      padding: {
        top: -22,
        bottom: -18
      }
    },
    plotOptions: {
      pie: {
        customScale: 0.8,
        expandOnClick: false,
        donut: {
          size: '73%',
          labels: {
            show: true,
            name: {
              offsetY: 22,
              color: theme.palette.text.secondary,
              fontFamily: theme.typography.fontFamily
            },
            value: {
              offsetY: -17,
              fontWeight: 500,
              fontSize: '1.75rem',
              formatter: val => `${val}`,
              color: theme.palette.text.primary,
              fontFamily: theme.typography.fontFamily
            },
            total: {
              show: true,
              label: 'Total',
              fontSize: '1.1rem',
              color: theme.palette.text.secondary,
              fontFamily: theme.typography.fontFamily
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        options: {
          chart: { width: 200, height: 256 }
        }
      },
      {
        breakpoint: theme.breakpoints.values.md,
        options: {
          chart: { width: 150, height: 200 }
        }
      }
    ]
  }

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleSelect = (e: any) => {
    setBudgetYear(parseInt(e.target.innerText || budgetYear.toString()))
    handleClose()
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Card>
      <Grid container gap={0}>
        <Grid item xs={12} md={8}>
          <Link href="#" style={{ textDecoration: "none" }}>
            <CardContent>
              <Box sx={{ gap: 2, display: 'flex', alignItems: 'stretch', justifyContent: 'space-between' }}>
                <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <Typography variant='h6' sx={{ mb: 0.5 }}>
                      Budget Vs Actual
                    </Typography>
                    <Typography variant='body2'>Monthly Report</Typography>
                  </div>
                  <div>
                    <Typography variant='h5' sx={{ mb: 0.5 }}>
                      114
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'success.main' } }}>
                      <Icon icon='tabler:chevron-up' fontSize='1.25rem' />
                      <Typography sx={{ fontWeight: 500, color: 'success.main' }}>15.8%</Typography>
                    </Box>
                  </div>
                </Box>
                <Link href="###" style={{ textDecoration: "none" }}>
                  <ReactApexcharts type='donut' width={150} height={179} series={series} options={options} />
                </Link>
              </Box>
            </CardContent>
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Link href="#" target='_blank' style={{ textDecoration: "none" }}>
            <CardContent
              sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <Button
                size='small'
                variant='outlined'
                aria-haspopup='true'
                onClick={handleClick}
                sx={{ mb: 9, '& svg': { ml: 0.5 } }}
              >
                {budgetYear}
                <Icon fontSize='1rem' icon='tabler:chevron-down' />
              </Button>
              <Menu
                keepMounted
                anchorEl={anchorEl}
                onClose={handleClose}
                open={Boolean(anchorEl)}
                anchorOrigin={{ vertical: 'bottom', horizontal: direction === 'ltr' ? 'right' : 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: direction === 'ltr' ? 'right' : 'left' }}
              >
                {getYears()
                  .reverse()
                  .map((year: number) => (
                    <MenuItem key={year} onClick={handleSelect}>
                      {year}
                    </MenuItem>
                  ))}
              </Menu>
              <Typography variant='h5'>$25,825</Typography>
              <Box
                sx={{ mb: 8, gap: 1, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}
              >
                <Typography sx={{ fontWeight: 500 }}>Budget:</Typography>
                <Typography sx={{ color: 'text.secondary' }}>56,800</Typography>
              </Box>
              <ReactApexcharts type='line' height={40} series={lineSeries} options={lineOptions} />
            </CardContent>
          </Link>
        </Grid>
      </Grid>
    </Card>
  )
}

export default BudgetVsActual
