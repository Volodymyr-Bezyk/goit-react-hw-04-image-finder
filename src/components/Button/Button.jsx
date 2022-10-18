import PropTypes from 'prop-types';
import { Load } from './Button.styled';

const LoadMore = ({ onClick, loader }) => {
  return (
    <Load type="button" onClick={onClick} disabled={loader}>
      Load More
    </Load>
  );
};

LoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default LoadMore;
