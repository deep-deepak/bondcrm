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

// ** Third Party Imports
import toast from 'react-hot-toast'
import { useForm, Controller } from 'react-hook-form'
import Switch, { SwitchProps } from '@mui/material/Switch'
import { styled } from '@mui/material/styles'

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
  secondary_customer: Boolean
  address: string
  representive: number | string
  service: number | string
  area: number | string
  status: string
  success: string
  insurance: boolean | string
  collection: string
  poclaim: string
  building_type: string
  notes: string
  french: boolean
  lineitem: boolean
  profit: boolean
  inspection: boolean
  overahead_per: string | number
  profit_per: string | number
  discount_per: string | number
  kit: string
  charge: string
}

const defaultValues:any = {
  name: '',
  secondary_customer: '',
  address: '',
  representive: '',
  service: '',
  area: '',
  status: '',
  success: '',
  insurance: '',
  collection: '',
  poclaim: '',
  building_type: '',
  notes: '',
  french: '',
  lineitem: '',
  profit: '',
  inspection: '',
  overahead_per: '',
  profit_per: '',
  discount_per: '',
  kit: '',
  charge: ''
}

const AddPage = () => {
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
                <InputLabel
                  id='validation-basic-source-name'
                  error={Boolean(errors.name)}
                  htmlFor='validation-basic-source-name'
                >
                  Name
                </InputLabel>
                <Controller
                  name='name'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label='Select Customer'
                      onChange={onChange}
                      error={Boolean(errors.name)}
                      labelId='validation-basic-source-name'
                      aria-describedby='validation-basic-source-name'
                      placeholder='Select Name'
                    >
                      <MenuItem value='RAM'>RAM</MenuItem>
                      <MenuItem value='RAVAN'>RAVAN</MenuItem>
                    </Select>
                  )}
                />
                {errors.name && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-source-name'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <Controller
                  name='secondary_customer'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='Secondary Customer'
                      onChange={onChange}
                      placeholder='Enter Secondary Customer'
                      error={Boolean(errors.secondary_customer)}
                      aria-describedby='validation-basic-name'
                    />
                  )}
                />
                {errors.secondary_customer && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-name'>
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
                <InputLabel
                  id='validation-basic-service'
                  error={Boolean(errors.service)}
                  htmlFor='validation-basic-service'
                >
                  Service
                </InputLabel>
                <Controller
                  name='service'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label='Country'
                      onChange={onChange}
                      error={Boolean(errors.service)}
                      labelId='validation-basic-service'
                      aria-describedby='validation-basic-service'
                      placeholder='Select Service'
                    >
                      <MenuItem value='UK'>UK</MenuItem>
                      <MenuItem value='USA'>USA</MenuItem>
                      <MenuItem value='Australia'>Australia</MenuItem>
                      <MenuItem value='Germany'>Germany</MenuItem>
                    </Select>
                  )}
                />
                {errors.service && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-service'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <Controller
                  name='area'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='Area'
                      onChange={onChange}
                      placeholder='Enter Area'
                      error={Boolean(errors.area)}
                      aria-describedby='validation-basic-address'
                    />
                  )}
                />
                {errors.area && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-address'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel
                  id='validation-basic-job-status'
                  error={Boolean(errors.status)}
                  htmlFor='validation-basic-job-status'
                >
                  Status
                </InputLabel>
                <Controller
                  name='status'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label='Country'
                      onChange={onChange}
                      error={Boolean(errors.status)}
                      labelId='validation-basic-job-status'
                      aria-describedby='validation-basic-job-status'
                      placeholder='Select Status'
                    >
                      <MenuItem value='UK'>Ongoing</MenuItem>
                    </Select>
                  )}
                />
                {errors.status && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-job-status'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel
                  id='validation-basic-source-name'
                  error={Boolean(errors.success)}
                  htmlFor='validation-basic-source-name'
                >
                  Success
                </InputLabel>
                <Controller
                  name='success'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label='Select Customer'
                      onChange={onChange}
                      error={Boolean(errors.success)}
                      labelId='validation-basic-source-name'
                      aria-describedby='validation-basic-source-name'
                      placeholder='Select Source Name'
                    >
                      <MenuItem value='100%'>100%</MenuItem>
                      <MenuItem value='75%'>75%</MenuItem>
                      <MenuItem value='50%'>50%</MenuItem>
                      <MenuItem value='25%'>25%</MenuItem>
                    </Select>
                  )}
                />
                {errors.success && (
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
                  error={Boolean(errors.insurance)}
                  htmlFor='validation-basic-source-name'
                >
                  Insurance
                </InputLabel>
                <Controller
                  name='name'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label='Select Customer'
                      onChange={onChange}
                      error={Boolean(errors.insurance)}
                      labelId='validation-basic-source-name'
                      aria-describedby='validation-basic-source-name'
                      placeholder='Select insurance Name'
                    >
                      <MenuItem value='YES'>YES</MenuItem>
                      <MenuItem value='NO'>NO</MenuItem>
                    </Select>
                  )}
                />
                {errors.insurance && (
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
                  error={Boolean(errors.collection)}
                  htmlFor='validation-basic-source-name'
                >
                  Expected Collection
                </InputLabel>
                <Controller
                  name='collection'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label='Select Customer'
                      onChange={onChange}
                      error={Boolean(errors.collection)}
                      labelId='validation-basic-source-name'
                      aria-describedby='validation-basic-source-name'
                      placeholder='Select Source Name'
                    >
                      <MenuItem value='End of job'>End of job</MenuItem>
                      <MenuItem value='After 15 days'>After 15 days</MenuItem>
                      <MenuItem value='30 days'>30 days</MenuItem>
                      <MenuItem value='Custom date'>Custom date</MenuItem>
                    </Select>
                  )}
                />
                {errors.collection && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-source-name'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <Controller
                  name='poclaim'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='PO/Claim'
                      onChange={onChange}
                      placeholder='Enter POclaim'
                      error={Boolean(errors.poclaim)}
                      aria-describedby='validation-basic-postal'
                    />
                  )}
                />
                {errors.poclaim && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-postal'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <Controller
                  name='building_type'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      type='text'
                      value={value}
                      label='Building Type'
                      onChange={onChange}
                      error={Boolean(errors.building_type)}
                      placeholder='Enter Building Type'
                      aria-describedby='validation-basic-email'
                    />
                  )}
                />
                {errors.building_type && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-email'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={4}>
              <FormControl fullWidth>
                <Controller
                  name='notes'
                  control={control}
                  render={({ field }) => (
                    <TextField
                      rows={4}
                      multiline
                      {...field}
                      label='Notes'
                      error={Boolean(errors.notes)}
                      placeholder='Enter something here as a customer note...'
                      aria-describedby='validation-basic-notes'
                    />
                  )}
                />
                {errors.notes && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-notes'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={8}></Grid>

            <Grid item xs={12} sm={2}>
              <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} />} label='French' name="french" />
            </Grid>
            <Grid item xs={12} sm={2}>
              <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} />} label='Line Item' name='lineitem'/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} />} label='Profit & Overhead' name='profit'/>
            </Grid>
            <Grid item xs={12} sm={2}>
              <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} />} label='Inspection' name='inspection'/>
            </Grid>

            <Grid item xs={12} sm={3}>
              <FormControl fullWidth>
                <Controller
                  name='overahead_per'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      type='text'
                      value={value}
                      label='Overhead %'
                      onChange={onChange}
                      error={Boolean(errors.overahead_per)}
                      placeholder='0'
                      aria-describedby='validation-basic-email'
                    />
                  )}
                />
                {errors.overahead_per && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-email'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={3}>
              <FormControl fullWidth>
                <Controller
                  name='profit_per'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      type='text'
                      value={value}
                      label='Profit %'
                      onChange={onChange}
                      error={Boolean(errors.profit_per)}
                      placeholder='0'
                      aria-describedby='validation-basic-email'
                    />
                  )}
                />
                {errors.profit_per && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-email'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={3}>
              <FormControl fullWidth>
                <Controller
                  name='discount_per'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      type='text'
                      value={value}
                      label='Discount %'
                      onChange={onChange}
                      error={Boolean(errors.discount_per)}
                      placeholder='0'
                      aria-describedby='validation-basic-email'
                    />
                  )}
                />
                {errors.discount_per && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-email'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel
                  id='validation-basic-source-name'
                  error={Boolean(errors.kit)}
                  htmlFor='validation-basic-source-name'
                >
                  Select Kit
                </InputLabel>
                <Controller
                  name='kit'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label='Select Customer'
                      onChange={onChange}
                      error={Boolean(errors.kit)}
                      labelId='validation-basic-source-name'
                      aria-describedby='validation-basic-source-name'
                      placeholder='Select kit'
                    >
                      <MenuItem value='End of job'>End of job</MenuItem>
                      <MenuItem value='After 15 days'>After 15 days</MenuItem>
                      <MenuItem value='30 days'>30 days</MenuItem>
                      <MenuItem value='Custom date'>Custom date</MenuItem>
                    </Select>
                  )}
                />
                {errors.kit && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-source-name'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel
                  id='validation-basic-source-name'
                  error={Boolean(errors.charge)}
                  htmlFor='validation-basic-source-name'
                >
                  Charge Code
                </InputLabel>
                <Controller
                  name='charge'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label='Select Customer'
                      onChange={onChange}
                      error={Boolean(errors.charge)}
                      labelId='validation-basic-source-name'
                      aria-describedby='validation-basic-source-name'
                      placeholder='Select Source Name'
                    >
                      <MenuItem value='End of job'>End of job</MenuItem>
                      <MenuItem value='After 15 days'>After 15 days</MenuItem>
                      <MenuItem value='30 days'>30 days</MenuItem>
                      <MenuItem value='Custom date'>Custom date</MenuItem>
                    </Select>
                  )}
                />
                {errors.charge && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-source-name'>
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

export default AddPage
