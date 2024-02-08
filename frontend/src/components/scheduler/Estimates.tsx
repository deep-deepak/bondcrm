import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import AddIcon from '@mui/icons-material/Add'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import {
  Card,
  CardContent,
  Grid,
  FormControl,
  TextField,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { getBranches } from 'src/services/branch'
import { useForm, Controller } from 'react-hook-form'
import { toast } from 'react-hot-toast'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='down' ref={ref} {...props} />
})

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}))

interface FormInputs {
  allestimate: string
  name: string
  eventType: string
  eventDate: string
  startTime: number | string
  endTime: number | string
  meeting: number | string
  email: string
  guestEmail: string
  notes: string
}

const defaultValues: any = {
  allestimat: '',
  name: '',
  eventType: '',
  eventDate: '',
  startTime: '',
  endTime: '',
  meeting: '',
  email: '',
  guestEmail: '',
  notes: ''
}

type OptionsType = {
  allestimate: string
  date_range: string
  date_type: string
  job_status: string[]
  service: string[]
  branch: string[]
  province: string[]
  representative: string[]
  year: string[]
  invoice_type: string
  inspection_type: string
}

const defaultOptions: OptionsType = {
  allestimate: '',
  date_range: '',
  date_type: '',
  job_status: [],
  service: [],
  branch: [],
  province: [],
  representative: [],
  year: [new Date().getFullYear().toString()],
  invoice_type: '',
  inspection_type: ''
}

export default function EstimateFilter() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormInputs>({ defaultValues })
  const selectedEventType = watch('eventType')

  const onSubmit = () => {
    toast.success('Form Submitted')
  }

  const { data: branches = [] } = useQuery({ queryKey: ['branches'], queryFn: getBranches })

  return (
    <div className='estimate_filter'>
      <Button variant='contained' startIcon={<AddIcon />} onClick={handleClickOpen}>
        Estimates
      </Button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BootstrapDialog
          TransitionComponent={Transition}
          onClose={handleClose}
          aria-labelledby='customized-dialog-title'
          open={open}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id='customized-dialog-title'>
            Schedular Estimate Filters
          </DialogTitle>
          <IconButton
            aria-label='close'
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: theme => theme.palette.grey[500]
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6} md={6}>
                <FormControl fullWidth>
                  <InputLabel
                    id='validation-basic-source-name'
                    error={Boolean(errors.eventType)}
                    htmlFor='validation-basic-source-name'
                  >
                    Event Type
                  </InputLabel>
                  <Controller
                    name='eventType'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <Select
                        value={value}
                        label='Select Estimate type'
                        onChange={onChange}
                        error={Boolean(errors.eventType)}
                        labelId='validation-basic-source-name'
                        aria-describedby='validation-basic-source-name'
                        placeholder='Select eventType'
                      >
                        <MenuItem value='all'>All</MenuItem>
                        <MenuItem value='schedular'>Schedular</MenuItem>
                        <MenuItem value='unschedular'>Un-Schedular</MenuItem>
                      </Select>
                    )}
                  />
                  {errors.eventType && (
                    <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-source-name'>
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              {selectedEventType === 'all' && (
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <InputLabel
                      id='validation-basic-source-name'
                      error={Boolean(errors.eventType)}
                      htmlFor='validation-basic-source-name'
                    >
                      Select All Estimate
                    </InputLabel>
                    <Controller
                      name='allestimate'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange } }) => (
                        <Select
                          value={value}
                          label='Select All Estimate'
                          onChange={onChange}
                          error={Boolean(errors.allestimate)}
                          labelId='validation-basic-source-name'
                          aria-describedby='validation-basic-source-name'
                          placeholder='Select eventType'
                        >
                          <MenuItem value='all'>All</MenuItem>
                          <MenuItem value='schedular'>Schedular</MenuItem>
                          <MenuItem value='unschedular'>Un-Schedular</MenuItem>
                        </Select>
                      )}
                    />
                    {errors.allestimate && (
                      <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-source-name'>
                        This field is required
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              )}

              {selectedEventType === 'schedular' && (
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <InputLabel
                      id='validation-basic-source-name'
                      error={Boolean(errors.eventType)}
                      htmlFor='validation-basic-source-name'
                    >
                      Select Schedular Estimate
                    </InputLabel>
                    <Controller
                      name='allestimate'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange } }) => (
                        <Select
                          value={value}
                          label='Select All Estimate'
                          onChange={onChange}
                          error={Boolean(errors.allestimate)}
                          labelId='validation-basic-source-name'
                          aria-describedby='validation-basic-source-name'
                          placeholder='Select eventType'
                        >
                          <MenuItem value='all'>All</MenuItem>
                          <MenuItem value='schedular'>Schedular</MenuItem>
                          <MenuItem value='unschedular'>Un-Schedular</MenuItem>
                        </Select>
                      )}
                    />
                    {errors.allestimate && (
                      <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-source-name'>
                        This field is required
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              )}

              {selectedEventType === 'unschedular' && (
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <InputLabel
                      id='validation-basic-source-name'
                      error={Boolean(errors.eventType)}
                      htmlFor='validation-basic-source-name'
                    >
                      Select Un-Schedular Estimate
                    </InputLabel>
                    <Controller
                      name='allestimate'
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { value, onChange } }) => (
                        <Select
                          value={value}
                          label='Select All Estimate'
                          onChange={onChange}
                          error={Boolean(errors.allestimate)}
                          labelId='validation-basic-source-name'
                          aria-describedby='validation-basic-source-name'
                          placeholder='Select eventType'
                        >
                          <MenuItem value='all'>All</MenuItem>
                          <MenuItem value='schedular'>Schedular</MenuItem>
                          <MenuItem value='unschedular'>Un-Schedular</MenuItem>
                        </Select>
                      )}
                    />
                    {errors.allestimate && (
                      <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-source-name'>
                        This field is required
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              )}
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button autoFocus type='submit'>
              Submit
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </form>
    </div>
  )
}
