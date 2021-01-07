import styled from "styled-components";

function SocialLinks() {
  return (
    <SocialLinksWrapper>
      <a rel="noreferrer" target="_blank" href="https://github.com/omarelaoufi">
        <Image target="_blank" src="github.png" />
      </a>
      <br />
      <a
        rel="noreferrer"
        target="_blank"
        href="https://twitter.com/omarelaoufi"
      >
        <Image target="_blank" src="twitter.png" />
      </a>
      <br />
      <a
        rel="noreferrer"
        target="_blank"
        href="https://facebook.com/omar.elaoufi"
      >
        <Image src="fb.png" />
      </a>
    </SocialLinksWrapper>
  );
}

const SocialLinksWrapper = styled.div`
  width: 40px;
  padding: 5px;
  padding: 5px;
  margin: auto;
  border-radius: 10px;
  box-shadow: rgba(102, 138, 165, 0.4) 0px 16px 32px 0px;
`;

const Image = styled.img`
  margin-top: 2px;
  margin-bottom: 2px;
  height: 30px;
`;

export default SocialLinks;
