import React, { ReactNode } from 'react'
import CallTrackingList from 'src/components/report/CallTracking'
import Layout from 'src/layouts/Layout'


function CallTrackings() {
    return (
        <CallTrackingList />
    )
}
CallTrackings.getLayout = (page: ReactNode) => <Layout title='Customer Call Tracking'>{page}</Layout>

export default CallTrackings