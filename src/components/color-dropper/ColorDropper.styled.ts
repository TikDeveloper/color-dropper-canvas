import styled, { css } from 'styled-components';

export const ColorDropperWrapper = styled.div<{ isPicking: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;
  position: relative;
  .dropper {
    &-details {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-pick-icon {
        cursor: pointer;
        display: flex;
        padding: 8px;
        border-radius: 100%;
        overflow: hidden;
        background-color: ${({ isPicking }) =>
          isPicking ? '#d9d9d9' : 'transparent'};
        > img {
          width: 16px;
          height: 16px;
        }
      }
      &-color {
        display: flex;
        align-items: center;
        gap: 12px;
        > div {
          width: 32px;
          height: 32px;
        }
      }
    }
    &-view {
      position: relative;
      display: flex;

      > canvas {
        user-select: none;
        width: 100%;
        &:hover {
          ${({ isPicking }) => {
            if (isPicking) {
              return css`
                cursor: url('/static/ColorPicker.svg'), auto;
              `;
            }
          }}
        }
      }
      &-zoom {
        position: absolute;
        width: 160px;
        height: 160px;
        pointer-events: none;
        overflow: hidden;
        border-radius: 50%;
        &-container {
          position: relative;
          width: 100%;
          height: 100%;
          > img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          > table {
            width: 100%;
            height: 100%;
            border-collapse: collapse;
            td {
              border: 1px solid #d9d9d9;
            }
          }
          > p {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #d9d9d9;
            padding: 4px 8px;
            border-radius: 8px;
            font-size: 12px;
            line-height: 16px;
          }
        }
      }
    }
  }
`;
