import { Load } from './Button.styled';

const LoadMore = ({ onClick, loader }) => {
  return (
    <Load type="button" onClick={onClick} disabled={loader}>
      Load More
    </Load>
  );
};

export default LoadMore;
