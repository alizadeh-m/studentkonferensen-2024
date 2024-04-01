import React from 'react';
import { Layer, Line, Stage } from 'react-konva';

export enum ToolType {
  ERASER = 'eraser',
  PEN = 'pen'
}

interface Props {
  tool: ToolType;
  color: string;
}

/*
* source: https://konvajs.org/docs/react/Free_Drawing.html
*/
const DrawArea = (props: Props) => {
  const {tool, color} = props;
  // const [tool, setTool] = React.useState('pen');
  const [lines, setLines] = React.useState<any>([]);
  const isDrawing = React.useRef(false);
  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  const isMobile = windowWidth < 768;
  const handleMouseDown = (e: any) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, {tool, points: [pos.x, pos.y]}]);
  };

  const handleMouseMove = (e: any) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  return (
    <>
      <Stage
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        width={isMobile ? undefined : 600}
        height={isMobile ? undefined: 600}
      >
        <Layer>
          {lines.map((line: any, i: number) => (
            <Line
              key={i}
              points={line.points}
              stroke={color}
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              globalCompositeOperation={
                line.tool === 'eraser' ? 'destination-out' : 'source-over'
              }
            />
          ))}
        </Layer>
      </Stage>
    </>
  );
};

export default DrawArea;
