import React, { ReactNode } from 'react'
import Layout from 'src/layouts/Layout'
import InvoiceList from '../apps/invoice/list'


function Invoices() {
    return (
        <InvoiceList />
    )
}
Invoices.getLayout = (page: ReactNode) => <Layout title='Invoices Listing'>{page}</Layout>

export default Invoices