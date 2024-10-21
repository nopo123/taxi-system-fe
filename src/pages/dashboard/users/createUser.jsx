import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { TextField, Button, Box, Typography, MenuItem, Select, InputLabel, FormControl, FormHelperText, Container } from '@mui/material'
import { useAuth } from 'hooks/useAuth'
import UserService from 'services/UserService'
import { useSnackbar } from 'notistack'
import OrganizationService from 'services/OrganizationService'
import { role } from 'constants'
import { useNavigate } from 'react-router'
import Loader from 'components/Loader'

const validationSchema = Yup.object({
  firstName: Yup.string().required('Krsnté meno je povinné').min(2, 'Krstné meno musí mať aspoň 2 znaky'),
  lastName: Yup.string().required('Priezvisko je povinné').min(2, 'Priezvisko musí mať aspoň 2 znaky'),
  email: Yup.string().email('Nepovolený formát emailu').required('Email je povinný'),
  password: Yup.string().required('Heslo je povinné').min(4, 'Heslo musí mať aspoň 4 znakov'),
  role: Yup.string().required('Rola je povinná'),
  organizationId: Yup.number().required('Spoločnosť je povinná')
})

const CreateUserForm = () => {
  const { user } = useAuth()
  const { enqueueSnackbar } = useSnackbar()
  const [organizations, setOrganizations] = React.useState([])
  const navigate = useNavigate()
  const [loading, setLoading] = React.useState(false)

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: '',
      organizationId: user.organizationId ? user.organizationId : ''
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      try {
        const data = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
          role: values.role,
          organizationId: values.organizationId
        }
        await UserService.createUser(data)
        enqueueSnackbar('Vytvorenie používateľa prebehlo úspešne', { variant: 'success' })
        navigate('/dashboard/users')
      } catch (error) {
        enqueueSnackbar(error.response.data.message, { variant: 'error' })
      }
    }
  })

  useEffect(() => {
    setLoading(true)
    const fetchOrganization = async () => {
      try {
        if (!user.organizationId && user.role !== role.super_admin) return

        if (user.role === role.super_admin) {
          const organizations = await OrganizationService.getAll()
          setOrganizations(organizations)
          formik.setFieldValue('organizationId', organizations[0].id)
          return
        }
      } catch (error) {
        enqueueSnackbar(error.response.data.message, { variant: 'error' })
      }
    }
    fetchOrganization()
    setLoading(false)
  }, [user])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container maxWidth='sm'>
          <Box sx={{ marginTop: 4, textAlign: 'center' }}>
            <div>
              <Typography variant='h4' gutterBottom>
                Vytvorenie používateľa
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button onClick={() => navigate('/dashboard/users')} color='primary' variant='contained'>
                  Späť
                </Button>
              </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                margin='normal'
                id='firstName'
                name='firstName'
                label='Krstné meno'
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />

              <TextField
                fullWidth
                margin='normal'
                id='lastName'
                name='lastName'
                label='Priezvisko'
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />

              <TextField
                fullWidth
                margin='normal'
                id='email'
                name='email'
                label='Email'
                type='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />

              <TextField
                fullWidth
                margin='normal'
                id='password'
                name='password'
                label='Heslo'
                type='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />

              {user.role === role.super_admin && (
                <FormControl fullWidth margin='normal' error={formik.touched.organizationId && Boolean(formik.errors.organizationId)}>
                  <InputLabel id='organization-label'>Spoločnosť</InputLabel>
                  <Select
                    labelId='organization-label'
                    id='organizationId'
                    name='organizationId'
                    value={formik.values.organizationId}
                    onChange={formik.handleChange}
                    label='Spoločnosť'
                  >
                    {organizations.map(organization => (
                      <MenuItem key={organization.id} value={organization.id}>
                        {organization.name}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>{formik.touched.organizationId && formik.errors.organizationId}</FormHelperText>
                </FormControl>
              )}

              <FormControl fullWidth margin='normal' error={formik.touched.role && Boolean(formik.errors.role)}>
                <InputLabel id='role-label'>Rola</InputLabel>
                <Select labelId='role-label' id='role' name='role' value={formik.values.role} onChange={formik.handleChange} label='Rola'>
                  <MenuItem value='user'>Zamestnanec</MenuItem>
                  <MenuItem value='admin'>Manažér</MenuItem>
                </Select>
                <FormHelperText>{formik.touched.role && formik.errors.role}</FormHelperText>
              </FormControl>

              <Box sx={{ mt: 2 }}>
                <Button color='primary' variant='contained' fullWidth type='submit'>
                  Vytvoriť Používateľa
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      )}
    </>
  )
}

export default CreateUserForm
