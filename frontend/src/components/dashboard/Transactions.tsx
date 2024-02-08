// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import OptionsMenu from 'src/@core/components/option-menu'
import Filter from './Filter'
import Link from 'next/link'

interface DataType {
  icon: string
  stats: string
  title: string
  color: ThemeColor
  link: string
}

const data: DataType[] = [
  {
    stats: '230k',
    title: 'Sales',
    color: 'primary',
    icon: 'tabler:chart-pie-2',
    link: '/estimates?status=paid,on_going,job_done'
  },
  {
    color: 'info',
    stats: '8.549k',
    title: 'Customers',
    icon: 'tabler:users',
    link: '/customers'
  },
  {
    color: 'error',
    stats: '1.423k',
    title: 'Estimates',
    icon: 'tabler:shopping-cart',
    link: '/estimates'
  },
  {
    stats: '$9745',
    color: 'success',
    title: 'Profit',
    icon: 'tabler:currency-dollar',
    link: '/estimates'
  }
]

const renderStats = () => {
  return data.map((sale: DataType, index: number) => (
    <Grid item xs={6} md={3} key={index}>
      <Link href={sale.link} target='_blank' style={{ textDecoration: "none" }}>
        <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
          <CustomAvatar skin='light' color={sale.color} sx={{ mr: 4, width: 42, height: 42 }}>
            <Icon icon={sale.icon} />
          </CustomAvatar>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h6'>{sale.stats}</Typography>
            <Typography variant='body2'>{sale.title}</Typography>
          </Box>
        </Box>
      </Link>
    </Grid>
  ))
}

const Transactions = () => {
  return (
    <Card>
      <CardHeader
        title='Transactions'
        sx={{ '& .MuiCardHeader-action': { m: 0, alignSelf: 'center' } }}
        action={
          <Filter />
        }
      />
      <CardContent>
        <Grid container spacing={6}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Transactions
