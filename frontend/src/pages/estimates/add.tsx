// ** Next Import

// ** Styled Component
import { ReactNode } from 'react'
import AddPage from 'src/components/estimates/Add'
import Layout from 'src/layouts/Layout'

const AddEstimate = () => {
    return (
        <AddPage />
    )
}

AddEstimate.getLayout = (page: ReactNode) => <Layout title='Add Estimate'>{page}</Layout>

export default AddEstimate