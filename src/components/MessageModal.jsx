import { Button, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const MessageModal = ({ errorDialogOpen, handleCloseErrorDialog  }) => {
    return (
        <AlertDialog isOpen={errorDialogOpen} onClose={handleCloseErrorDialog}>
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader>Error</AlertDialogHeader>
                    <AlertDialogBody>Solo se permiten matrices cuadradas</AlertDialogBody>
                    <AlertDialogFooter>
                        <Button colorScheme="linkedin" onClick={handleCloseErrorDialog}>
                            Entendido
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    )
}

MessageModal.propTypes = {
    errorDialogOpen: PropTypes.bool.isRequired,
    handleCloseErrorDialog: PropTypes.func.isRequired
};



export default MessageModal