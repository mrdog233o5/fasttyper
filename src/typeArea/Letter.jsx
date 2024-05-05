import PropTypes from 'prop-types';

function Letter({ letter }) {
    return (
        <span className='letter'>{letter}</span>
    )
}

Letter.propTypes = {
    letter: PropTypes.string
}


export default Letter;