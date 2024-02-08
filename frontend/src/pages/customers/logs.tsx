import React, { ReactNode } from 'react'
import CallLogs from 'src/components/customers/CallLogs'
import Layout from 'src/layouts/Layout'

export default function Logs() {
  return (
    <div>
        <CallLogs/>
    </div>
  )
}
Logs.getLayout = (page: ReactNode) => <Layout title='Call Tracking Excel Logs'>{page}</Layout>
