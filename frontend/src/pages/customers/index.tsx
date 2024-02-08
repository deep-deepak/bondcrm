import React, { ReactNode } from 'react'
import CustomerList from 'src/components/customers/List'
import Layout from 'src/layouts/Layout'


function Customer() {
    return (
        <CustomerList />
    )
}
Customer.getLayout = (page: ReactNode) => <Layout title='Customers'>{page}</Layout>

export default Customer