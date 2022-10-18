import { Watch } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#5aba58"
        ariaLabel="watch-loading"
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'center',
        }}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
