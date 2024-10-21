import React from 'react'
import { Box, Container, Typography, TextField, Button, Grid, Paper } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useSnackbar } from 'notistack'
import { useAuth } from 'hooks/useAuth'
import UserService from 'services/UserService'

const SettingsPage = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { user } = useAuth()

  // Formik for personal data update
  const personalDataFormik = useFormik({
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Krstné meno je povinné'),
      lastName: Yup.string().required('Priezvisko je povinné'),
      email: Yup.string().email('Neplatný formát emailu').required('Email je povinný'),
      role: Yup.string().required('Rola je povinná')
    }),
    onSubmit: async values => {
      try {
        await UserService.updateUser(user.id, values)
        enqueueSnackbar('Údaje boli úspešne aktualizované', { variant: 'success' })
      } catch (error) {
        enqueueSnackbar(error.response.data.message, { variant: 'error' })
      }
    }
  })

  // Formik for password update
  const passwordFormik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      password: Yup.string().min(8, 'Heslo musí mať aspoň 8 znakov').required('Heslo je povinné'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Heslá sa musia zhodovať')
        .required('Potvrďte heslo')
    }),
    onSubmit: async values => {
      try {
        await UserService.updatePassword(user.id, values)
        enqueueSnackbar('Heslo bolo úspešne aktualizované', { variant: 'success' })
      } catch (error) {
        console.error('Error updating password:', error)
        enqueueSnackbar(error.response.message, { variant: 'error' })
      }
    }
  })

  return (
    <>
      <Container maxWidth='md' sx={{ mt: 4 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Nastavenia osobného účtu
        </Typography>
        <Grid container spacing={4}>
          {/* Personal Data Form */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '350px'
              }}
            >
              <Box>
                <Typography variant='h4' gutterBottom>
                  Úprava osobných údajov
                </Typography>
                <form onSubmit={personalDataFormik.handleSubmit}>
                  <TextField
                    fullWidth
                    margin='normal'
                    label='Krstné meno'
                    name='firstName'
                    value={personalDataFormik.values.firstName}
                    onChange={personalDataFormik.handleChange}
                    error={personalDataFormik.touched.firstName && Boolean(personalDataFormik.errors.firstName)}
                    helperText={personalDataFormik.touched.firstName && personalDataFormik.errors.firstName}
                  />
                  <TextField
                    fullWidth
                    margin='normal'
                    label='Priezvisko'
                    name='lastName'
                    value={personalDataFormik.values.lastName}
                    onChange={personalDataFormik.handleChange}
                    error={personalDataFormik.touched.lastName && Boolean(personalDataFormik.errors.lastName)}
                    helperText={personalDataFormik.touched.lastName && personalDataFormik.errors.lastName}
                  />
                  <TextField
                    fullWidth
                    margin='normal'
                    label='Email'
                    name='email'
                    type='email'
                    value={personalDataFormik.values.email}
                    onChange={personalDataFormik.handleChange}
                    error={personalDataFormik.touched.email && Boolean(personalDataFormik.errors.email)}
                    helperText={personalDataFormik.touched.email && personalDataFormik.errors.email}
                  />
                  <Box sx={{ textAlign: 'right', mt: 2 }}>
                    <Button type='submit' variant='contained' color='primary'>
                      Uložiť zmeny
                    </Button>
                  </Box>
                </form>
              </Box>
            </Paper>
          </Grid>

          {/* Password Form */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '350px'
              }}
            >
              <Box>
                <Typography variant='h4' gutterBottom>
                  Zmena hesla
                </Typography>
                <form onSubmit={passwordFormik.handleSubmit}>
                  <TextField
                    fullWidth
                    margin='normal'
                    label='Nové heslo'
                    name='password'
                    type='password'
                    value={passwordFormik.values.password}
                    onChange={passwordFormik.handleChange}
                    error={passwordFormik.touched.password && Boolean(passwordFormik.errors.password)}
                    helperText={passwordFormik.touched.password && passwordFormik.errors.password}
                  />
                  <TextField
                    fullWidth
                    margin='normal'
                    label='Potvrďte heslo'
                    name='confirmPassword'
                    type='password'
                    value={passwordFormik.values.confirmPassword}
                    onChange={passwordFormik.handleChange}
                    error={passwordFormik.touched.confirmPassword && Boolean(passwordFormik.errors.confirmPassword)}
                    helperText={passwordFormik.touched.confirmPassword && passwordFormik.errors.confirmPassword}
                  />
                  <Box sx={{ textAlign: 'right', mt: 2 }}>
                    <Button type='submit' variant='contained' color='primary'>
                      Uložiť heslo
                    </Button>
                  </Box>
                </form>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default SettingsPage
