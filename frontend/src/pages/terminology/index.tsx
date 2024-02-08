import React, { ReactNode } from 'react'
import TerminologyList from 'src/components/terminology/List'
import Layout from 'src/layouts/Layout'


function Terminology() {
    return (
        <TerminologyList />
    )
}
Terminology.getLayout = (page: ReactNode) => <Layout title='Terminology'>{page}</Layout>

export default Terminology