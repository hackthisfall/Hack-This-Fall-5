import { Flex } from '@chakra-ui/react';

const DropShadowBox = ({
  children,
  w="full",
  borderRadius="1rem",
  aspectRatio="1",
}: {
  children: React.ReactNode;
  w?: string;
  borderRadius?: string;
  aspectRatio?: string;
}) => {
  return (
    <Flex
      w={w}
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="6px 6px 0px 0px #282826"
      border="2px solid #282826"
      borderRadius={borderRadius}
      flexDir="column"
      overflow="hidden"
      aspectRatio={aspectRatio}
    >
      {children}
    </Flex>
  );
};

export default DropShadowBox;
