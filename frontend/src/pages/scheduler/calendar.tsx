import React, { ReactNode } from 'react'
import Layout from 'src/layouts/Layout'
import Calendar from '../../components/scheduler/Calendar'


function Callendars() {
    return (
        <Calendar />
    )
}
Callendars.getLayout = (page: ReactNode) => <Layout title=''>{page}</Layout>

export default Callendars