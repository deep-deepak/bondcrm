import React, { ReactNode } from 'react';
import WOEstimateList from 'src/components/estimates/WO';
import Layout from 'src/layouts/Layout'


function WOEstimate() {
    return (
        <WOEstimateList />
    )
}
WOEstimate.getLayout = (page: ReactNode) => <Layout title='Work Order'>{page}</Layout>

export default WOEstimate