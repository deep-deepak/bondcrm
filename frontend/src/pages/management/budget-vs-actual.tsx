import React, { ReactNode } from 'react'
import BudgetVsActualList from 'src/components/management/BudgetVsActual';
import Layout from 'src/layouts/Layout'


function BudgetVsActual() {
    return (
        <BudgetVsActualList />
    )
}
BudgetVsActual.getLayout = (page: ReactNode) => <Layout title='Budget Vs Actual'>{page}</Layout>

export default BudgetVsActual