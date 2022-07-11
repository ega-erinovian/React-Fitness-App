import React from 'react'
import { Box, Stack, Typography } from "@mui/material"

import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt='80px'>
      <Stack gap='40px' alignItems='center' p='40px 24px'>
        <img src={Logo} alt='logo' width='200px' height='40px'/>
        <Typography variant='h5'> Made with 💪 by ega-erinovian</Typography>
      </Stack>
    </Box>
  )
}

export default Footer