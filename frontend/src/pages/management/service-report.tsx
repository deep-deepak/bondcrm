import React, { ReactNode } from 'react'
import ManagementServiceReportList from 'src/components/management/Service';
import Layout from 'src/layouts/Layout'


function ManagementServiceReport() {
    return (
        <ManagementServiceReportList />
    )
}
ManagementServiceReport.getLayout = (page: ReactNode) => <Layout title='Service Report'>{page}</Layout>

export default ManagementServiceReport