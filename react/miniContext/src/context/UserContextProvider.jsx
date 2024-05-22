import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Define PropTypes
UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure that 'children' prop is provided and is a valid React node
};

export default UserContextProvider;
