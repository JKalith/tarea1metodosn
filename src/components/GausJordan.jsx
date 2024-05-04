import { useState } from 'react';
import './GausJordan.css';
import MatrizInicial from './MatrizInicial';
import MessageModal from './MessageModal';
//import PasosEliminacionGauseana from './PasosEliminacionGauseana';
import InsertarMatrix from './InsertarMatrix';

const GausJordan = () => {
    const [columns, setColumns] = useState('');
    const [rows, setRows] = useState('');
    const [matrix, setMatrix] = useState([]);
    const [errorDialogOpen, setErrorDialogOpen] = useState(false);
    



    const handleBtn = () => {
        if (columns !== rows) {
            setErrorDialogOpen(true);
        } else {
            // Generar la matriz con las dimensiones dadas
            const newMatrix = [];
            for (let i = 0; i < parseInt(rows) ; i++) {
                const newRow = [];
                for (let j = 0; j <= parseInt(columns) ; j++) {
                    newRow.push(''); // Inicializa los valores como números
                }
                newMatrix.push(newRow);
            }
            setMatrix(newMatrix);
        }
    };

    const handleChangeCell = (i, j, value) => {
        const newMatrix = [...matrix];
        newMatrix[i][j] = value;
        setMatrix(newMatrix);
    };

    const handleCloseErrorDialog = () => {
        setErrorDialogOpen(false);
    };

    return (
        <div className='container'>
            <InsertarMatrix columns={columns} setColumns={setColumns} rows={rows} setRows={setRows} handleBtn={handleBtn} />
            {matrix.length > 0 && (
                <div className='matrix__inicial'>
                    <h2>Matriz Inicial</h2>
                    <MatrizInicial matrix={matrix} handleChangeCell={handleChangeCell}  setMatrix={setMatrix}/>
                </div>
            )}
            <MessageModal errorDialogOpen={errorDialogOpen} handleCloseErrorDialog={handleCloseErrorDialog} />
            {//<PasosEliminacionGauseana gaussianEliminationSteps={gaussianEliminationSteps} />
            }
        </div>

    );
};

export default GausJordan;