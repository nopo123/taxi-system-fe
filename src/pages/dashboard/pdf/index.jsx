import React from "react";
import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSnackbar } from "notistack";
import OrderService from "services/OrderService";

const Index = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  // Formik form validation schema
  const formik = useFormik({
    initialValues: {
      fromDate: "",
      toDate: "",
    },
    validationSchema: Yup.object({
      fromDate: Yup.date().required("Start date is required"),
      toDate: Yup.date()
        .required("End date is required")
        .min(Yup.ref("fromDate"), "End date cannot be before start date"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        // Make the API call to get the PDF data
        const response = await OrderService.getPdfOrders(values.fromDate, values.toDate, {
          responseType: 'arraybuffer', // Ensure the response type is arraybuffer to handle binary data
        });
    
        // Convert the array buffer to a Uint8Array
        const byteArray = new Uint8Array(response.data);
    
        // Create a Blob from the byte array
        const pdfBlob = new Blob([byteArray], { type: 'application/pdf' });
    
        // Create a URL for the Blob and download it
        const pdfUrl = URL.createObjectURL(pdfBlob);
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = `orders_${values.fromDate}_${values.toDate}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    
        // Release the URL object
        URL.revokeObjectURL(pdfUrl);
    
        enqueueSnackbar("PDF sa úspešne stiahlo", {
          variant: "success",
        });
      } catch (error) {
        enqueueSnackbar("Chyba pri stahovaní PDF", {
          variant: "error",
        });
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Stiahnutie PDF objednávok
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box display="flex" flexDirection="column" gap={3}>
          <TextField
            fullWidth
            id="fromDate"
            name="fromDate"
            label="Od dňa"
            type="date"
            value={formik.values.fromDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.fromDate && Boolean(formik.errors.fromDate)}
            helperText={formik.touched.fromDate && formik.errors.fromDate}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            fullWidth
            id="toDate"
            name="toDate"
            label="Do dňa"
            type="date"
            value={formik.values.toDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.toDate && Boolean(formik.errors.toDate)}
            helperText={formik.touched.toDate && formik.errors.toDate}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Download PDF"}
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default Index;