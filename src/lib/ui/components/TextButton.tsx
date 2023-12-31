import { Text } from "@chakra-ui/react";

interface Props {
  children: string;
  onClick: () => void;
}

const TextButton = ({ children, onClick }: Props) => {
  return (
    <Text
      as="button"
      cursor="pointer"
      fontSize="15px"
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </Text>
  );
};

export default TextButton;
