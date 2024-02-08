import React, { ReactNode } from 'react';
import LostEstimatedList from 'src/components/estimates/Lost';
import Layout from 'src/layouts/Layout'


function LostEstimate() {
    return (
        <LostEstimatedList />
    )
}
LostEstimate.getLayout = (page: ReactNode) => <Layout title='Lost Estimates'>{page}</Layout>

export default LostEstimate