// ** Next Import

// ** Styled Component
import { ReactNode } from 'react'
import Layout from 'src/layouts/Layout'
import AddPage from 'src/components/customers/add'

const Customers = () => {
    return (
        <AddPage />
    )
}

Customers.getLayout = (page: ReactNode) => <Layout title='Add Customer'>{page}</Layout>

export default Customers