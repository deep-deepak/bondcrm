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
  Divider,
  FormControl,
  TextField,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
  Box
} from '@mui/material'
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
  name: string
  occupation: string
  address: string
  postal: number | string
  branch: number | string
  representive: number | string
  website: string
  email: string
  phone: string | string
  pipeline: string
  interest: string
  group: string
  invitation: string
  document: string
  contact_name: string
  contact_position: string
  contact_email: string
  contact_phone: string
}

const defaultValues: any = {
  name: '',
  occupation: '',
  address: '',
  postal: '',
  branch: '',
  representive: '',
  website: '',
  email: '',
  phone: '',
  pipeline: '',
  interest: '',
  group: '',
  invitation: '',
  document: '',
  contact_name: '',
  contact_position: '',
  contact_email: '',
  contact_phone: ''
}

export default function AddVendors() {
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

  return (
    <div>
      <Button variant='outlined' startIcon={<AddIcon />} className='add_new_btn' onClick={handleClickOpen}>
        Add New
      </Button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BootstrapDialog
          TransitionComponent={Transition}
          onClose={handleClose}
          aria-labelledby='customized-dialog-title'
          open={open}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id='customized-dialog-title'>
            Add Vendor
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
                  <Grid item md={12}>
                    <Typography variant='h6'>Vendor Info:</Typography>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
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
                            placeholder='Enter Your Contact Name'
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

                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <InputLabel
                        id='validation-basic-source-name'
                        error={Boolean(errors.occupation)}
                        htmlFor='validation-basic-source-name'
                      >
                        Occupation
                      </InputLabel>
                      <Controller
                        name='occupation'
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                          <Select
                            value={value}
                            label='Insurance Copany'
                            onChange={onChange}
                            error={Boolean(errors.occupation)}
                            labelId='validation-basic-source-name'
                            aria-describedby='validation-basic-source-name'
                            placeholder='Select Occupation'
                          >
                            <MenuItem value='RAM'>RAM</MenuItem>
                            <MenuItem value='RAVAN'>RAVAN</MenuItem>
                          </Select>
                        )}
                      />
                      {errors.occupation && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-source-name'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Controller
                        name='address'
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            value={value}
                            label='Address'
                            onChange={onChange}
                            placeholder='Enter Your Contact Position'
                            error={Boolean(errors.address)}
                            aria-describedby='validation-basic-name'
                          />
                        )}
                      />
                      {errors.address && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-name'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Controller
                        name='postal'
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            value={value}
                            label='Postal'
                            onChange={onChange}
                            placeholder='Enter Your Contact Position'
                            error={Boolean(errors.postal)}
                            aria-describedby='validation-basic-name'
                          />
                        )}
                      />
                      {errors.postal && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-name'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <InputLabel
                        id='validation-basic-source-name'
                        error={Boolean(errors.branch)}
                        htmlFor='validation-basic-source-name'
                      >
                        Branch
                      </InputLabel>
                      <Controller
                        name='branch'
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                          <Select
                            value={value}
                            label='Insurance Copany'
                            onChange={onChange}
                            error={Boolean(errors.branch)}
                            labelId='validation-basic-source-name'
                            aria-describedby='validation-basic-source-name'
                            placeholder='Select Occupation'
                          >
                            <MenuItem value='RAM'>RAM</MenuItem>
                            <MenuItem value='RAVAN'>RAVAN</MenuItem>
                          </Select>
                        )}
                      />
                      {errors.branch && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-source-name'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <InputLabel
                        id='validation-basic-source-name'
                        error={Boolean(errors.representive)}
                        htmlFor='validation-basic-source-name'
                      >
                        Representative
                      </InputLabel>
                      <Controller
                        name='representive'
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                          <Select
                            value={value}
                            label='Insurance Copany'
                            onChange={onChange}
                            error={Boolean(errors.representive)}
                            labelId='validation-basic-source-name'
                            aria-describedby='validation-basic-source-name'
                            placeholder='Select Occupation'
                          >
                            <MenuItem value='RAM'>RAM</MenuItem>
                            <MenuItem value='RAVAN'>RAVAN</MenuItem>
                          </Select>
                        )}
                      />
                      {errors.representive && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-source-name'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Controller
                        name='website'
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            value={value}
                            label='Website'
                            onChange={onChange}
                            placeholder='Enter Your Contact Position'
                            error={Boolean(errors.website)}
                            aria-describedby='validation-basic-name'
                          />
                        )}
                      />
                      {errors.website && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-name'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Controller
                        name='email'
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            value={value}
                            label='Email'
                            onChange={onChange}
                            placeholder='Enter Your Contact Position'
                            error={Boolean(errors.email)}
                            aria-describedby='validation-basic-name'
                          />
                        )}
                      />
                      {errors.email && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-name'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Controller
                        name='phone'
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            value={value}
                            label='Phone'
                            onChange={onChange}
                            placeholder='Enter Your Contact Position'
                            error={Boolean(errors.phone)}
                            aria-describedby='validation-basic-name'
                          />
                        )}
                      />
                      {errors.phone && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-name'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <InputLabel
                        id='validation-basic-service'
                        error={Boolean(errors.pipeline)}
                        htmlFor='validation-basic-pipeline'
                      >
                        Pipline
                      </InputLabel>
                      <Controller
                        name='pipeline'
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                          <Select
                            value={value}
                            label='Select Country'
                            onChange={onChange}
                            error={Boolean(errors.pipeline)}
                            labelId='validation-basic-pipeline'
                            aria-describedby='validation-basic-pipeline'
                            placeholder='Select pipeline'
                          >
                            <MenuItem value='UK'>UK</MenuItem>
                            <MenuItem value='USA'>USA</MenuItem>
                            <MenuItem value='Australia'>Australia</MenuItem>
                            <MenuItem value='Germany'>Germany</MenuItem>
                          </Select>
                        )}
                      />
                      {errors.pipeline && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-service'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <InputLabel
                        id='validation-basic-service'
                        error={Boolean(errors.interest)}
                        htmlFor='validation-basic-interest'
                      >
                        Interest
                      </InputLabel>
                      <Controller
                        name='interest'
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                          <Select
                            value={value}
                            label='Select Interest'
                            onChange={onChange}
                            error={Boolean(errors.interest)}
                            labelId='validation-basic-interest'
                            aria-describedby='validation-basic-interest'
                            placeholder='Select interest'
                          >
                            <MenuItem value='UK'>UK</MenuItem>
                            <MenuItem value='USA'>USA</MenuItem>
                            <MenuItem value='Australia'>Australia</MenuItem>
                            <MenuItem value='Germany'>Germany</MenuItem>
                          </Select>
                        )}
                      />
                      {errors.interest && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-service'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <InputLabel
                        id='validation-basic-service'
                        error={Boolean(errors.group)}
                        htmlFor='validation-basic-group'
                      >
                        Group
                      </InputLabel>
                      <Controller
                        name='group'
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                          <Select
                            value={value}
                            label='Select Group'
                            onChange={onChange}
                            error={Boolean(errors.group)}
                            labelId='validation-basic-group'
                            aria-describedby='validation-basic-group'
                            placeholder='Select group'
                          >
                            <MenuItem value='UK'>UK</MenuItem>
                            <MenuItem value='USA'>USA</MenuItem>
                            <MenuItem value='Australia'>Australia</MenuItem>
                            <MenuItem value='Germany'>Germany</MenuItem>
                          </Select>
                        )}
                      />
                      {errors.group && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-service'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <InputLabel
                        id='validation-basic-service'
                        error={Boolean(errors.invitation)}
                        htmlFor='validation-basic-invitation'
                      >
                        Send Invitation Link
                      </InputLabel>
                      <Controller
                        name='invitation'
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                          <Select
                            value={value}
                            label='Select invitation'
                            onChange={onChange}
                            error={Boolean(errors.invitation)}
                            labelId='validation-basic-invitation'
                            aria-describedby='validation-basic-invitation'
                            placeholder='Select invitation'
                          >
                            <MenuItem value='UK'>Yes</MenuItem>
                            <MenuItem value='USA'>No</MenuItem>
                          </Select>
                        )}
                      />
                      {errors.invitation && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-service'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <InputLabel
                        id='validation-basic-service'
                        error={Boolean(errors.document)}
                        htmlFor='validation-basic-document'
                      >
                        Send Document Package
                      </InputLabel>
                      <Controller
                        name='document'
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                          <Select
                            value={value}
                            label='Select document'
                            onChange={onChange}
                            error={Boolean(errors.document)}
                            labelId='validation-basic-document'
                            aria-describedby='validation-basic-document'
                            placeholder='Select document'
                          >
                            <MenuItem value='UK'>Yes</MenuItem>
                            <MenuItem value='USA'>No</MenuItem>
                          </Select>
                        )}
                      />
                      {errors.document && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-service'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Typography variant='h6'>Personal Information:</Typography>
                  </Grid>
                  <Divider component='div' sx={{ my: 4 }} />

                  <Grid item xs={12} sm={3}>
                    <FormControl fullWidth>
                      <Controller
                        name='contact_name'
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            value={value}
                            label='Contact Name'
                            onChange={onChange}
                            placeholder='Enter Your Contact Name'
                            error={Boolean(errors.contact_name)}
                            aria-describedby='validation-basic-name'
                          />
                        )}
                      />
                      {errors.contact_name && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-name'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <FormControl fullWidth>
                      <Controller
                        name='contact_position'
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            value={value}
                            label='Contact Position'
                            onChange={onChange}
                            placeholder='Enter Your Contact Position'
                            error={Boolean(errors.contact_position)}
                            aria-describedby='validation-basic-name'
                          />
                        )}
                      />
                      {errors.contact_position && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-name'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <FormControl fullWidth>
                      <Controller
                        name='contact_email'
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            value={value}
                            label='Contact Email'
                            onChange={onChange}
                            placeholder='Enter Your Contact Email'
                            error={Boolean(errors.contact_email)}
                            aria-describedby='validation-basic-name'
                          />
                        )}
                      />
                      {errors.contact_email && (
                        <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-name'>
                          This field is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <FormControl fullWidth>
                      <Controller
                        name='contact_phone'
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            value={value}
                            label='Contact Mobile'
                            onChange={onChange}
                            placeholder='Enter Your Contact Phone'
                            error={Boolean(errors.contact_phone)}
                            aria-describedby='validation-basic-name'
                          />
                        )}
                      />
                      {errors.contact_phone && (
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
