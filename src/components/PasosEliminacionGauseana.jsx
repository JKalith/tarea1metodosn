import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const PasosEliminacionGauseana = ({ solutions }) => {
    return (
        <div>
            <h2>Soluciones</h2>
            <div className="solutions-container">
                <Box borderWidth="1px" borderRadius="lg" p="4" mb="4">
                    <table className='solutions'>
                        <tbody>
                            {solutions.map((solution, i) => (
                                <tr key={i}>
                                    <td>{`x${i + 1}`}</td>
                                    <td>{solution}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Box>
            </div>
        </div>
    )
}

PasosEliminacionGauseana.propTypes = {
    solutions: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default PasosEliminacionGauseana;