import React from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import { Divider, Typography } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

interface FormInputs {
  name: string
  estimate: string
  service: string
  address: string
  certificate: string
  warranty:string
  description: string
}

const defaultValues = {
  name: '',
  estimate: '',
  service: '',
  address: '',
  certificate: '',
  warranty:'',
  description: ''
}

export default function WarrantyAdd() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormInputs>({ defaultValues })

  const onSubmit = () => toast.success('Form Submitted')

  return (
    <Card>
      <CardContent>
        <Typography variant='h6'>Add Warranty</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12}>
              <FormControl fullWidth>
                <InputLabel
                  id='validation-basic-province'
                  error={Boolean(errors.estimate)}
                  htmlFor='validation-basic-province'
                >
                  Select Estimate
                </InputLabel>
                <Controller
                  name='estimate'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label='Country'
                      onChange={onChange}
                      error={Boolean(errors.estimate)}
                      labelId='validation-basic-province'
                      aria-describedby='validation-basic-province'
                      placeholder='Select estimate'
                    >
                      <MenuItem value='41000'>41000</MenuItem>
                    </Select>
                  )}
                />
                {errors.estimate && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-province'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12}>
              <FormControl fullWidth>
                <Controller
                  name='name'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      type='text'
                      value={value}
                      label='Customer Name'
                      onChange={onChange}
                      error={Boolean(errors.name)}
                      placeholder='Enter the name'
                      aria-describedby='validation-basic-name'
                    />
                  )}
                />
                {errors.name && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-email'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12}>
              <FormControl fullWidth>
                <Controller
                  name='service'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      type='text'
                      value={value}
                      label='Service'
                      onChange={onChange}
                      error={Boolean(errors.service)}
                      placeholder='Service Name'
                      aria-describedby='validation-basic-name'
                    />
                  )}
                />
                {errors.service && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-email'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12}>
              <FormControl fullWidth>
                <Controller
                  name='address'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      type='text'
                      value={value}
                      label='Address'
                      onChange={onChange}
                      error={Boolean(errors.address)}
                      placeholder='Address'
                      aria-describedby='validation-basic-name'
                    />
                  )}
                />
                {errors.address && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-email'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12}>
              <FormControl fullWidth>
                <InputLabel
                  id='validation-basic-province'
                  error={Boolean(errors.certificate)}
                  htmlFor='validation-basic-province'
                >
                  Certificate Type
                </InputLabel>
                <Controller
                  name='certificate'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label='Select Warranty Certificate'
                      onChange={onChange}
                      error={Boolean(errors.certificate)}
                      labelId='validation-basic-province'
                      aria-describedby='validation-basic-province'
                      placeholder='Select Warranty Certificate'
                    >
                      <MenuItem value='asbestos'>Asbestos</MenuItem>
                      <MenuItem value='mold removal'>Mold Removal</MenuItem>
                    </Select>
                  )}
                />
                {errors.certificate && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-province'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12}>
              <FormControl fullWidth>
                <InputLabel
                  id='validation-basic-province'
                  error={Boolean(errors.estimate)}
                  htmlFor='validation-basic-province'
                >
                  Warranty Years
                </InputLabel>
                <Controller
                  name='warranty'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label='Select Warranty Years'
                      onChange={onChange}
                      error={Boolean(errors.warranty)}
                      labelId='validation-basic-province'
                      aria-describedby='validation-basic-province'
                      placeholder='Select Warranty Years'
                    >
                      <MenuItem value='0'>0 years</MenuItem>
                      <MenuItem value='1'>1 years</MenuItem>
                      <MenuItem value='3'>3 years</MenuItem>
                      <MenuItem value='5'>5 years</MenuItem>
                      <MenuItem value='10'>10 years</MenuItem>
                    </Select>
                  )}
                />
                {errors.warranty && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-province'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12}>
              <FormControl fullWidth>
                <Controller
                  name='description'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      type='text'
                      value={value}
                      label='Description'
                      onChange={onChange}
                      error={Boolean(errors.description)}
                      placeholder='Enter description'
                      aria-describedby='validation-basic-name'
                    />
                  )}
                />
                {errors.description && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-email'>
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
