import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import AppMaterialButton from "../components/AppMaterialButton";
import Modal from "react-modal";

Modal.setAppElement("#root");

interface AppAlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  src: string;
  alt: string;
}

const customStyles: Modal.Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    padding: "20px 30px",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
  },
};

const AppAlertDialog: React.FC<AppAlertDialogProps> = ({
  isOpen,
  onClose,
  message,
  src,
  alt,
}) => {
  return (
    <Modal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Custom Dialog"
      shouldCloseOnOverlayClick={true}
    >
      <Box height="5px" />

      <Flex justifyContent="center">
        <Image alt={alt} src={src} boxSize="50px"></Image>
      </Flex>
      <Box height="25px" />

      <Text textAlign="center">{message}</Text>
      <Box height="40px" />
      <Flex justifyContent="end">
        <AppMaterialButton onClick={onClose}>Close</AppMaterialButton>
      </Flex>
    </Modal>
  );
};

export default AppAlertDialog;
