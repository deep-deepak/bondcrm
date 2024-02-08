import React, { ReactNode } from 'react'
import TaskCompliancesList from 'src/components/management/TaskCompliances';
import Layout from 'src/layouts/Layout'


function TaskCompliances() {
    return (
        <TaskCompliancesList />
    )
}
TaskCompliances.getLayout = (page: ReactNode) => <Layout title='Task Compliance'>{page}</Layout>

export default TaskCompliances