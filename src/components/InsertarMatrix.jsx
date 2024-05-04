import { Input, Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const InsertarMatrix = ({ columns, rows, setColumns, setRows, handleBtn }) => {
    return (
        <div className='container__inputs'>
            <div className='title'>
                <p className='eliminar'>Hola</p>
                <h1>Elige el tamaño de la matriz: </h1>
            </div>
            <div className='input'>
                <p>Columnas</p>
                <Input
                    htmlSize={4}
                    width='10rem'
                    value={columns}
                    onChange={(e) => setColumns(e.target.value)}
                    type='number'
                />
            </div>
            <div className='input'>
                <p>Filas</p>
                <Input
                    htmlSize={4}
                    width='10rem'
                    value={rows}
                    onChange={(e) => setRows(e.target.value)}
                    type='number'
                />
            </div>
            <div className='input'>
                <p className='eliminar'>p</p>
                <Button onClick={handleBtn} colorScheme='linkedin'>
                    Cargar Matriz
                </Button>
            </div>
        </div>
    )
}

InsertarMatrix.propTypes = {
    setColumns: PropTypes.func.isRequired,
    setRows: PropTypes.func.isRequired,
    handleBtn: PropTypes.func.isRequired
};


export default InsertarMatrix