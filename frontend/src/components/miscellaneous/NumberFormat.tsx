import React from 'react'
import { Stack, Typography } from '@mui/material'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { numberFormat } from 'src/helpers'

type NumberFormatProps = {
    value: number | string | undefined | null
    isIcon?: boolean
    icon?: string
    position?: 'before' | 'after'
}

const NumberFormat = (props: NumberFormatProps) => {
    const { value, isIcon = true, icon = "tabler:currency-dollar", position = 'before' } = props;
    return (
        <Stack direction="row" alignItems="center" gap={0}>
            {position == 'before' && isIcon && <Icon icon={icon} />}
            <Typography variant="body1">{numberFormat(value)}</Typography>
            {position == 'after' && isIcon && <Icon icon={icon} />}
        </Stack>
    )
}

export default NumberFormat