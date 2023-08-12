import React from "react";
import "./Settings.css"; // Import your custom styles
import accountImage from "../marry.jpeg";

const Settings = () => {
  return (
    <div className="settings-container">
      <div className="profile">
        <img src={accountImage} alt="Account" className="account-image" />
        <div className="profile-info">
          <h2>Marry Doe</h2>
          <h3>Marry@gmail.com</h3>
        </div>
        <p>
          <br /> <br /> <br /> <br /> <br /> <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
          mauris eget nunc maximus ultrices. Nullam nec velit in turpis
          dignissim interdum at at nisi. In at luctus odio.
          Nullam nec velit in turpis
          dignissim interdum at at nisi. In at luctus odio.
          <hr style={{ borderTop: '1px dotted #999', marginTop: '20px' }} />
        </p>
      </div>
    </div>
  );
};

export default Settings;
