'use client';

import {
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import DropShadowBox from './DropShadowBox';

const HumanDetails = [
  {
    name: 'First Last',
    image: '/images/humans/demo.png',
  },
  {
    name: 'First Last',
    image: '/images/humans/demo.png',
  },
  {
    name: 'First Last',
    image: '/images/humans/demo.png',
  },
  {
    name: 'First Last',
    image: '/images/humans/demo.png',
  },
  {
    name: 'First Last',
    image: '/images/humans/demo.png',
  },
  {
    name: 'First Last',
    image: '/images/humans/demo.png',
  },
  {
    name: 'First Last',
    image: '/images/humans/demo.png',
  },
  {
    name: 'First Last',
    image: '/images/humans/demo.png',
  },
  {
    name: 'First Last',
    image: '/images/humans/demo.png',
  },
  {
    name: 'First Last',
    image: '/images/humans/demo.png',
  },
];

const HumansSection = () => {
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
          src="/images/icons/orangeBall.svg"
          alt="Orange Ball"
        />
        <Image
          h={{ base: '3rem', md: '5rem', '2xl': '6rem' }}
          src="/images/icons/greenPill.svg"
          alt="Green Pill"
        />
        <Heading
          color="#282826"
          fontFamily="var(--font-roboto-condensed)"
          fontSize={{ base: '3rem', md: '5rem', '2xl': '6rem' }}
          fontWeight="600"
        >
          HUMANS
        </Heading>
      </Flex>
      <SimpleGrid
        templateColumns={{
          base: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
          '2xl': 'repeat(5, 1fr)',
        }}
        gap="1rem"
      >
        {HumanDetails.map(({ image, name }, index) => (
          <DropShadowBox key={index} w="full" aspectRatio="0.9">
            <Image src={image} alt={name} w="full" h="full" objectFit="cover" />
            <Flex
              pos="absolute"
              w="full"
              top="50%"
              left="0"
              h="50%"
              background="linear-gradient(180.09deg, rgba(0, 0, 0, 0) 0.08%, #010101 124.07%)"
              alignItems="flex-end"
              justifyContent="center"
              pb="0.8rem"
            >
              <Text color="white" fontSize="1.5rem" fontWeight="600">
                {name}
              </Text>
            </Flex>
          </DropShadowBox>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default HumansSection;
