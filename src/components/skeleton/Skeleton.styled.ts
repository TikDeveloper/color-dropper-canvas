import styled from 'styled-components';

export const SkeletonWrapper = styled.div`
  position: absolute;
  z-index: 2;
  background-color: #f5f5f5;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .skeleton {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: #f0f0f0;
    background-image: linear-gradient(
      45deg,
      transparent 35%,
      #e2e2e2 50%,
      transparent 65%
    );
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: 300% 100%;
    background-position: 50% 0;
    animation-name: skeletonAnimation;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 1s;
    transform: translate3d(0, 0, 0);
    overflow: hidden;
  }
  @keyframes skeletonAnimation {
    0% {
      background-position: 300% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;
