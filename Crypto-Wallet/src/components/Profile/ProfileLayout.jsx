import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import profileImg from "/image/profile.png";

const ProfileLayout = () => {
  const [selectedImage, setSelectedImage] = useState(profileImg);

  return (
    <Outlet context={{ selectedImage, setSelectedImage }} />
  );
};

export default ProfileLayout;
