import React, { ReactNode } from 'react';
import MonthCompletionValueList from 'src/components/estimates/MonthCompletionValue';
import Layout from 'src/layouts/Layout'


function MonthCompletionValue() {
    return (
        <MonthCompletionValueList />
    )
}
MonthCompletionValue.getLayout = (page: ReactNode) => <Layout title='Current Month Complete Value'>{page}</Layout>

export default MonthCompletionValue