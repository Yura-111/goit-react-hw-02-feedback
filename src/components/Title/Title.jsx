import PropTypes from 'prop-types';
import { TitleStyled } from 'components/Title/Title.styled';

export const Title = ({ title }) => {
  return <TitleStyled>{title}</TitleStyled>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};