import React, { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container, TextField, Button, Typography, Box, Grid } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useAuth } from 'hooks/useAuth';
import SignatureCanvas from 'react-signature-canvas';
import OrderService from 'services/OrderService';
import { useNavigate, useParams } from 'react-router';
import Loader from 'components/Loader';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import OrderUserService from 'services/OrderUserService';
import Autocomplete from '@mui/material/Autocomplete';

const EvidenceCreate = () => {
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const signatureRef1 = useRef(null);
  const signatureRef2 = useRef(null);
  const { user } = useAuth();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(id ? false : true);
  const [loading, setLoading] = useState(false);
  const [orderUsers, setOrderUsers] = useState([]);

  const formik = useFormik({
    initialValues: {
      userId: user.id,
      firstName: '',
      lastName: '',
      orderUserId: '',
      route: '',
      date: new Date(),
      price: 0,
      distance: 0,
      secondDriver: 0,
      waitingTime: 0,
      driverSignature: '',
      clientSignature: ''
    },
    validationSchema: Yup.object({
      userId: Yup.number().required('User ID is required'),
      firstName: Yup.string().required('Krstné meno je povinné'),
      lastName: Yup.string().required('Priezvisko je povinné'),
      route: Yup.string().required('Trasa je povinná'),
      date: Yup.date().required('Dátum je povinný'),
      price: Yup.number().required('Celková suma je povinná').min(0, 'Celková cena musí byť kladné číslo'),
      distance: Yup.number().required('Km/taxi je povinné').min(0, 'Km/taxi musí byť kladné číslo'),
      secondDriver: Yup.number().required('Číslo pre druhý vodič je povinný'),
      waitingTime: Yup.number().required('Čakacia doba je povinná').min(0, 'Čakacia doba musí byť kladné číslo'),
      driverSignature: Yup.string().required('Podpis vodiča je povinný'),
      clientSignature: Yup.string().required('Podpis pasažiera je povinný')
    }),
    onSubmit: async (values) => {
      try {
        const formData = {
          ...values,
          price: Math.round(parseFloat(values.price) * 100) / 100,
          distance: Math.round(parseFloat(values.distance) * 100) / 100,
          waitingTime: Math.round(parseFloat(values.waitingTime) * 100) / 100
        };
        if (!id) {
          await OrderService.createOrder(formData);
          clearCanvas(signatureRef1.current);
          clearCanvas(signatureRef2.current);
        } else {
          delete formData.userId;
          delete formData.driverSignature;
          delete formData.clientSignature;

          await OrderService.updateOrder(id, formData);
          setEditing(false);
        }
        const text = id ? 'Záznam bol úspešne upravený' : 'Záznam bol úspešne vytvorený';
        enqueueSnackbar(text, { variant: 'success' });
        navigate('/dashboard/evidence/orders');
      } catch (error) {
        enqueueSnackbar(error.response.data.message, { variant: 'error' });
      }
    }
  });

  const handleFirstSignature = () => {
    formik.setFieldValue('driverSignature', signatureRef1.current.toDataURL());
  };

  const handleSecondSignature = () => {
    formik.setFieldValue('clientSignature', signatureRef2.current.toDataURL());
  };

  const clearCanvas = (ref, typeOfSignature) => {
    ref.clear();
    if (typeOfSignature === 'driverSignature') {
      formik.setFieldValue('driverSignature', '');
    } else {
      formik.setFieldValue('clientSignature', '');
    }
  };

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    const fetchOrder = async () => {
      try {
        const order = await OrderService.findOne(id);
        formik.setValues({
          userId: order.user.id,
          firstName: order.firstName,
          lastName: order.lastName,
          route: order.route,
          date: order.date,
          price: order.price,
          distance: order.distance,
          secondDriver: order.secondDriver,
          waitingTime: order.waitingTime,
          driverSignature: order.driverSignature,
          clientSignature: order.clientSignature
        });
        enqueueSnackbar('Objednávka bola úspešne načítaná', { variant: 'success' });
      } catch (error) {
        enqueueSnackbar(error.response.data.message, { variant: 'error' });
      }
    };

    fetchOrder();
    setLoading(false);
  }, [id]);

  useEffect(() => {
    setLoading(true);
    const fetchOrderUsers = async () => {
      try {
        const orderUsers = await OrderUserService.getAll();
        setOrderUsers(orderUsers);
        enqueueSnackbar('Používatelia boli úspešne načítaní', { variant: 'success' });
      } catch (error) {
        enqueueSnackbar(error.response.data.message, { variant: 'error' });
      }
    };
    fetchOrderUsers();
    setLoading(false);
  }, []);

  const onChangeAutocomplete = (event, newValue) => {
    if (!newValue) {
      const _value = event && event.target ? event.target.value : null;
      const _splitValue = _value ? _value.split(' ') : [];
      formik.setValues({
        ...formik.values,
        orderUserId: null,
        firstName: _splitValue[0] || '',
        lastName: _splitValue[1] || ''
      });
      return;
    }
    const _orderUserId = newValue ? newValue.id : null;
    const _firstName = newValue ? newValue.firstName : '';
    const _lastName = newValue ? newValue.lastName : '';
    formik.setValues({
      ...formik.values,
      orderUserId: _orderUserId,
      firstName: _firstName,
      lastName: _lastName
    });
  };

  useEffect(() => {
    const price = Number(formik.values.distance) + Number(formik.values.waitingTime) + Number(formik.values.secondDriver);
    formik.setFieldValue('price', price);
  }, [formik.values.secondDriver, formik.values.waitingTime, formik.values.distance]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
          <Box>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
              Vytvorenie nového záznamu
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button color="primary" variant="contained" onClick={() => navigate('/dashboard/evidence/orders')} sx={{ mb: 2 }}>
                Späť
              </Button>
            </Box>
          </Box>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Autocomplete
                  id="free-solo-demo"
                  freeSolo
                  fullWidth
                  disabled={!editing}
                  variant={!editing ? 'standard' : 'outlined'}
                  options={orderUsers}
                  getOptionLabel={(option) => (typeof option === 'object' ? `${option.firstName} ${option.lastName}` : '')}
                  onInputChange={(event, value, reason) => {
                    if (reason === 'clear') {
                      onChangeAutocomplete(null, null);
                    }
                  }}
                  onChange={(event, newValue) => onChangeAutocomplete(event, newValue)}
                  renderInput={(params) => (
                    <TextField {...params} label="Zadajte meno" onChange={(event, newValue) => onChangeAutocomplete(event, newValue)} />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="Krstné meno"
                  disabled={true}
                  variant={'outlined'}
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                  onBlur={formik.handleBlur}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label="Priezvisko"
                  disabled={true}
                  variant={'outlined'}
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  onBlur={formik.handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="route"
                  name="route"
                  label="Trasa"
                  disabled={!editing}
                  variant={!editing ? 'standard' : 'outlined'}
                  value={formik.values.route}
                  onChange={formik.handleChange}
                  error={formik.touched.route && Boolean(formik.errors.route)}
                  helperText={formik.touched.route && formik.errors.route}
                  onBlur={formik.handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DateTimePicker']}>
                    <DateTimePicker
                      label="Dátum"
                      disabled={!editing}
                      variant={!editing ? 'standard' : 'outlined'}
                      value={formik.values.date ? dayjs(formik.values.date) : null}
                      onChange={(newValue) => {
                        formik.setFieldValue('date', newValue ? newValue.toISOString() : null);
                      }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="distance"
                  name="distance"
                  label="Km/taxi"
                  type="number"
                  step="0.01" // Allow decimal input
                  disabled={!editing}
                  variant={!editing ? 'standard' : 'outlined'}
                  value={formik.values.distance}
                  onChange={formik.handleChange}
                  error={formik.touched.distance && Boolean(formik.errors.distance)}
                  helperText={formik.touched.distance && formik.errors.distance}
                  onBlur={formik.handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="secondDriver"
                  name="secondDriver"
                  label="Druhý vodič"
                  disabled={!editing}
                  type="number"
                  step="0.01" // Allow decimal input
                  variant={!editing ? 'standard' : 'outlined'}
                  value={formik.values.secondDriver}
                  onChange={formik.handleChange}
                  error={formik.touched.secondDriver && Boolean(formik.errors.secondDriver)}
                  helperText={formik.touched.secondDriver && formik.errors.secondDriver}
                  onBlur={formik.handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="waitingTime"
                  name="waitingTime"
                  label="Čakacia doba"
                  type="number"
                  step="0.01" // Allow decimal input
                  disabled={!editing}
                  variant={!editing ? 'standard' : 'outlined'}
                  value={formik.values.waitingTime}
                  onChange={formik.handleChange}
                  error={formik.touched.waitingTime && Boolean(formik.errors.waitingTime)}
                  helperText={formik.touched.waitingTime && formik.errors.waitingTime}
                  onBlur={formik.handleBlur}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="price"
                  name="price"
                  label="Celková suma"
                  type="number"
                  step="0.01" // Allow decimal input
                  disabled={true}
                  variant={'outlined'}
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  error={formik.touched.price && Boolean(formik.errors.price)}
                  helperText={formik.touched.price && formik.errors.price}
                  onBlur={formik.handleBlur}
                />
              </Grid>
              {!id && (
                <>
                  <Grid item xs={12}>
                    <Typography variant="body1" gutterBottom>
                      Podpis vodiča
                    </Typography>
                    {formik.errors.driverSignature && (
                      <Typography variant="caption" color="error">
                        {formik.errors.driverSignature}
                      </Typography>
                    )}
                    <Box
                      sx={{
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        marginBottom: '1rem',
                        position: 'relative',
                        height: 200,
                        width: '100%'
                      }}
                    >
                      <SignatureCanvas
                        penColor="black"
                        canvasProps={{ className: 'signature' }}
                        ref={signatureRef1}
                        onEnd={handleFirstSignature}
                      />

                      <Button
                        onClick={() => {
                          clearCanvas(signatureRef1.current, 'driverSignature');
                        }}
                        sx={{
                          position: 'relative',
                          float: 'right',
                          backgroundColor: 'rgba(255,255,255,0.8)',
                          borderRadius: '5px',
                          padding: '0.3rem 0.6rem',
                          minWidth: 'auto',
                          '&:hover': {
                            backgroundColor: 'rgba(255,255,255,0.9)'
                          }
                        }}
                      >
                        Vyčistiť podpis vodiča
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" gutterBottom>
                      Podpis pasažiera
                    </Typography>
                    {formik.errors.clientSignature && (
                      <Typography variant="caption" color="error">
                        {formik.errors.clientSignature}
                      </Typography>
                    )}
                    <Box
                      sx={{
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        marginBottom: '1rem',
                        position: 'relative',
                        height: 200,
                        width: '100%'
                      }}
                    >
                      <SignatureCanvas
                        penColor="black"
                        canvasProps={{ className: 'signature' }}
                        ref={signatureRef2}
                        onEnd={handleSecondSignature}
                      />
                      <Button
                        onClick={() => {
                          clearCanvas(signatureRef2.current, 'clientSignature');
                        }}
                        sx={{
                          position: 'relative',
                          float: 'right',
                          backgroundColor: 'rgba(255,255,255,0.8)',
                          borderRadius: '5px',
                          padding: '0.3rem 0.6rem',
                          minWidth: 'auto',
                          '&:hover': {
                            backgroundColor: 'rgba(255,255,255,0.9)'
                          }
                        }}
                      >
                        Vyčistiť podpis pasažiera
                      </Button>
                    </Box>
                  </Grid>
                </>
              )}
              {id && (
                <>
                  <Grid item xs={12}>
                    <Typography variant="body1" gutterBottom>
                      Podpis vodiča
                    </Typography>
                    <img src={formik.values.driverSignature} alt="Driver signature" style={{ width: '100%', height: '200px' }} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" gutterBottom>
                      Podpis pasažiera
                    </Typography>
                    <img src={formik.values.clientSignature} alt="Client signature" style={{ width: '100%', height: '200px' }} />
                  </Grid>
                </>
              )}
              <Grid item xs={12}>
                {!id && (
                  <Button color="primary" variant="contained" fullWidth type="submit" sx={{ mt: 2 }}>
                    Vytvoriť
                  </Button>
                )}
                {id && editing && (
                  <Button color="primary" variant="contained" fullWidth type="submit" sx={{ mt: 2 }}>
                    Potvrdiť
                  </Button>
                )}
                {id && !editing && (
                  <Button color="primary" variant="contained" fullWidth sx={{ mt: 2 }} onClick={() => setEditing(!editing)}>
                    Upraviť
                  </Button>
                )}
                {id && editing && (
                  <Button color="primary" variant="contained" fullWidth sx={{ mt: 2 }} onClick={() => setEditing(!editing)}>
                    Zrušiť
                  </Button>
                )}
              </Grid>
            </Grid>
          </form>
        </Container>
      )}
    </>
  );
};

export default EvidenceCreate;
