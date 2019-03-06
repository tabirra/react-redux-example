import React from "react";
import PropTypes from "prop-types";

/**
 * Header that shows the current status of the game.
 * @param {string} status Player turn information or game status information.
 */
const Header = ({ status }) => <h1 className="header">{status}</h1>;

Header.propTypes = {
  status: PropTypes.string.isRequired
};

export default Header;
