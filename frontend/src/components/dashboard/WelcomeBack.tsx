// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import WelcomeDialogBox from './WelcomeDialogBox'
import { useState } from 'react'
import { useAuth } from 'src/hooks/useAuth'
import moment from 'moment'

const Illustration = styled('img')(({ theme }) => ({
  right: 10,
  bottom: 0,
  position: 'absolute',
  [theme.breakpoints.down('sm')]: {
    right: 5,
    width: 110
  }
}))

const WelcomeBack = () => {
  const { user } = useAuth();
  
  const currentDateValue = moment(moment().format('YYYY-MM-DD'));
  const lastLoginDateValue = user ? moment(moment(user.last_login).format('YYYY-MM-DD')) : currentDateValue;
  
  const [show, setShow] = useState<boolean>(currentDateValue.valueOf() > lastLoginDateValue.valueOf());

  return (
    <>
      <Card sx={{ position: 'relative' }}>
        <CardContent sx={{ pb: '0px !important' }}>
          <Typography variant='h6' sx={{ fontWeight: 500 }}>
            Welcome Back John! 🎉
          </Typography>
          <Typography sx={{ mb: 5, color: 'text.secondary' }}>
            <Typography component='span' sx={{ mr: 1, fontWeight: 500, color: 'primary.main' }}>
              Last Login:
            </Typography>
            {currentDateValue.fromNow()}</Typography>
          <Button variant='outlined' onClick={() => setShow(true)}>Daily Info</Button>
          <Illustration width={116} alt='congratulations john' src='/images/cards/congratulations-john.png' />
        </CardContent>
      </Card>
      <WelcomeDialogBox useShow={() => [show, setShow]} name={user ? user.name : ""} last_login_date={lastLoginDateValue.format('YYYY-MM-DD')} />
    </>
  )
}

export default WelcomeBack
