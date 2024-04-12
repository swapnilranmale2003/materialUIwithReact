import React from 'react'
import {Typography} from '@mui/material'
function MyTypography() {
  return (
    <div>
      <Typography variant='h1'>h1 Heading</Typography>
      <Typography variant='h2'>h2 Heading</Typography>
      <Typography variant='h3'>h3 Heading</Typography>
      <Typography variant='h4' component='h1' gutterBottom>h4 Heading</Typography>
      <Typography variant='h5'>h5 Heading</Typography>
      <Typography variant='h6'>h6 Heading</Typography>


      <Typography variant='subtitle1'>Subtitle1</Typography>
      <Typography variant='subtitle2'>Subtitle2</Typography>


      <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat saepe fuga sunt dolores porro dolore, iusto unde! Dolorum vel amet natus, rerum, iste, voluptatem velit quidem perferendis reprehenderit ullam officia?</Typography> 
      <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis illum voluptatem? Iste et quaerat expedita dicta illo consequuntur assumenda! Aut vero exercitationem molestias quae consequuntur consectetur dolor ea cupiditate?</Typography>

    </div>
  )
}

export default MyTypography
