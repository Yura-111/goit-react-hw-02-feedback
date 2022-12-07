import PropTypes from 'prop-types';
import {Container, Buttons} from 'components/StatisticButtons/StatisticButtons.styled'

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <Container>
            {options.map((option) => {
            const label = option.slice(0, 1).toUpperCase() + option.slice(1);
                return (
                    <Buttons key={option} onClick={onLeaveFeedback} name={option}>
                    {label}
                    </Buttons>
                );
            })}
        </Container>
    )

};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}