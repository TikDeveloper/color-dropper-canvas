import {
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { getSurroundingPixelColors } from '@/utils/helpers';

export const CIRCLE_RADIUS = 7;

export const useDropper = ({ isPicking }: { isPicking: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasCtx = useRef<CanvasRenderingContext2D | null>(null);
  const [pickedColor, setPickedColor] = useState<string>('');
  const [cord, setCord] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;
    canvasCtx.current = ctx;

    setIsLoading(true);

    const img = new Image();
    img.src = '/static/sample-pic-1.jpg';
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      setIsLoading(false);
    };
  }, []);

  const onCanvasMouseMove = useCallback(
    (event: MouseEvent<HTMLCanvasElement>) => {
      if (!canvasRef.current || !isPicking) return;
      const { clientX, clientY } = event;
      const { left, top } = canvasRef.current.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      setCord({ x, y });
    },
    [isPicking]
  );

  const onCanvasMouseLeave = useCallback(() => setCord({ x: 0, y: 0 }), []);

  const data = useMemo(() => {
    if (!canvasCtx.current || !canvasRef.current) return;

    return getSurroundingPixelColors({
      ctx: canvasCtx.current,
      ...cord,
      radius: CIRCLE_RADIUS,
    });
  }, [canvasCtx, cord]);

  const onCanvasClick = useCallback(() => {
    if (!data?.centerColor) return;
    setPickedColor(data.centerColor);
  }, [data]);

  return {
    canvasRef,
    pickedColor,
    cord,
    colorsMatrix: data?.colors || [],
    centerColor: data?.centerColor || '',
    onCanvasMouseMove,
    onCanvasMouseLeave,
    onCanvasClick,
    isLoading,
  };
};
