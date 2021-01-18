import React from "react";

const Like = ({ isLiked, onLike }) => {
  const getClases = () => {
    if (isLiked) {
      return "fa clickble fa-heart";
    } else {
      return "fa clickble fa-heart-o";
    }
  };

  return <i className={getClases()} onClick={onLike} aria-hidden="true"></i>;
};

export default Like;
