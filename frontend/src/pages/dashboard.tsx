// ** Next Import

// ** Styled Component
import BaseDashboard from 'src/components/dashboard'
import Filter from 'src/components/dashboard/Filter'
import Layout from 'src/layouts/Layout'

const Dashboard = () => {
    return (
        <Layout
            title='Dashboard'
            action={<Filter icon='filter' iconButtonProps={{ title: "Filter"}} />}
        >
            <BaseDashboard />
        </Layout>
    )
}

Dashboard.getLayout = Dashboard

export default Dashboard