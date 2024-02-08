import React, { ReactNode } from 'react'
import QuickBookReportsList from 'src/components/finance/QuickBookReports'
import Layout from 'src/layouts/Layout'


function QuickBookReports() {
    return (
        <QuickBookReportsList />
    )
}
QuickBookReports.getLayout = (page: ReactNode) => <Layout title=''>{page}</Layout>

export default QuickBookReports