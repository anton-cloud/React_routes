import React from "react";

const ProfilePage = ({ history, location, match }) => {
  return (
    <>
      {" "}
      <h2>ProfilePage </h2>
      <button
        type="button"
        onClick={() =>
          history.push({
            pathname: location.iamfrom,
            //   search: '?categoty=...'
            hash: "#...",
          })
        }
      >
        Go back
      </button>
    </>
  );
};

export default ProfilePage;
