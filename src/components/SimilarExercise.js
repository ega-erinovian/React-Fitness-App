import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercise = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ m: { xs: '20px' } }}>
      <Typography variant="h3" textTransform='capitalize' mb={5}>Exercises that target the same muscle group</Typography>
      <Stack direction='row' sx={{ p:'2', position:'relative' }} mb={20}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader/>}
      </Stack>
      <Typography variant="h3" textTransform='capitalize' mb={5}>Exercises that use the same equipment</Typography>
      <Stack direction='row' sx={{ p:'2', position:'relative' }}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader/> }
      </Stack>
    </Box>
  )
}

export default SimilarExercise