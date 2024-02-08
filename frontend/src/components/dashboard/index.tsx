import { ReactNode, SyntheticEvent, useState } from 'react'
import dynamic from 'next/dynamic'

// ** MUI Import
import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import CardContent from '@mui/material/CardContent'

// ** Custom Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Transactions from './Transactions'
import LastTransactions from './LastTransactions'
import EarningReports from './EarningReports'
import LatestEstimate from './LatestEstimate'
import { useQuery } from '@tanstack/react-query'
import { getProvinces } from 'src/services/province'
import DailySalesAndBudget from './DailySalesAndBudget'
import WelcomeBack from './WelcomeBack'
import LatestTasks from './LatestTasks'
import { CardHeader } from '@mui/material'
import LatestCustomers from './LatestCustomers'
import GeneratedLeadsAndClosingRate from './GeneratedLeadsAndClosingRate'
import SupportTracker from './SupportTracker'
import BudgetVsActual from './BudgetVsActual'
import EstimateSpotlight from './EstimateSpotlight'
import Link from 'next/link'
import CardStatsVertical from 'src/@core/components/card-statistics/card-stats-vertical'
import CrmSalesWithRadarChart from 'src/views/dashboards/crm/CrmSalesWithRadarChart'
import CrmSalesWithAreaChart from 'src/views/dashboards/crm/CrmSalesWithAreaChart'

const MapComponent = dynamic(() => import('./Map'), { ssr: false })

type CardTabProps = {
  value: string
  label?: string
  content?: ReactNode
}

const Dashboard = () => {
  // ** State
  const [value, setValue] = useState<string>('1')

  const [options, setOptions] = useState<any>({
    customers_count: true,
    branches: true
  })

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  const { data: provinces = [] } = useQuery({
    queryKey: ['mapProvinces', options],
    queryFn: () => getProvinces()
  })

  const tabs = [
    {
      value: '1',
      label: 'Tasks',
      content: <LatestTasks />
    },
    {
      value: '2',
      label: 'Customers',
      content: <LatestCustomers />
    },
    {
      value: '3',
      label: 'Estimates',
      content: <LatestEstimate />
    },
    {
      value: '4',
      label: 'Transactions',
      content: <LastTransactions />
    }
  ]

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <WelcomeBack />
        </Grid>
        <Grid item xs={12} md={8}>
          <Transactions />
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <GeneratedLeadsAndClosingRate />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Card>
                <Grid container gap={0}>
                  <Grid item xs={12} md={7}>
                    <EstimateSpotlight />
                  </Grid>

                  <Grid item xs={12} md={5}>
                    <Link href="/estimates?status=paid,on_going,job_done" target='_blank' style={{ textDecoration: "none" }}>
                      <CardStatsVertical
                          stats='24.67k'
                          chipText='+25.2%'
                          avatarColor='info'
                          chipColor='default'
                          title='Total Jobs'
                          subtitle='Last week'
                          avatarIcon='tabler:file-description'
                        />
                    </Link>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <DailySalesAndBudget />
        </Grid>
        {/* <Grid item xs={12} md={3}>
          <CrmSalesWithAreaChart />
        </Grid> */}
        <Grid item xs={12} md={6}>
          <BudgetVsActual />
        </Grid>
        <Grid item xs={12} lg={6}>
          <EarningReports />
        </Grid>
        <Grid item xs={12} md={6}>
          <SupportTracker />
        </Grid>
        <Grid item xs={12} md={12}>
          <MapComponent provinces={provinces} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Card>
            <CardHeader title={`Latest ${tabs.find((tab: CardTabProps) => tab.value == value)?.label}`} />
            <TabContext value={value}>
              <TabList
                onChange={handleChange}
                aria-label='card navigation example'
                sx={{ '& .MuiTab-root': { py: 3.5 } }}
              >
                {tabs.map((tab: CardTabProps) => (
                  <Tab key={tab.value} value={tab.value} label={tab.label} />
                ))}
              </TabList>
              <CardContent>
                {tabs.map((tab: CardTabProps) => (
                  <TabPanel key={tab.value} value={tab.value} sx={{ p: 0 }}>
                    {tab.content}
                  </TabPanel>
                ))}
              </CardContent>
            </TabContext>
          </Card>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
