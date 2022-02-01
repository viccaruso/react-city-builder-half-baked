import React from 'react';

export default function City({ waterfrontId, skylineId, castleId }) {
  return (
    <div className="city">
      {/* this component should take 3 props: waterfrontId, skylineId, and castlId */}
      {/* use these 3 ids in img tags load approriate images that live in the public directory */}
      <img src={`waterfront-${waterfrontId}.jpeg`} />
      <img src={`skyline-${skylineId}.jpeg`} />
      <img src={`castle-${castleId}.jpeg`} />
    </div>
  );
}
