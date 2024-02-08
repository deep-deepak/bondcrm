
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import {Typography} from "@mui/material"

// ** Icon Imports

import AddIcon from '@mui/icons-material/Add'
// ** Types Imports

import { CardContent, Divider, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import TextField from '@mui/material/TextField'


const AssignedTaskList = () => {
  // ** States

  return (
    <Card>
      <CardContent>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={2}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Select Task Type</InputLabel>
              <Select labelId='demo-simple-select-label' id='demo-simple-select' label='All' >
                <MenuItem value='all' defaultChecked>
                  All
                </MenuItem>
                <MenuItem value='complete'>Complete</MenuItem>
                <MenuItem value='today'>Today's</MenuItem>
                <MenuItem value='overdue'>Over Due</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={5}>
            <TextField id='outlined-basic' label='Search By Title...' variant='outlined' type='search' />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button variant='outlined' startIcon={<AddIcon />}>
              New Task
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5">Waiting</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5">Work in progress</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5">Completed</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default AssignedTaskList
