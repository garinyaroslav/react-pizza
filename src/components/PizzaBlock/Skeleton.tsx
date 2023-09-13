import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton: React.FC = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="135" cy="128" r="120" />
    <rect x="0" y="300" rx="10" ry="10" width="280" height="88" />
    <rect x="-1" y="417" rx="10" ry="10" width="90" height="45" />
    <rect x="127" y="417" rx="25" ry="25" width="152" height="45" />
    <rect x="1" y="259" rx="10" ry="10" width="280" height="29" />
  </ContentLoader>
);
