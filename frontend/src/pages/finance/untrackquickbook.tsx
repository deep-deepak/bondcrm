import React, { ReactNode } from 'react'
import CashFlowReportList from 'src/components/finance/CashFlowReport';
import UntrackQuickBookCustomersList from 'src/components/finance/UntrackQuickBook';
import Layout from 'src/layouts/Layout'


function UntrackQuickBooks() {
    return (
        <UntrackQuickBookCustomersList />
    )
}
UntrackQuickBooks.getLayout = (page: ReactNode) => <Layout title='Untracked QuickBooks Customers'>{page}</Layout>

export default UntrackQuickBooks