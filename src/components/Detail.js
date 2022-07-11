import React, { useEffect } from 'react'
import { Stack, Button, Typography } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({exerciseDetail}) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
    const extraDetail = [
      {
        icon: BodyPartImage,
        name: bodyPart,
      },
      {
        icon: TargetImage,
        name: target,
      },
      {
        icon: EquipmentImage,
        name: equipment,
      }
    ]

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth'});
    }, [name])
    
  return (
    <Stack gap='60px' sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading='lazy' className="detail-image"/>
      <Stack sx={{ gap: { lg: '35px', xs: '20px' }}}>
        <Typography variant='h3' textTransform='capitalize' fontWeight='bold'>
          {name}
        </Typography>
        <Typography variant='h6'>
          Exercise keep you strong. <strong>{name}</strong> is one of the best exercises to target your <strong>{target}</strong>. It will help you improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item, index) => (
          <Stack key={index} direction='row' gap='24px' alignItems='center'>
            <Button sx={{ background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt={item.name} />
            </Button>
            <Typography variant='h5' textTransform='capitalize' fontWeight='bold'>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail