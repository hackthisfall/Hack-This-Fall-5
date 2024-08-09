'use client';

import {
  Flex,
  Heading,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import DropShadowBox from './DropShadowBox';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

const FaqDetails = [
  {
    question: 'Why should I use Butter?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Why should I use Butter?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Why should I use Butter?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const FaqSection = () => {
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
          src="/images/icons/skinStar.svg"
          alt="Skin Star"
        />
        <Image
          h={{ base: '3rem', md: '5rem', '2xl': '6rem' }}
          src="/images/icons/yellowArrows.svg"
          alt="Yellow Arrows"
        />
        <Heading
          color="#282826"
          fontFamily="var(--font-roboto-condensed)"
          fontSize={{ base: '3rem', md: '5rem', '2xl': '6rem' }}
          fontWeight="600"
        >
          FAQS
        </Heading>
      </Flex>
      <Flex flexDir="column" gap="1rem">
        <Accordion allowMultiple display="flex" flexDir="column" gap="1rem">
          {FaqDetails.map(({ question, answer }, index) => (
            <AccordionItem
              boxShadow="6px 6px 0px 0px #282826"
              border="2px solid #282826"
              background="#FFF"
              borderRadius="1rem"
              key={index}
              p="1rem"
            >
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    _hover={{ background: '#FFF' }}
                  >
                    <Text
                      fontFamily="var(--font-outfit)"
                      fontWeight="500"
                      fontSize="1.2rem"
                    >
                      {question}
                    </Text>
                    {isExpanded ? (
                      <MinusIcon fontSize="1.2rem" />
                    ) : (
                      <AddIcon fontSize="1.2rem" />
                    )}
                  </AccordionButton>
                  <AccordionPanel
                    fontFamily="var(--font-outfit)"
                    fontWeight="400"
                    fontSize="1.2rem"
                    color="#808080"
                  >
                    {answer}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </Flex>
    </Flex>
  );
};

export default FaqSection;
