import React, { ReactNode } from 'react'
import EstimateSpotlightsList from 'src/components/management/EstimateSpotlights';
import Layout from 'src/layouts/Layout'


function EstimateSpotLight() {
    return (
        <EstimateSpotlightsList />
    )
}
EstimateSpotLight.getLayout = (page: ReactNode) => <Layout title='Estimate Spotlight'>{page}</Layout>

export default EstimateSpotLight