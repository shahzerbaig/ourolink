import { Text } from "@chakra-ui/react";

interface Props {
  children: string;
  onClick: () => void;
  fontSize?: string;
}

const TextButton = ({ children, onClick, fontSize = "15px" }: Props) => {
  return (
    <Text
      as="button"
      cursor="pointer"
      fontSize={fontSize}
      bg=""
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </Text>
  );
};

export default TextButton;
