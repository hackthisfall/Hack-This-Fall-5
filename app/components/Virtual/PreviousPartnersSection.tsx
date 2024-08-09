'use client';

import { Flex, Heading, Image, Link, SimpleGrid } from '@chakra-ui/react';
import DropShadowBox from './DropShadowBox';

const PartnerDetails = [
  {
    name: 'IOT',
    link: 'IOT',
    image: '/images/tracks/iot.svg',
    bgColor: '#F9F5F2',
  },
  {
    name: 'IOT',
    link: 'IOT',
    image: '/images/tracks/iot.svg',
    bgColor: '#F9F5F2',
  },
  {
    name: 'IOT',
    link: 'IOT',
    image: '/images/tracks/iot.svg',
    bgColor: '#2862AE',
  },
  {
    name: 'IOT',
    link: 'IOT',
    image: '/images/tracks/iot.svg',
    bgColor: '#F9F5F2',
  },
  {
    name: 'IOT',
    link: 'IOT',
    image: '/images/tracks/iot.svg',
    bgColor: '#F9F5F2',
  },
  {
    name: 'IOT',
    link: 'IOT',
    image: '/images/tracks/iot.svg',
    bgColor: 'linear-gradient(180deg, #1AAFFF 11.59%, #0063E0 88.04%)',
  },
  {
    name: 'IOT',
    link: 'IOT',
    image: '/images/tracks/iot.svg',
    bgColor: '#F9F5F2',
  },
  {
    name: 'IOT',
    link: 'IOT',
    image: '/images/tracks/iot.svg',
    bgColor: '#F9F5F2',
  },
  {
    name: 'IOT',
    link: 'IOT',
    image: '/images/tracks/iot.svg',
    bgColor: '#1ED860',
  },
  {
    name: 'IOT',
    link: 'IOT',
    image: '/images/tracks/iot.svg',
    bgColor: '#F9F5F2',
  },
  {
    name: 'IOT',
    link: 'IOT',
    image: '/images/tracks/iot.svg',
    bgColor: '#F9F5F2',
  },
  {
    name: 'IOT',
    link: 'IOT',
    image: '/images/tracks/iot.svg',
    bgColor: '#F9F5F2',
  },
];

const PreviousPartnersSection = () => {
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
          src="/images/icons/purplePill.svg"
          alt="Purple Pill"
        />
        <Image
          h={{ base: '3rem', md: '5rem', '2xl': '6rem' }}
          src="/images/icons/orangeStar.svg"
          alt="Orange Star"
        />
        <Heading
          color="#282826"
          fontFamily="var(--font-roboto-condensed)"
          fontSize={{ base: '3rem', md: '5rem', '2xl': '6rem' }}
          fontWeight="600"
        >
          PREVIOUS PARTNERS
        </Heading>
      </Flex>
      <SimpleGrid
        templateColumns={{
          base: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
          lg: 'repeat(5, 1fr)',
          '2xl': 'repeat(6, 1fr)',
        }}
        gap="1rem"
      >
        {PartnerDetails.map(({ image, link, bgColor, name }, index) => (
          <DropShadowBox key={index} w="full" aspectRatio="2">
            <Flex
              as={Link}
              href={link}
              target="_blank"
              w="full"
              h="full"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              background={bgColor}
            >
              <Image src={image} alt={name} h="50%" />
            </Flex>
          </DropShadowBox>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default PreviousPartnersSection;
