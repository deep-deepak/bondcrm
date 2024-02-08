import React, { ReactNode } from 'react'
import DocumentAdd from 'src/components/customers/DocumentAdd'
import WarrantyAdd from 'src/components/customers/WarrantyAdd'
import Layout from 'src/layouts/Layout'

export default function Add() {
  return (
    <div>
        <DocumentAdd/>
    </div>
  )
}
Add.getLayout = (page: ReactNode) => <Layout title='Attachment'>{page}</Layout>
