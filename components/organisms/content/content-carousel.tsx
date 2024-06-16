'use client'

import { Carousel } from '@mantine/carousel';

const ContentCarousel = () => {
    return (
        <Carousel
            sx={{ maxWidth: 320 }}
            mx="auto"
            height={200}
            styles={{
                control: {
                    '&[data-inactive]': {
                        opacity: 0,
                        cursor: 'default',
                    },
                },
            }}
        >
            <Carousel.Slide>1</Carousel.Slide>
            <Carousel.Slide>2</Carousel.Slide>
            <Carousel.Slide>3</Carousel.Slide>
            {/* ...other slides */}
        </Carousel>
    );
}

export default ContentCarousel;
