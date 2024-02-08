import React, { ReactNode } from 'react'
import EstimateList from 'src/components/estimates/List'
import Layout from 'src/layouts/Layout'


function Estimate() {
    return (
        <EstimateList />
    )
}
Estimate.getLayout = (page: ReactNode) => <Layout title='Estimates'>{page}</Layout>

export default Estimate