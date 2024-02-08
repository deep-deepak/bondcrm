import React, { ReactNode } from 'react'
import Documents from 'src/components/customers/Documents';
import Layout from 'src/layouts/Layout'

export default function CustomerDocuments() {
  return (
    <div>
        <Documents/>
    </div>
  )
}

CustomerDocuments.getLayout = (page: ReactNode) => <Layout title='Attachment'>{page}</Layout>