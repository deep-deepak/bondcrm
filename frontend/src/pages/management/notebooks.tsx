import React, { ReactNode } from 'react'
import NoteBooksList from 'src/components/management/NoteBooks';
import Layout from 'src/layouts/Layout'


function NoteBooks() {
    return (
        <NoteBooksList />
    )
}
NoteBooks.getLayout = (page: ReactNode) => <Layout title='NoteBook Listing'>{page}</Layout>

export default NoteBooks