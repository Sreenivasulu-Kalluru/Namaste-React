import React from 'react';

const ShimmerMenu = () => {
  return (
    <div className="menu shimmer-menu">
      <header className="menu-header shimmer-menu stroke animate">
        <div className="menu-header-left shimmer-menu stroke animate">
          <img src="" alt="" className="stroke animate" />
        </div>
        <div className="menu-header-right shimmer-menu stroke animate">
          <div className="top shimmer-menu stroke animate">
            <h1></h1>
            <h3></h3>
          </div>
          <div className="bottom shimmer-menu stroke animate">
            <h4 className="avg-rating shimmer-menu stroke animate">
              <span
                className="icons shimmer-menu stroke animate"
                stroke
                animate
                style={{
                  position: 'relative',
                  top: '2px',
                  marginRight: '3px',
                }}
              ></span>
              <span></span>
            </h4>
            <h4 className="time shimmer-menu stroke animate">
              <span
                className="icons stroke animate"
                style={{
                  position: 'relative',
                  top: '2px',
                  marginRight: '3px',
                }}
              ></span>
              <span> </span>
            </h4>
            <h3></h3>
          </div>
        </div>
      </header>

      <div className="menu-main shimmer-menu-main shimmer-menu stroke animate">
        <h2></h2>
        <h3 className="items shimmer-menu stroke animate"></h3>
        <div className="menu-main-card-container shimmer-menu stroke animate">
          <div className="menu-card shimmer-menu stroke animate">
            <div className="menu-card-left shimmer-menu stroke animate">
              <h2 className="menu-name shimmer-menu stroke animate"></h2>
              <h3 className="menu-price shimmer-menu stroke animate"></h3>
              <h4 className="menu-description shimmer-menu stroke animate"></h4>
            </div>
            <div className="menu-card-right shimmer-menu stroke animate">
              <img src="" alt="" className="stroke animate" />
            </div>
          </div>

          {/* <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li> */}
        </div>
      </div>
    </div>
  );
};

export default ShimmerMenu;
