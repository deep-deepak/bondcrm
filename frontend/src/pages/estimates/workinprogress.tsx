import React, { ReactNode } from 'react';
import WorkinProgressList from 'src/components/estimates/WorkinProgress'
import Layout from 'src/layouts/Layout'


function WorkInProgress() {
    return (
        <WorkinProgressList />
    )
}
WorkInProgress.getLayout = (page: ReactNode) => <Layout title='Work in Progress'>{page}</Layout>

export default WorkInProgress