// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import GeneratedLeads from './GeneratedLeads'
import CardStatsVertical from 'src/@core/components/card-statistics/card-stats-vertical';
import Link from 'next/link'


const GeneratedLeadsAndClosingRate = () => {

  return (
    <Card>
      <Grid container gap={0}>
        <Grid item xs={12} md={7}>
          <GeneratedLeads />
        </Grid>

        <Grid item xs={12} md={5}>
          <Link href="/reports?category=Management&sub_category=Inspection_Booked_Report" target='_blank' style={{ textDecoration: "none" }}>
            <CardStatsVertical
              stats='24.67k'
              chipText='+25.2%'
              avatarColor='info'
              chipColor='default'
              title='Total Inspection'
              subtitle='Last week'
              avatarIcon='tabler:chart-bar'
            />
          </Link>
        </Grid>
      </Grid>
    </Card>
  )
}

export default GeneratedLeadsAndClosingRate
