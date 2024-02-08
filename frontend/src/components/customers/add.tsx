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
import { Divider } from '@mui/material'


interface FormInputs {
    name: string
    address: string
    postal: string
    secondary_customer: Boolean
    secondary_name?: string
    email: string
    phone: string
    mobile: string
    branch: number | string
    province: number | string
    customer_type: string
    building_type: string
    job_status: number | string
    service: number | string
    source_type: string
    source_name: string
    status: string
    notes?: string
}

const defaultValues = {
    name: '',
    address: '',
    postal: '',
    secondary_customer: false,
    secondary_name: '',
    email: '',
    phone: '',
    mobile: '',
    branch: '',
    province: '',
    customer_type: '',
    building_type: '',
    job_status: '',
    service: '',
    source_type: '',
    source_name: '',
    status: '1',
    notes: '',
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
                                <Controller
                                    name='name'
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { value, onChange } }) => (
                                        <TextField
                                            value={value}
                                            label='Name'
                                            onChange={onChange}
                                            placeholder='Enter Name'
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
                                            error={Boolean(errors.address)}
                                            aria-describedby='validation-basic-postal'
                                        />
                                    )}
                                />
                                {errors.postal && (
                                    <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-postal'>
                                        This field is required
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl>
                                <Controller
                                    name='secondary_customer'
                                    control={control}
                                    render={({ field }) => (
                                        <FormControlLabel
                                            label='Secondary Customer'
                                            sx={errors.secondary_customer ? { color: 'error.main' } : null}
                                            control={
                                                <Checkbox
                                                    {...field}
                                                    name='validation-basic-secondary_customer'
                                                    sx={errors.secondary_customer ? { color: 'error.main' } : null}
                                                />
                                            }
                                        />
                                    )}
                                />
                            </FormControl>
                        </Grid>
                        {
                            watch('secondary_customer') && (
                                <Grid item xs={12} sm={12}>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth>
                                            <Controller
                                                name='secondary_name'
                                                control={control}
                                                rules={{ required: true }}
                                                render={({ field: { value, onChange } }) => (
                                                    <TextField
                                                        value={value}
                                                        label='Secondary Name'
                                                        onChange={onChange}
                                                        placeholder='Enter Secondary Name'
                                                        error={Boolean(errors.secondary_name)}
                                                        aria-describedby='validation-basic-secondary_name'
                                                    />
                                                )}
                                            />
                                            {errors.secondary_name && (
                                                <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-secondary_name'>
                                                    This field is required
                                                </FormHelperText>
                                            )}
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            )
                        }
                        <Grid item xs={12} sm={12}>
                            <Divider variant="middle" />
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <Controller
                                    name='email'
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { value, onChange } }) => (
                                        <TextField
                                            type='email'
                                            value={value}
                                            label='Email'
                                            onChange={onChange}
                                            error={Boolean(errors.email)}
                                            placeholder='carterleonard@gmail.com'
                                            aria-describedby='validation-basic-email'
                                        />
                                    )}
                                />
                                {errors.email && (
                                    <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-email'>
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
                                            type='text'
                                            value={value}
                                            label='Caller Id'
                                            onChange={onChange}
                                            error={Boolean(errors.phone)}
                                            placeholder='+1 2345 234 133'
                                            aria-describedby='validation-basic-phone'
                                        />
                                    )}
                                />
                                {errors.phone && (
                                    <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-phone'>
                                        This field is required
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <Controller
                                    name='mobile'
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { value, onChange } }) => (
                                        <TextField
                                            type='text'
                                            value={value}
                                            label='Mobile'
                                            onChange={onChange}
                                            error={Boolean(errors.mobile)}
                                            placeholder='+1 2345 234 133'
                                            aria-describedby='validation-basic-mobile'
                                        />
                                    )}
                                />
                                {errors.mobile && (
                                    <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-mobile'>
                                        This field is required
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel
                                    id='validation-basic-branch'
                                    error={Boolean(errors.branch)}
                                    htmlFor='validation-basic-branch'
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
                                            label='Country'
                                            onChange={onChange}
                                            error={Boolean(errors.branch)}
                                            labelId='validation-basic-branch'
                                            aria-describedby='validation-basic-branch'
                                            placeholder='Select Branch'
                                        >
                                            <MenuItem value='UK'>UK</MenuItem>
                                            <MenuItem value='USA'>USA</MenuItem>
                                            <MenuItem value='Australia'>Australia</MenuItem>
                                            <MenuItem value='Germany'>Germany</MenuItem>
                                        </Select>
                                    )}
                                />
                                {errors.branch && (
                                    <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-branch'>
                                        This field is required
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>


                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel
                                    id='validation-basic-province'
                                    error={Boolean(errors.province)}
                                    htmlFor='validation-basic-province'
                                >
                                    Province
                                </InputLabel>
                                <Controller
                                    name='province'
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { value, onChange } }) => (
                                        <Select
                                            value={value}
                                            label='Country'
                                            onChange={onChange}
                                            error={Boolean(errors.province)}
                                            labelId='validation-basic-province'
                                            aria-describedby='validation-basic-province'
                                            placeholder='Select province'
                                        >
                                            <MenuItem value='UK'>UK</MenuItem>
                                            <MenuItem value='USA'>USA</MenuItem>
                                            <MenuItem value='Australia'>Australia</MenuItem>
                                            <MenuItem value='Germany'>Germany</MenuItem>
                                        </Select>
                                    )}
                                />
                                {errors.province && (
                                    <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-province'>
                                        This field is required
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <Controller
                                    name='customer_type'
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { value, onChange } }) => (
                                        <TextField
                                            type='text'
                                            value={value}
                                            label='Customer Type'
                                            onChange={onChange}
                                            error={Boolean(errors.customer_type)}
                                            placeholder='Enter as Owner/Tenant/Others'
                                            aria-describedby='validation-basic-customer_type'
                                        />
                                    )}
                                />
                                {errors.customer_type && (
                                    <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-customer_type'>
                                        This field is required
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>


                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel
                                    id='validation-basic-building_type'
                                    error={Boolean(errors.building_type)}
                                    htmlFor='validation-basic-building_type'
                                >
                                    Building Type
                                </InputLabel>
                                <Controller
                                    name='building_type'
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { value, onChange } }) => (
                                        <Select
                                            value={value}
                                            label='Country'
                                            onChange={onChange}
                                            error={Boolean(errors.building_type)}
                                            labelId='validation-basic-building_type'
                                            aria-describedby='validation-basic-building_type'
                                            placeholder='Select building_type'
                                        >
                                            <MenuItem value='UK'>UK</MenuItem>
                                        </Select>
                                    )}
                                />
                                {errors.building_type && (
                                    <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-building_type'>
                                        This field is required
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>


                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel
                                    id='validation-basic-job-status'
                                    error={Boolean(errors.job_status)}
                                    htmlFor='validation-basic-job-status'
                                >
                                    Job Status
                                </InputLabel>
                                <Controller
                                    name='job_status'
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { value, onChange } }) => (
                                        <Select
                                            value={value}
                                            label='Country'
                                            onChange={onChange}
                                            error={Boolean(errors.job_status)}
                                            labelId='validation-basic-job-status'
                                            aria-describedby='validation-basic-job-status'
                                            placeholder='Select Status'
                                        >
                                            <MenuItem value='UK'>Ongoing</MenuItem>
                                        </Select>
                                    )}
                                />
                                {errors.job_status && (
                                    <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-job-status'>
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
                                <InputLabel
                                    id='validation-basic-source-type'
                                    error={Boolean(errors.source_type)}
                                    htmlFor='validation-basic-source-type'
                                >
                                    Source Type
                                </InputLabel>
                                <Controller
                                    name='source_type'
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { value, onChange } }) => (
                                        <Select
                                            value={value}
                                            label='Country'
                                            onChange={onChange}
                                            error={Boolean(errors.source_type)}
                                            labelId='validation-basic-source-type'
                                            aria-describedby='validation-basic-source-type'
                                            placeholder='Select Source Type'
                                        >
                                            <MenuItem value='Customer Other'>Customer Other</MenuItem>
                                            <MenuItem value='Customer Referal'>Customer Referal</MenuItem>
                                            <MenuItem value='Network Referal'>Network Referal</MenuItem>
                                            <MenuItem value='Online'>Online</MenuItem>
                                        </Select>
                                    )}
                                />
                                {errors.source_type && (
                                    <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-source_type'>
                                        This field is required
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>


                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel
                                    id='validation-basic-source-name'
                                    error={Boolean(errors.source_name)}
                                    htmlFor='validation-basic-source-name'
                                >
                                    Source Name
                                </InputLabel>
                                <Controller
                                    name='source_name'
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { value, onChange } }) => (
                                        <Select
                                            value={value}
                                            label='Country'
                                            onChange={onChange}
                                            error={Boolean(errors.source_name)}
                                            labelId='validation-basic-source-name'
                                            aria-describedby='validation-basic-source-name'
                                            placeholder='Select Source Name'
                                        >
                                            <MenuItem value='UK'>UK</MenuItem>
                                            <MenuItem value='USA'>USA</MenuItem>
                                            <MenuItem value='Australia'>Australia</MenuItem>
                                            <MenuItem value='Germany'>Germany</MenuItem>
                                        </Select>
                                    )}
                                />
                                {errors.source_name && (
                                    <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-source-name'>
                                        This field is required
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>


                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel
                                    id='validation-basic-status'
                                    error={Boolean(errors.status)}
                                    htmlFor='validation-basic-status'
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
                                            label='Status'
                                            onChange={onChange}
                                            error={Boolean(errors.status)}
                                            labelId='validation-basic-status'
                                            aria-describedby='validation-basic-status'
                                            placeholder='Select Status'
                                        >
                                            <MenuItem value='1'>Active</MenuItem>
                                            <MenuItem value='0'>In-Active</MenuItem>
                                        </Select>
                                    )}
                                />
                                {errors.status && (
                                    <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-status'>
                                        This field is required
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
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
                                            placeholder="Enter something here as a customer note..."
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
