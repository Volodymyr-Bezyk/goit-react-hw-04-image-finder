import React from 'react';
import ContentLoader from 'react-content-loader';

const GallerySkeleton = props => (
  <ContentLoader
    speed={2}
    width={1366}
    height={400}
    viewBox="0 0 1366 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="129" y="116" rx="0" ry="0" width="1" height="1" />
    <rect x="70" y="60" rx="0" ry="0" width="400" height="240" />
    <rect x="495" y="60" rx="0" ry="0" width="400" height="240" />
    <rect x="920" y="60" rx="0" ry="0" width="400" height="240" />
  </ContentLoader>
);

export default GallerySkeleton;
