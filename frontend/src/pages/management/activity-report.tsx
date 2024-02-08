import React, { ReactNode } from 'react'
import ManagementActivitiesReport from 'src/components/management/Activities';
import Layout from 'src/layouts/Layout'


function ActivitiesReport() {
    return (
        <ManagementActivitiesReport />
    )
}
ActivitiesReport.getLayout = (page: ReactNode) => <Layout title='Report Activity'>{page}</Layout>

export default ActivitiesReport