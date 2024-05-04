import { Input, Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const InsertarMatrixJacobi = ({ columns, rows, setColumns, setRows, handleBtn, setMaxIter, maxIter, setTol, tol }) => {
    return (
        <div className='container__inputs'>
            <div className='title'>
                <p className='eliminar'>Hola</p>
                <h1>Datos iniciales: </h1>
            </div>
            <div className='input'>
                <p>Columnas necesarias</p>
                <Input
                    htmlSize={4}
                    width='10rem'
                    value={columns}
                    onChange={(e) => setColumns(e.target.value)}
                    type='number'
                />
            </div>
            <div className='input'>
                <p>Filas nesesarias</p>
                <Input
                    htmlSize={4}
                    width='10rem'
                    value={rows}
                    onChange={(e) => setRows(e.target.value)}
                    type='number'
                />
            </div>
            <div className='input'>
                <p>Max. Iteraciones</p>
                <Input
                    htmlSize={4}
                    width='10rem'
                    value={maxIter}
                    onChange={(e) => setMaxIter(e.target.value)}
                    type='number'
                />
            </div>
            <div className='input'>
                <p>Error</p>
                <Input
                    htmlSize={4}
                    width='10rem'
                    value={tol}
                    onChange={(e) => setTol(e.target.value)}
                    type='number'
                />
            </div>
            <div className='input'>
                <p className='eliminar'>p</p>
                <Button onClick={handleBtn} colorScheme='linkedin'>
                    Cargar matrix
                </Button>
            </div>
        </div>
    )
}

InsertarMatrixJacobi.propTypes = {
    setColumns: PropTypes.func.isRequired,
    setRows: PropTypes.func.isRequired,
    handleBtn: PropTypes.func.isRequired,
    setMaxIter: PropTypes.func.isRequired
};


export default InsertarMatrixJacobi