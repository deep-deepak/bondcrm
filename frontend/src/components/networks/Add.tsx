// ** React Imports

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'

// ** Third Party Imports
import toast from 'react-hot-toast'
import { useForm, Controller } from 'react-hook-form'
import Switch, { SwitchProps } from '@mui/material/Switch'
import { styled } from '@mui/material/styles'
import { Divider } from '@mui/material'

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        border: 0
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5
      }
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff'
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600]
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3
    }
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500
    })
  }
}))

interface FormInputs {
  name: string
  occupation: Boolean
  address: string
  postal: number | string
  branch: number | string
  representive: number | string
  website: string
  email: string
  phone: boolean | string
  pipeline: string
  interest: string
  group: string
  contact_name: string
  contact_position: boolean
  contact_email: boolean
  profit: boolean
  contact_phone: boolean
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
  contact_name: '',
  contact_position: '',
  contact_email: '',
  profit: '',
  contact_phone: '',
 }

const AddNetworkPage = () => {
  // ** Hooks
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormInputs>({ defaultValues })

  const onSubmit = () => toast.success('Form Submitted')

  // console.log(watch('secondary_customer'))
  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
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
                      placeholder='Enter Your Company Name'
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
                  error={Boolean(errors.name)}
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
                      placeholder='Enter Address'
                      error={Boolean(errors.address)}
                      aria-describedby='validation-basic-address'
                    />
                  )}
                />
                {errors.address && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-address'>
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
                      placeholder='Enter Postal Code'
                      error={Boolean(errors.postal)}
                      aria-describedby='validation-basic-address'
                    />
                  )}
                />
                {errors.postal && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-address'>
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
                      label='Select Branch'
                      onChange={onChange}
                      error={Boolean(errors.branch)}
                      labelId='validation-basic-source-name'
                      aria-describedby='validation-basic-source-name'
                      placeholder='Select Source Name'
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
                      label='Select Customer'
                      onChange={onChange}
                      error={Boolean(errors.representive)}
                      labelId='validation-basic-source-name'
                      aria-describedby='validation-basic-source-name'
                      placeholder='Select Source Name'
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
                      placeholder='Enter Website'
                      error={Boolean(errors.website)}
                      aria-describedby='validation-basic-website'
                    />
                  )}
                />
                {errors.website && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-address'>
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
                      placeholder='Enter Your Email'
                      error={Boolean(errors.email)}
                      aria-describedby='validation-basic-email'
                    />
                  )}
                />
                {errors.email && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-address'>
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
                      placeholder='Enter Your Phone'
                      error={Boolean(errors.phone)}
                      aria-describedby='validation-basic-phone'
                    />
                  )}
                />
                {errors.phone && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-address'>
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
                      label='Contact Phone'
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

            <Grid item xs={12} sm={3}>
              <FormControl fullWidth>
                <Controller
                  name='contact_name'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='Contact Name (optional)'
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
                      label='Contact Phone'
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

            <Grid item xs={12}>
              <Button size='large' type='submit' variant='contained'>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default AddNetworkPage
