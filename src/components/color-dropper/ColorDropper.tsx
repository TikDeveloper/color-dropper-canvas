import { useRef } from 'react';
import { ColorDropperWrapper } from './ColorDropper.styled';
import { useDropper, CIRCLE_RADIUS, usePickMode } from '@/hooks';
import Skeleton from '@/components/skeleton/Skeleton';

const ColorDropper = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isPicking, togglePickMode } = usePickMode(containerRef);

  const {
    canvasRef,
    onCanvasClick,
    onCanvasMouseMove,
    onCanvasMouseLeave,
    cord,
    pickedColor,
    colorsMatrix,
    centerColor,
    isLoading,
  } = useDropper({ isPicking });

  return (
    <ColorDropperWrapper
      className="dropper"
      isPicking={isPicking}
      ref={containerRef}
    >
      {isLoading && <Skeleton />}

      <div className="dropper-details">
        <button
          type="button"
          className="dropper-details-pick-icon"
          onClick={togglePickMode}
        >
          <img src="/static/ColorPicker.svg" alt="Picker" />
        </button>
        <div className="dropper-details-color">
          {pickedColor && <h3>Picked Color: {pickedColor}</h3>}
          <div style={{ backgroundColor: pickedColor }} />
        </div>
      </div>

      <div className="dropper-view">
        <canvas
          ref={canvasRef}
          width={960}
          height={540}
          onMouseMove={onCanvasMouseMove}
          onMouseLeave={onCanvasMouseLeave}
          onClick={onCanvasClick}
        />

        {colorsMatrix.length ? (
          <div
            className="dropper-view-zoom"
            style={{ left: cord.x, top: cord.y }}
          >
            <div className="dropper-view-zoom-container">
              <img src="/static/Circle.svg" alt="Cirlce" />
              <table>
                <tbody>
                  {colorsMatrix.map((row, rowIdx) => (
                    <tr key={rowIdx}>
                      {row.map((cell, cellIdx) => (
                        <td
                          key={cellIdx}
                          style={{
                            backgroundColor: cell,
                            boxShadow:
                              CIRCLE_RADIUS === cellIdx &&
                              CIRCLE_RADIUS === rowIdx
                                ? '0 0 0 2px red inset'
                                : '',
                          }}
                        />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="dropper-view-zoom-container-center">
                {centerColor}
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </ColorDropperWrapper>
  );
};

export default ColorDropper;
