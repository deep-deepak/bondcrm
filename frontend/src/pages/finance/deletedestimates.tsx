import React, { ReactNode } from 'react'
import Layout from 'src/layouts/Layout';
import DeletedEstimateList from 'src/components/finance/DeletedEstimates'


function DeletedEstimates() {
    return (
        <DeletedEstimateList />
    )
}
DeletedEstimates.getLayout = (page: ReactNode) => <Layout title='Deleted Estimates'>{page}</Layout>

export default DeletedEstimates