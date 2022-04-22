import React from "react";
import PropTypes from "prop-types";

const User = (props) => {
  return (
    <div>
      <h3>{props.user.id}</h3>
      <h3>{props.user.name}</h3>
    </div>
  );
};

User.propTypes = {
  // key-value
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

// User.defaultProps = {
//   userName: "default name",
//   userId: 0,
// };

export default User;
