import React, { ReactNode } from 'react'
import Layout from 'src/layouts/Layout';
import AverageCollectionsList from 'src/components/finance/AverageCollection';


function AverageCollection() {
    return (
        <AverageCollectionsList />
    )
}
AverageCollection.getLayout = (page: ReactNode) => <Layout title='Average Collection Report'>{page}</Layout>

export default AverageCollection