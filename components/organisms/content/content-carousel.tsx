'use client'

import { Carousel } from '@mantine/carousel';

const ContentCarousel = () => {
    return (
        <Carousel
        withIndicators
        height={200}
        slideSize={{ base: '50%', sm: '50%', md: '33.333333%' }}
        slideGap={{ base: 'md', sm: 'md' }}
        loop
        align="start"
  
    >
      <Carousel.Slide className='bg-blue-200'>1</Carousel.Slide>
      <Carousel.Slide className='bg-blue-200'>2</Carousel.Slide>
      <Carousel.Slide className='bg-blue-200'>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
    );
}

export default ContentCarousel;
