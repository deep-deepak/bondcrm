import React, { ReactNode } from 'react'
import Layout from 'src/layouts/Layout';
import VendorDoumentsList from 'src/components/finance/VendorDocuments';


function VendorDocuments() {
    return (
        <VendorDoumentsList />
    )
}
VendorDocuments.getLayout = (page: ReactNode) => <Layout title='Vendor Documents For Approval'>{page}</Layout>

export default VendorDocuments