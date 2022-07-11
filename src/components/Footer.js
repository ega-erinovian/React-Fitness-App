import React from 'react'
import { Box, Stack, Typography, IconButton } from "@mui/material"
import { Instagram, GitHub, LinkedIn  } from '@mui/icons-material'

import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt='80px'>
      <Stack gap='40px' alignItems='center' p='40px 24px'>
        <img src={Logo} alt='logo' width='200px' height='40px'/>
        <Typography variant='h5'> Made with 💪 by ega-erinovian</Typography>
        <Stack direction='row' gap='20px'>
          <a href='https://www.instagram.com/egaerinovian' target='_blank' rel='noreferrer'><IconButton><Instagram /></IconButton></a>
          <a href='https://www.github.com/ega-erinovian' target='_blank' rel='noreferrer'><IconButton><GitHub /></IconButton></a>
          <a href='https://www.linkedin.com/in/ega-erinovian/' target='_blank' rel='noreferrer'><IconButton><LinkedIn /></IconButton></a>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Footer