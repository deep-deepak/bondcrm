import React, { ReactNode } from 'react';
import OpenedEstimateList from 'src/components/estimates/Opened';
import Layout from 'src/layouts/Layout'


function OpenEstimate() {
    return (
        <OpenedEstimateList />
    )
}
OpenEstimate.getLayout = (page: ReactNode) => <Layout title='Opened Estimates'>{page}</Layout>

export default OpenEstimate