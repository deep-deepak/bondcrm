import React, { ReactNode } from 'react'
import ReportList from 'src/components/report/Report'
import Layout from 'src/layouts/Layout'


function Reports() {
    return (
        <ReportList />
    )
}
Reports.getLayout = (page: ReactNode) => <Layout title='Reports Listing'>{page}</Layout>

export default Reports