import React, { ReactNode } from 'react'
import FinanceList from 'src/components/finance/List'
import Layout from 'src/layouts/Layout'


function Finance() {
    return (
        <FinanceList />
    )
}
Finance.getLayout = (page: ReactNode) => <Layout title='Finance Listing'>{page}</Layout>

export default Finance