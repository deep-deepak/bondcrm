import React, { ReactNode } from 'react'
import WarrantyAdd from 'src/components/customers/WarrantyAdd'
import Layout from 'src/layouts/Layout'

export default function Add() {
  return (
    <div>
        <WarrantyAdd/>
    </div>
  )
}
Add.getLayout = (page: ReactNode) => <Layout title='Warranty Certification'>{page}</Layout>
