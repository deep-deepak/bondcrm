// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { OptionsFilterType } from './types'
import { Grid } from '@mui/material'
import MultiSelect from '../miscellaneous/MultiSelect'
import { getYears } from 'src/helpers'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DateRangePicker from '../miscellaneous/DateRangePicker'

const CustomCloseButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
    top: 0,
    right: 0,
    color: 'grey.500',
    position: 'absolute',
    boxShadow: theme.shadows[6],
    transform: 'translate(10px, -10px)',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: `${theme.palette.background.paper} !important`,
    transition: 'transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out',
    '&:hover': {
        boxShadow: theme.shadows[3],
        transform: 'translate(7px, -5px)'
    }
}))

type OptionsType = {
    date_range: string
    months: string[]
    representatives: string[]
    branches: string[]
}

const GlobalFilter = (props: OptionsFilterType) => {
    const { icon, iconProps, iconButtonProps } = props
    // ** State
    const [open, setOpen] = useState<boolean>(false)
    const [options, setOptions] = useState<OptionsType>({
        date_range: "",
        months: [],
        representatives: [],
        branches: []
    })

    const handleClose = (even: any = {}, reason?: "backdropClick" | "escapeKeyDown") => {
        if (reason !== "backdropClick") {
            setOpen(false)
        }
    }

    const onChange = (name: string, value: string[]) => {
        setOptions((prev: OptionsType) => ({ ...prev, [name]: value }));
    }

    return (
        <div>
            <IconButton
                aria-haspopup='true'
                onClick={() => setOpen(true)}
                {...iconButtonProps}
            >
                <FilterAltIcon/>
            </IconButton>
            <Dialog
                open={open}
                fullWidth
                maxWidth="md"
                onClose={handleClose}
                aria-labelledby='customized-dialog-title'
                sx={{ '& .MuiDialog-paper': { overflow: 'visible' } }}
            >
                <DialogTitle id='customized-dialog-title' sx={{ p: 4 }}>
                    <Typography variant='h6'>
                        <Icon icon='tabler:filter' /> Filters
                    </Typography>
                    <CustomCloseButton aria-label='close' onClick={handleClose}>
                        <Icon icon='tabler:x' fontSize='1.25rem' />
                    </CustomCloseButton>
                </DialogTitle>
                <DialogContent dividers sx={{ p: theme => `${theme.spacing(4)} !important` }}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <DateRangePicker  />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <MultiSelect label='Select Branch' options={[]} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <MultiSelect label='Select Representative' options={[]} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <MultiSelect label='Select Services' options={[]} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <MultiSelect label='Select Status' options={["Active","Inactive","Public","Pending"]} />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions sx={{ p: theme => `${theme.spacing(3)} !important` }}>
                    <Button variant='contained' onClick={handleClose}>Filter</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default GlobalFilter
