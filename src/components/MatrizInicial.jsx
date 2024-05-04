import { useState } from 'react';
import { Input, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import eliminarGaussiana from '../utils/GausJordan';

const MatrizInicial = ({ matrix, handleChangeCell, setMatrix }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [soluciones, setSoluciones] = useState([]);

    const handleBtnCalcular = () => {
        // Realizar eliminación gaussiana
        const soluciones = eliminarGaussiana(matrix);
        console.log(soluciones);
        setSoluciones(soluciones);
        setIsOpen(true);
    };

    const handleBtnLimpiar = () => {
        // Limpiar la matriz estableciendo todos los valores en blanco
        const matrizLimpia = matrix.map(row => row.map(() => ''));
        setMatrix(matrizLimpia);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div className='container__matrix'>
            <table className='matrix'>
                <tbody>
                    <tr>
                        {Array.from(Array(matrix[0].length - 1).keys()).map((index) => (
                            <td key={index}>
                                X{index + 1}
                            </td>
                        ))}
                        <td>b</td>
                    </tr>
                    {matrix.map((row, i) => (
                        <tr key={i}>
                            {row.map((cell, j) => (
                                <td key={j}>
                                    <Input
                                        htmlSize={2}
                                        width='10rem'
                                        value={cell}
                                        onChange={(e) => handleChangeCell(i, j, e.target.value)}
                                        type="number"
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="actions">
                <Button onClick={handleBtnCalcular} colorScheme='linkedin'>
                    Calcular
                </Button>
                <Button onClick={handleBtnLimpiar} colorScheme='linkedin'>
                    Limpiar
                </Button>
            </div>

            {/* Modal para mostrar las soluciones */}
            <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Soluciones</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {soluciones.map((solucion, index) => (
                            <div key={index}>
                                <p>X{index + 1}: {solucion}</p>
                            </div>
                        ))}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleCloseModal}>
                            Cerrar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

MatrizInicial.propTypes = {
    matrix: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    handleChangeCell: PropTypes.func.isRequired,
    setMatrix: PropTypes.func.isRequired
};

export default MatrizInicial;