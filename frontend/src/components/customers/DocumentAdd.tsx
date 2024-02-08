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
  type: string
  image: string
}

const defaultValues = {
  name: '',
  type: '',
  image: ''
}

export default function DocumentAdd() {
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
        <Typography variant='h6'>Add Email Template</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={5}>
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
                      label='Attachment Name'
                      onChange={onChange}
                      error={Boolean(errors.name)}
                      placeholder='Enter the attachment name'
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
                <InputLabel
                  id='validation-basic-province'
                  error={Boolean(errors.type)}
                  htmlFor='validation-basic-province'
                >
                  Select Estimate
                </InputLabel>
                <Controller
                  name='type'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label='Attachment Type'
                      onChange={onChange}
                      error={Boolean(errors.type)}
                      labelId='validation-basic-province'
                      aria-describedby='validation-basic-province'
                      placeholder='Select attachment type'
                    >
                      <MenuItem value='pdf'>PDF</MenuItem>
                      <MenuItem value='image'>Image</MenuItem>
                      <MenuItem value='document'>Document</MenuItem>
                      <MenuItem value='excel'>Excel</MenuItem>
                    </Select>
                  )}
                />
                {errors.type && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-province'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12}>
              <FormControl fullWidth>
                <Controller
                  name='image'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                    InputLabelProps={{
                        shrink: true,
                      }}
                      type='file'
                      value={value}
                      label='Attachment File'
                      onChange={onChange}
                      error={Boolean(errors.image)}
                      placeholder='Choose your image'
                      aria-describedby='validation-basic-name'
                    />
                  )}
                />
                {errors.image && (
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
