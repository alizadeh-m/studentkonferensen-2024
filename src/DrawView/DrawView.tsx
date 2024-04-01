import React from 'react';
import DrawArea, { ToolType } from './DrawArea/DrawArea';
import styles from './DrawView.module.css';

const DrawView = () => {
  const START_COLOR = '#df4b26';
  const [tool, setTool] = React.useState<ToolType>(ToolType.PEN);
  const [colorRGB, setColorRGB] = React.useState<string>(START_COLOR);

  return (
    <div className={styles.mainWrapper}>
      <h1 className={styles.heading}>🎨 Draw me like one of your french girls 🎨</h1>
      <div>
        <div className={styles.wrapper}>
          <label className={styles.label} htmlFor="brushType">Välj borste</label>
          <select
            id='brushType'
            value={tool}
            onChange={(e) => {
              e.preventDefault()
              setTool(e.target.value as ToolType);
            }}
          >
            <option value={ToolType.PEN}>Penna</option>
            <option value={ToolType.ERASER}>Sudd</option>
          </select>
        </div>
        <div className={styles.wrapper}>
          <label className={styles.label} htmlFor="color">Välj färg</label>
          <input
            id='color'
            type='color'
            value={colorRGB}
            onChange={(event) => setColorRGB(event.target.value)}
          >
          </input>
        </div>
        <div className={styles.drawingArea}>
          <DrawArea tool={tool} color={colorRGB}/>
        </div>
      </div>
    </div>
  );
}

export default DrawView;
