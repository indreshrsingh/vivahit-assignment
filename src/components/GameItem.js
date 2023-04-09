import React from "react";

const GameItem = (props) => {
  const { game } = props;

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <div className="card-body" style={{backgroundColor:'black',color:'white'}}>
          <h5 className="card-title">{game.title}</h5>
          <hr className="my-2" />
          <img src={game.thumbnail} className="card-img-top mb-3" alt="..." />
          <div className="mb-3">
            <p className="card-text mb-0">
              <strong>Genre:</strong> {game.genre}
            </p>
            <p className="card-text mb-0">
              <strong>Platform:</strong> {game.platform}
            </p>
            <p className="card-text mb-0">
              <strong>Release Date:</strong> {game.release_date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameItem;
