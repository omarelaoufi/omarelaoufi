import { useState } from "react";
import styled from "styled-components";
import SocialLinks from "./SocialLinks";

function Avatar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <AvatarWrapper>
      {showLinks && <SocialLinks />}
      <br />
      <Image onClick={() => setShowLinks(!showLinks)} src="avatar_400.png" />
    </AvatarWrapper>
  );
}

const AvatarWrapper = styled.div`
  position: fixed;
  text-align: center;
  right: 2vw;
  bottom: 0;
`;

const Image = styled.img`
  height: 10vh;
`;

export default Avatar;
