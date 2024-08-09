import { Flex } from '@chakra-ui/react';

const Tabs = [
  {
    title: 'HOME',
  },
//   {
//     title: 'ABOUT',
//   },
  {
    title: 'TRACKS',
  },
//   {
//     title: 'PRIZE',
//   },
  {
    title: 'HUMANS',
  },
  {
    title: 'FAQ',
  },
];

const Header = ({
  currentSection,
  setCurrentSection,
}: {
  currentSection: string;
  setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Flex
      w="full"
      alignItems="center"
      justifyContent="space-between"
      borderY="2px solid #282826"
      background="#F9F5F2"
      className="container-1200"
      position="sticky"
      mt="2rem"
    >
      <Flex
        fontSize="1rem"
        fontFamily="--var(--font-roboto-condensed)"
        pr="2rem"
        borderRight="2px solid #282826"
        py="0.3rem"
        fontWeight="600"
      >
        HACK THIS FALL
      </Flex>
      <Flex gap="1rem" py="0.3rem" fontWeight="600">
        {Tabs.map(({ title }, index) => (
          <Flex
            color={currentSection === title ? '#282826' : '#00000066'}
            key={index}
            fontSize="1rem"
            fontFamily="--var(--font-roboto-condensed)"
            cursor="pointer"
            _hover={{
              color: '#282826',
            }}
            onClick={() => {
              setCurrentSection(title);
              document.querySelector(`#${title}`)!.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest',
              });
            }}
          >
            {title}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Header;
