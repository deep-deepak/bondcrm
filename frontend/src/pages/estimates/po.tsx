import React, { ReactNode } from 'react';
import POEstimateList from 'src/components/estimates/PO';
import Layout from 'src/layouts/Layout'


function PoEstimate() {
    return (
        <POEstimateList />
    )
}
PoEstimate.getLayout = (page: ReactNode) => <Layout title='Purchase Order'>{page}</Layout>

export default PoEstimate