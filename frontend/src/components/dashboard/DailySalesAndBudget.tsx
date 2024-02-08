
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid, { GridProps } from '@mui/material/Grid'
import { styled } from '@mui/material/styles'


// ** Third Party Imports
import Link from 'next/link'

// ** Util Import
import CrmRevenueGrowth from 'src/views/dashboards/crm/CrmRevenueGrowth'
import ClosingRate from './ClosingRate'

const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  [theme.breakpoints.up('sm')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

const DailySalesAndBudget = () => {

  return (
    <Card>
      <Grid container gap={0}>
        <StyledGrid
          item
          sm={8}
          xs={12}
          sx={{
            '& .apexcharts-series[rel="1"]': { transform: 'translateY(-6px)' },
            '& .apexcharts-series[rel="2"]': { transform: 'translateY(-9px)' }
          }}
        >
          <CrmRevenueGrowth />
        </StyledGrid>

        <Grid item xs={12} md={4}>
          <Link href="/activity-report" target='_blank' style={{ textDecoration: "none" }}>
            <ClosingRate />
          </Link>
        </Grid>
      </Grid>
    </Card>
  )
}

export default DailySalesAndBudget
