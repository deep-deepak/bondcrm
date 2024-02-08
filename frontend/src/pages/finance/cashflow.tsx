import React, { ReactNode } from 'react'
import CashFlowReportList from 'src/components/finance/CashFlowReport';
import Layout from 'src/layouts/Layout'


function CashFlowReport() {
    return (
        <CashFlowReportList />
    )
}
CashFlowReport.getLayout = (page: ReactNode) => <Layout title='Cash Flow Report'>{page}</Layout>

export default CashFlowReport