import React, { ReactNode } from 'react'
import VendorsList from 'src/components/vendors/List'
import Layout from 'src/layouts/Layout'


function Vendors() {
    return (
        <VendorsList />
    )
}
Vendors.getLayout = (page: ReactNode) => <Layout title='Vendors Listing'>{page}</Layout>

export default Vendors