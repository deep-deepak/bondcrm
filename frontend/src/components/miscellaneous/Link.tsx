import React, { ReactNode } from 'react'

// ** Next Imports
import NextLink from 'next/link'

import { styled } from '@mui/material/styles'

const LinkStyled = styled(NextLink)(({ theme }) => ({
    fontSize: '0.875rem',
    textDecoration: 'none',
    color: theme.palette.primary.main
}))

type CustomLinkProps = {
    children: ReactNode
    href?: string
}

function Link(props: CustomLinkProps) {
    const { children, href = "#", ...others } = props;
    return (
        <LinkStyled href={href} {...others}>{children}</LinkStyled>
    )
}

export default Link