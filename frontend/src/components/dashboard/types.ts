
import { ReactNode } from 'react'
import { IconProps } from '@iconify/react'
import { IconButtonProps } from '@mui/material/IconButton'

export type OptionsFilterType = {
    icon?: ReactNode
    iconButtonProps?: IconButtonProps
    iconProps?: Omit<IconProps, 'icon'>
  }