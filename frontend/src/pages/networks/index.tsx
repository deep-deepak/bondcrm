import React, { ReactNode } from 'react'
import NetworkList from 'src/components/networks/List'
import Layout from 'src/layouts/Layout'


function Network() {
    return (
        <NetworkList />
    )
}
Network.getLayout = (page: ReactNode) => <Layout title='Network Listing'>{page}</Layout>

export default Network