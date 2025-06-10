import React from 'react';

const Preloader = () => {
  return (
    <>
      {/* ===== PRELOADER STARTS ======= */}
      <div id="preloader">
        <div id="loader"></div>
      </div>
      {/* ===== PRELOADER ENDS ======= */}

      <div
        className="procus-cursor"
        style={{
          transform: 'translate3d(calc(-50% + 1919px), calc(-50% + 787px), 0px)',
        }}
      ></div>

      <div
        className="procus-cursor2"
        style={{
          left: '551px',
          top: '918px',
          position: 'absolute', // Optional if needed for layout
        }}
      ></div>
      {/* ===== PROGRESS STARTS======= */}
    </>
  );
};

export default Preloader;
