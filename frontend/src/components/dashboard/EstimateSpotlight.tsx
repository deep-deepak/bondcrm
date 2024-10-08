// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import Link from 'next/link'
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const series = [80, 64]

const EstimateSpotlight = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    colors: [theme.palette.error.main, hexToRGBA(theme.palette.error.main, 0.8)],
    stroke: { width: 0 },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    labels: ['< 20% of W-Budget', '> 75% of W-Budget'],
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

  return (
    <Card>
      <Link href='/management/estimate-spotlights' target='_blank' style={{ textDecoration: 'none' }}>
        <CardContent>
          <Box sx={{ gap: 2, display: 'flex', alignItems: 'stretch', justifyContent: 'space-between' }}>
            <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <Typography variant='h6' sx={{ mb: 0.5 }}>
                  Estimate Spotlight
                </Typography>
                <Typography variant='body2'>Monthly Report</Typography>
              </div>
              <div>
                <Typography variant='h5' sx={{ mb: 0.5 }}>
                  144
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'success.main' } }}>
                  <Icon icon='tabler:chevron-up' fontSize='1.25rem' />
                  <Typography sx={{ fontWeight: 500, color: 'success.main' }}>15.8%</Typography>
                </Box>
              </div>
            </Box>
            <Link href='###' style={{ textDecoration: 'none' }}>
              <ReactApexcharts type='donut' width={150} height={179} series={series} options={options} />
            </Link>
          </Box>
        </CardContent>
      </Link>
    </Card>
  )
}

export default EstimateSpotlight
