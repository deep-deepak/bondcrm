import React, { ReactNode } from 'react'
import MyTaskList from 'src/components/task/MyTask'
import Layout from 'src/layouts/Layout'

export default function MyTask() {
  return (
    <div>
        <MyTaskList/>
    </div>
  )
}
MyTask.getLayout = (page: ReactNode) => <Layout title='Tasks'>{page}</Layout>
