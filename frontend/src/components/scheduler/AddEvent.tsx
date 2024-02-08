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
  MenuItem,
} from '@mui/material'
import { Editor } from '@tinymce/tinymce-react'
import { useQuery } from '@tanstack/react-query'
import { getBranches } from 'src/services/branch'
import { useForm, Controller } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import MultiSelect from 'src/components/miscellaneous/MultiSelect'

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

export default function AddEvent() {
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

  const onSubmit = () => toast.success('Form Submitted')

  const { data: branches = [] } = useQuery({ queryKey: ['branches'], queryFn: getBranches })

  return (
    <div>
      <Button variant='contained' startIcon={<AddIcon />} onClick={handleClickOpen}>
        Add Event
      </Button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BootstrapDialog
          TransitionComponent={Transition}
          onClose={handleClose}
          aria-labelledby='customized-dialog-title'
          open={open}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id='customized-dialog-title'>
            Add Event
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
            <Card>
              <CardContent>
                <Grid container spacing={5}>
                  
                  <Grid item xs={12} sm={12} md={12}>
                    <FormControl fullWidth>
                      <Controller
                        name='name'
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            value={value}
                            label='Name'
                            onChange={onChange}
                            placeholder='Enter Your Event Name'
                            error={Boolean(errors.name)}
                            aria-describedby='validation-basic-name'
                          />
                        )}
                      />
                      {errors.name && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-name'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={3}>
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
                            label='Insurance Copany'
                            onChange={onChange}
                            error={Boolean(errors.eventType)}
                            labelId='validation-basic-source-name'
                            aria-describedby='validation-basic-source-name'
                            placeholder='Select eventType'
                          >
                            <MenuItem value='RAM'>RAM</MenuItem>
                            <MenuItem value='RAVAN'>RAVAN</MenuItem>
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

                  <Grid item xs={12} sm={3}>
                    <FormControl fullWidth>
                      <Controller
                        name='eventDate'
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            type='date'
                            value={value}
                            label='Event Date'
                            onChange={onChange}
                            placeholder='Enter Your Contact Position'
                            error={Boolean(errors.eventDate)}
                            aria-describedby='validation-basic-name'
                          />
                        )}
                      />
                      {errors.eventDate && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-name'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <FormControl fullWidth>
                      <Controller
                        name='startTime'
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            type='time'
                            value={value}
                            label='Start Time'
                            onChange={onChange}
                            placeholder='Enter Your Contact Position'
                            error={Boolean(errors.startTime)}
                            aria-describedby='validation-basic-name'
                          />
                        )}
                      />
                      {errors.startTime && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-name'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <FormControl fullWidth>
                      <Controller
                        name='endTime'
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            type='time'
                            value={value}
                            label='End Time'
                            onChange={onChange}
                            placeholder='Enter Your Contact Position'
                            error={Boolean(errors.endTime)}
                            aria-describedby='validation-basic-name'
                          />
                        )}
                      />
                      {errors.endTime && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-name'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <MultiSelect
                      name='meeting'
                      defaultValue={defaultValues.meeting}
                      label='Meeting With'
                      // onChange={onChange}
                      id='branch'
                      options={branches.map((branch: any) => {
                        return {
                          value: branch.id,
                          label: branch.name
                        }
                      })}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <MultiSelect
                      name='guestEmail'
                      defaultValue={defaultValues.guestEmail}
                      label='Guest Email'
                      // onChange={onChange}
                      id='branch'
                      options={branches.map((branch: any) => {
                        return {
                          value: branch.id,
                          label: branch.name
                        }
                      })}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <FormControl fullWidth>
                      <Controller
                        name='notes'
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            type='text'
                            value={value}
                            label='notes'
                            onChange={onChange}
                            placeholder='Enter Your Contact Position'
                            error={Boolean(errors.notes)}
                            aria-describedby='validation-basic-name'
                          />
                        )}
                      />
                      {errors.notes && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-name'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <FormControl fullWidth>
                      <Controller
                        name='notes'
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            type='text'
                            value={value}
                            label='Notes'
                            onChange={onChange}
                            placeholder='Enter Your Contact Position'
                            error={Boolean(errors.notes)}
                            aria-describedby='validation-basic-name'
                          />
                        )}
                      />
                      {errors.notes && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-name'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                </Grid>
              </CardContent>
            </Card>
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
