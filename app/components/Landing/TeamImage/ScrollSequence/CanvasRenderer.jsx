"use client";
import teamImage from "./teamImage.module.css";
import { useRef, useCallback } from 'react';

const CanvasRenderer = ({ onCanvasRef }) => {
  const canvasRef = useRef(null);

  const handleCanvasRef = useCallback((node) => {
    if (node !== null) {
      canvasRef.current = node;
      onCanvasRef(node);
    }
  }, [onCanvasRef]);

  return (
    <canvas
      ref={handleCanvasRef}
      className={`${teamImage.canvasRender}`}
    />
  );
};

export default CanvasRenderer;