import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 240px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 240px;
    height: 240px;
    object-fit: cover;
  }

  input[type='file'] {
    opacity: 0;
    position: absolute;
    z-index: 99999;
    width: 240px;
    height: 240px;
  }
`;
