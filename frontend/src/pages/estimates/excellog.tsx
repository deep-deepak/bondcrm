import React, { ReactNode } from 'react';
import ExcleLogsList from 'src/components/estimates/ExcelLogs';
import Layout from 'src/layouts/Layout'


function ExcelLogs() {
    return (
        <ExcleLogsList />
    )
}
ExcelLogs.getLayout = (page: ReactNode) => <Layout title='Excel Logs'>{page}</Layout>

export default ExcelLogs