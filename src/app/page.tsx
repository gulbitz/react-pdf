'use client'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import BasicDocument from './pdf/page';
import { FormEvent, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Bitz React-Form-PDF
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Page() {

  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = {
      companyName: event.currentTarget.companyName.value,
      address: event.currentTarget.address.value,
      phone: event.currentTarget.phone.value,
      email: event.currentTarget.email.value,
      signature: sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'),
    };

    localStorage.setItem('formData', JSON.stringify(formData));

    router.push('/pdf', { scroll: false });

  };

  // Signature Canvas
  const sigCanvas = useRef({} as any);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            ReactJS Form PDF
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Fill Invoice PDF
          </Typography>

          <form onSubmit={handleSubmit}>
            <React.Fragment>
              <Typography variant="h6" gutterBottom>
                Shipping Details
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="companyName"
                    name="companyName"
                    label="Company name"
                    fullWidth
                    autoComplete="company"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Shipping Address"
                    fullWidth
                    autoComplete="shipping address"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phone"
                    name="phone"
                    label="Phone Number"
                    fullWidth
                    autoComplete="phone"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email Address"
                    fullWidth
                    autoComplete="email"
                    variant="standard"
                  />
                </Grid>
              </Grid>
            </React.Fragment>

            <React.Fragment>
              <Typography variant="h6" sx={{ mt: 3 }} gutterBottom>
                Signature
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} >
                  <SignatureCanvas
                    ref={sigCanvas}
                    penColor='black'
                    canvasProps={{
                      width: 500,
                      height: 200,
                      className: 'sigCanvas',
                      style: { border: '1px dashed #000000' }
                    }} />
                </Grid>
                {/* Clear, Edit, Trim, Done, Buttons */}
                <Grid item>
                  <Button type="button" variant="contained" onClick={() => {
                    sigCanvas.current.clear()
                  }}>
                    Clear Signature
                  </Button>
                </Grid>
              </Grid>
            </React.Fragment>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button type="submit" variant="contained" sx={{ mt: 3, ml: 1 }}
                onClick={() => {
                  const trimmedDataURL = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
                  console.log(trimmedDataURL);
                }}
              >
                Download Invoice
              </Button>
            </Box>
          </form>

        </Paper>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}