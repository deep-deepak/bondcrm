import React, { ReactNode } from 'react'
import Warranties from 'src/components/customers/Warranties';
import Layout from 'src/layouts/Layout'

export default function CustomerWarranties() {
  return (
    <div>
        <Warranties/>
    </div>
  )
}

CustomerWarranties.getLayout = (page: ReactNode) => <Layout title='Warranty Certification'>{page}</Layout>