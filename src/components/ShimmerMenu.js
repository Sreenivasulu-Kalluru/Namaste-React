import React from 'react';

const ShimmerMenu = () => {
  return (
    <div className="menu shimmer-menu">
      <header className="menu-header shimmer-menu">
        <div className="menu-header-left shimmer-menu">
          <img src="" alt="" />
        </div>
        <div className="menu-header-right shimmer-menu">
          <div className="top shimmer-menu">
            <h1></h1>
            <h3></h3>
          </div>
          <div className="bottom shimmer-menu">
            <h4 className="avg-rating shimmer-menu">
              <span
                className="icons shimmer-menu"
                style={{
                  position: 'relative',
                  top: '2px',
                  marginRight: '3px',
                }}
              ></span>
              <span></span>
            </h4>
            <h4 className="time shimmer-menu">
              <span
                className="icons"
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

      <div className="menu-main shimmer-menu-main shimmer-menu">
        <h2></h2>
        <h3 className="items shimmer-menu"></h3>
        <div className="menu-main-card-container shimmer-menu">
          <div className="menu-card shimmer-menu">
            <div className="menu-card-left shimmer-menu">
              <h2 className="menu-name shimmer-menu"></h2>
              <h3 className="menu-price shimmer-menu"></h3>
              <h4 className="menu-description shimmer-menu"></h4>
            </div>
            <div className="menu-card-right shimmer-menu">
              <img src="" alt="" />
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
