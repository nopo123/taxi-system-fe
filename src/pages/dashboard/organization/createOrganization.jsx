import React, { useEffect } from 'react'
import { Button, Container, TextField, Typography, Snackbar, Box } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate, useParams } from 'react-router'
import { useSnackbar } from 'notistack'
import OrganizationService from 'services/OrganizationService'
import Loader from 'components/Loader'

const CreateOrganization = () => {
  // Initial values for the form
  const { id } = useParams()
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()
  const [loading, setLoading] = React.useState(false)
  const [editing, setEditing] = React.useState(id ? false : true)

  const initialValues = {
    name: '',
    address: ''
  }

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Meno spoločnosti je povinné'),
    address: Yup.string().required('Adresa spoločnosti je povinná')
  })

  // Formik form setup
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async values => {
      try {
        if (id) {
          await OrganizationService.update(id, values)
          enqueueSnackbar('Spoločnosť bola úspešne aktualizovaná', { variant: 'success' })
          navigate('/dashboard/organization')
          return
        }
        await OrganizationService.create(values)
        enqueueSnackbar('Spoločnosť bola úspešne vytvorená', { variant: 'success' })
        navigate('/dashboard/organization')
      } catch (error) {
        enqueueSnackbar(error.response.data.message, { variant: 'error' })
      }
    }
  })

  useEffect(() => {
    if (id) {
      setLoading(true)
      const fetchOrganization = async () => {
        try {
          const data = await OrganizationService.findOne(id)
          formik.setFieldValue('name', data.name)
          formik.setFieldValue('address', data.address)
          enqueueSnackbar('Spoločnosť bola úspešne načítaná', { variant: 'success' })
        } catch (error) {
          enqueueSnackbar(error.response.data.message, { variant: 'error' })
        }
      }
      fetchOrganization()
      setLoading(false)
    }
  }, [id])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container maxWidth='sm'>
          <Box display='flex' flexDirection='column'>
            <Typography variant='h4' gutterBottom style={{ textAlign: 'center' }}>
              Vytvorenie spoločnosti
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant='contained' color='primary' onClick={() => navigate('/dashboard/organization')}>
                Späť
              </Button>
            </Box>

            <form onSubmit={formik.handleSubmit} noValidate>
              <TextField
                fullWidth
                id='name'
                name='name'
                label='Názov spoločnosti'
                margin='normal'
                value={formik.values.name}
                disabled={!editing}
                variant={!editing ? 'standard' : 'outlined'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />

              <TextField
                fullWidth
                id='address'
                name='address'
                label='Adresa'
                margin='normal'
                disabled={!editing}
                variant={!editing ? 'standard' : 'outlined'}
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />

              {!id && (
                <Button color='primary' variant='contained' fullWidth type='submit' sx={{ marginTop: 2 }}>
                  Vytvorit spoločnosť
                </Button>
              )}
              {id && editing && (
                <Button color='primary' variant='contained' fullWidth type='submit' sx={{ marginTop: 2 }}>
                  Aktualizovať spoločnosť
                </Button>
              )}
              {id && editing && (
                <Button color='primary' variant='contained' fullWidth sx={{ marginTop: 2 }} onClick={() => setEditing(false)}>
                  Zrušiť
                </Button>
              )}
              {id && !editing && (
                <Button color='primary' variant='contained' fullWidth onClick={() => setEditing(true)} sx={{ marginTop: 2 }}>
                  Upraviť spoločnosť
                </Button>
              )}
            </form>
          </Box>
        </Container>
      )}
    </>
  )
}

export default CreateOrganization
