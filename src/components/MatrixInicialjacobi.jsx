import { useState } from 'react';
import { Input, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import jacobi from '../utils/Jacobi';

const MatrixInicialJacobi = ({ matrix, handleChangeCell, setMatrix, maxIter, err }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [soluciones, setSoluciones] = useState([]);

    const handleBtnCalcular = () => {
        // Obtener la matriz de coeficientes y el vector constante
        const A = matrix.map(row => row.slice(0, -1));
        const b = matrix.map(row => row[row.length - 1]);
        const solution = jacobi(A, b, err, maxIter);
        setSoluciones(solution);
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
                    <ModalHeader>Soluciones alcansadas</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <p>Iteraciones realizadas: {maxIter}</p>
                        <p></p>
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

MatrixInicialJacobi.propTypes = {
    matrix: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    handleChangeCell: PropTypes.func.isRequired,
    setMatrix: PropTypes.func.isRequired,
    maxIter: PropTypes.isRequired,
    err: PropTypes.isRequired
};

export default MatrixInicialJacobi;