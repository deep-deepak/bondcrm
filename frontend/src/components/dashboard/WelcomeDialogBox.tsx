// ** React Imports
import { Ref, useState, forwardRef, ReactElement, ChangeEvent, SetStateAction, Dispatch } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Fade, { FadeProps } from '@mui/material/Fade'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import { styled } from '@mui/material/styles'
import ListItem from '@mui/material/ListItem'
import List, { ListProps } from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import LinearProgress from '@mui/material/LinearProgress'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
// ** Third Party Imports
import Payment from 'payment'
import { Focused } from 'react-credit-cards'

// ** Util Import
import { formatCVC, formatExpirationDate, formatCreditCardNumber } from 'src/@core/utils/format'

// ** Styles Import
import 'react-credit-cards/es/styles-compiled.css'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import moment from 'moment'
import Link from '../miscellaneous/Link'
import NumberFormat from '../miscellaneous/NumberFormat'
import { numberFormatInShort } from 'src/helpers'
import { updateLastLogin } from 'src/services/authentication'

const Transition = forwardRef(function Transition(
  props: FadeProps & { children?: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Fade ref={ref} {...props} />
})

type Props = {
  useShow: () => [boolean, Dispatch<SetStateAction<boolean>>],
  last_login_date: string
  name: string
}

const StyledList = styled(List)<ListProps>(({ theme }) => ({
  '& .MuiListItem-root': {
    border: `1px solid ${theme.palette.divider}`,
    '&:first-of-type': {
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius
    },
    '&:last-child': {
      borderBottomLeftRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius
    },
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '& .MuiListItemText-root': {
      margin: theme.spacing(0, 0, 2),
      '& .MuiTypography-root': {
        fontWeight: 500
      }
    }
  }
}))

const WelcomeDialogBox = ({ useShow, last_login_date = "", name = "" }: Props) => {
  // ** States
  const date = last_login_date ? moment(last_login_date) : moment();
  const [show, setShow] = useShow();


  const handleClose = async (event: any, reason?: "backdropClick" | "escapeKeyDown") => {
    if (reason !== "backdropClick") {
      setShow(false)
      await updateLastLogin();
    }
  }

  return (
    <Dialog
      fullWidth
      open={show}
      maxWidth='sm'
      scroll='body'
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <DialogContent
        sx={{
          position: 'relative',
          pb: theme => `${theme.spacing(8)} !important`,
          // px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
          pt: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(10.5)} !important`]
        }}
      >
        <IconButton size='small' onClick={handleClose} sx={{ position: 'absolute', right: '1rem', top: '1rem' }}>
          <Icon icon='tabler:x' />
        </IconButton>
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography variant='h5' sx={{ mb: 3 }}>
            Welcome Back {name}! 🎉
          </Typography>
          <Typography variant='body2'>Last login was on <Typography component='span' sx={{ color: (theme) => theme.palette.primary.main }}>{date.format('dddd, Do MMM, YYYY')}</Typography></Typography>
        </Box>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <StyledList disablePadding>
              <ListItem>
                <ListItemAvatar>
                  <CustomAvatar skin='light' variant='rounded' color='error' sx={{ height: 36, width: 36 }}>
                    <Icon icon='tabler:brand-asana' />
                  </CustomAvatar>
                </ListItemAvatar>
                <Box sx={{ width: '100%' }}>
                  <ListItemText primary='You have 10 uncompleted tasks.' />
                  <LinearProgress color='error' value={90} sx={{ height: 5 }} variant='determinate' />
                </Box>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <CustomAvatar skin='light' variant='rounded' color='warning' sx={{ height: 36, width: 36 }}>
                    <Icon icon='tabler:alert-triangle' />
                  </CustomAvatar>
                </ListItemAvatar>
                <Box sx={{ width: '100%' }}>
                  <ListItemText primary='You have 6 pending estimates.' />
                  <LinearProgress color='warning' value={55} sx={{ height: 5 }} variant='determinate' />
                </Box>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <CustomAvatar skin='light' variant='rounded' color='error' sx={{ height: 36, width: 36 }}>
                    <Icon icon='tabler:calendar-plus' />
                  </CustomAvatar>
                </ListItemAvatar>
                <Box sx={{ width: '100%' }}>
                  <ListItemText primary='You have 15 gained jobs which are not scheduled yet.' />
                  <LinearProgress color='error' value={88} sx={{ height: 5 }} variant='determinate' />
                </Box>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <CustomAvatar skin='light' variant='rounded' color='success' sx={{ height: 36, width: 36 }}>
                    <Icon icon='tabler:bell-z' />
                  </CustomAvatar>
                </ListItemAvatar>
                <Box sx={{ width: '100%' }}>
                  <ListItemText primary='You have 5 ongoing jobs.' />
                  <LinearProgress color='success' value={70} sx={{ height: 5 }} variant='determinate' />
                </Box>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <CustomAvatar skin='light' variant='rounded' color='info' sx={{ height: 36, width: 36 }}>
                    <Icon icon='tabler:moneybag' />
                  </CustomAvatar>
                </ListItemAvatar>
                <Box sx={{ width: '100%' }}>
                  <ListItemText primary={<>You have ${numberFormatInShort(200)} of account receivables out of ${numberFormatInShort(2000)}.</>} />
                  <LinearProgress color='info' value={10} sx={{ height: 5 }} variant='determinate' />
                </Box>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <CustomAvatar skin='light' variant='rounded' color='primary' sx={{ height: 36, width: 36 }}>
                    <Icon icon='tabler:building-carousel' />
                  </CustomAvatar>
                </ListItemAvatar>
                <Box sx={{ width: '100%' }}>
                  <ListItemText primary={<>Please review <Typography color='primary' component='span'>WIP</Typography> tab to monitor your ongoing costs.</>} />
                </Box>
              </ListItem>
            </StyledList>
          </Grid>
        </Grid>
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant='h5' sx={{ mb: 3, color: (theme) => theme.palette.success.main }}>
            Have A Great Day 👏
          </Typography>
          <Typography variant='body2'>
            <Typography component='span'>Marat</Typography> & <Typography component='span'>Darren</Typography> appreciate your hard work!
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions
        sx={{
          justifyContent: 'center',
          px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
          pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
        }}
      >
        {/* <Link href='/dashboard' > */}
        <Button variant='contained' sx={{ mr: 1 }} onClick={handleClose}>
          Go To Dashboard
        </Button>
        {/* </Link> */}
        <Button variant='outlined' color='secondary' onClick={handleClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default WelcomeDialogBox
