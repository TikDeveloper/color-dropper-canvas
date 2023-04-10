import ColorDropper from '@/components/color-dropper/ColorDropper';
import { GlobalStyles } from '@/styles/globalStyles';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <div className="app">
        <ColorDropper />
      </div>
    </>
  );
}
