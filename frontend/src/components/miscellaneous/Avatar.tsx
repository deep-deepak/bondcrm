import { SxProps, Theme } from '@mui/material'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'

import { getInitials } from 'src/@core/utils/get-initials'

type AvatarProps = {
    name?: string
    color?: ThemeColor,
    sx?: SxProps<Theme>
}

// ** renders client column
export const Avatar = (props: AvatarProps) => {
    const { name, color, sx ={} } = props;
    return (
        <CustomAvatar
            skin='light'
            color={color ? color : 'primary'}
            sx={{ mr: 3, fontSize: '.8rem', width: '1.875rem', height: '1.875rem' }}
        >
            {getInitials(name ? name : 'BC Customer')}
        </CustomAvatar>
    )
}