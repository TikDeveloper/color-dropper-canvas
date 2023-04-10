import { ColorDropperWrapper } from './ColorDropper.styled';
import { useDropper, CIRCLE_RADIUS } from './useDropper';

const ColorDropper = () => {
  const {
    canvasRef,
    onCanvasClick,
    onCanvasMouseMove,
    onCanvasMouseLeave,
    cord,
    pickedColor,
    colorsMatrix,
    centerColor,
  } = useDropper();

  return (
    <ColorDropperWrapper className="dropper">
      <div className="dropper-details">
        <img src="/static/ColorPicker.svg" alt="Picker" />
        <div className="dropper-details-color">
          {pickedColor && <h3>Picked Color: {pickedColor}</h3>}
          <div
            style={{ backgroundColor: pickedColor, width: 50, height: 50 }}
          />
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
            style={{ left: cord.x - 80, top: cord.y - 80 }}
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
