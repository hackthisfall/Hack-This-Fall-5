'use client';

import { Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import DropShadowBox from './DropShadowBox';

const TracksDetails = [
  {
    name: 'IOT',
    image: '/images/tracks/iot.svg',
  },
  {
    name: 'IOT',
    image: '/images/tracks/iot.svg',
  },
  {
    name: 'IOT',
    image: '/images/tracks/iot.svg',
  },
  {
    name: 'IOT',
    image: '/images/tracks/iot.svg',
  },
  {
    name: 'IOT',
    image: '/images/tracks/iot.svg',
  },
  {
    name: 'IOT',
    image: '/images/tracks/iot.svg',
  },
];

const TracksSection = () => {
  return (
    <Flex
      background="#F9F5F2"
      w="full"
      className="container-1200"
      flexDir="column"
      gap="3rem"
    >
      <Flex
        justifyContent={{ base: 'center', md: 'flex-start' }}
        alignItems="center"
        gap="1rem"
        maxW="100%"
      >
        <Image
          h={{ base: '3rem', md: '5rem', '2xl': '6rem' }}
          src="/images/icons/backGreenArrows.svg"
          alt="Back Green Arrows"
        />
        <Image
          h={{ base: '3rem', md: '5rem', '2xl': '6rem' }}
          src="/images/icons/yellowBall.svg"
          alt="Yellow Ball"
        />
        <Heading
          color="#282826"
          fontFamily="var(--font-roboto-condensed)"
          fontSize={{ base: '3rem', md: '5rem', '2xl': '6rem' }}
          fontWeight="600"
        >
          TRACKS
        </Heading>
      </Flex>
      <SimpleGrid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
          '2xl': 'repeat(3, 1fr)',
        }}
        gap="1rem"
      >
        {TracksDetails.map(({ image, name }, index) => (
          <DropShadowBox key={index} w="full" aspectRatio="1.5">
            <Flex w="full" h="full" flexDir="column" alignItems="center" justifyContent="center">
              <Image
                src={image}
                alt={name}
                w="50%"
                h="50%"
              />
              <Text color="black" fontSize="2rem" fontWeight="600">
                {name}
              </Text>
            </Flex>
          </DropShadowBox>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default TracksSection;
