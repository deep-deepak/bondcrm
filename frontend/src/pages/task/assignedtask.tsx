import React, { ReactNode } from 'react';
import AssignedTaskList from 'src/components/task/AssignebTask';
import Layout from 'src/layouts/Layout';

export default function AssignedTask() {
  return (
    <div>
      <AssignedTaskList />
    </div>
  )
}

AssignedTask.getLayout = (page: ReactNode) => <Layout title=''>{page}</Layout>
