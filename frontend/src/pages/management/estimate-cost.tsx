import React, { ReactNode } from 'react'
import EstimateCostList from 'src/components/management/EstimateCost';
import Layout from 'src/layouts/Layout'


function EstimateCoast() {
    return (
        <EstimateCostList />
    )
}
EstimateCoast.getLayout = (page: ReactNode) => <Layout title='Estimate Cost'>{page}</Layout>

export default EstimateCoast