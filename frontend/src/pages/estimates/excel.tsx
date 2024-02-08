import React, { ReactNode } from 'react';
import EstimateExcel from 'src/components/estimates/Excel';
import Layout from 'src/layouts/Layout'


function EstimateExcelList() {
    return (
        <EstimateExcel />
    )
}
EstimateExcelList.getLayout = (page: ReactNode) => <Layout title='Excel Estimates'>{page}</Layout>

export default EstimateExcelList