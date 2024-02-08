import React, { ReactNode } from 'react'
import Layout from 'src/layouts/Layout';
import PostJObsList from 'src/components/scheduler/PostJobs'


function PostJobs() {
    return (
        <PostJObsList />
    )
}
PostJobs.getLayout = (page: ReactNode) => <Layout title='Past Jobs'>{page}</Layout>

export default PostJobs