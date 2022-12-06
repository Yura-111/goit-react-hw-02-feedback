// import PropTypes  from "prop-types";


export const Statistic = ({
    good,
    neutral,
    bad,
}) => {
    return (
        <>
        <h3>Please leave feedback</h3>
        <button>Good{good}</button>
        <button>Neutral{neutral}</button>
        <button>Bad{bad}</button>
    </>
    );
}

// Statistic.propTypes = {
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,
// }