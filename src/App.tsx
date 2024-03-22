import { useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import AppSvelte from './App.svelte';
import type { AriaTextFieldProps, TextFieldProps } from '@react-types/textfield';

export interface PasswordFieldProps extends TextFieldProps {
  onSubmit?: (value: string) => void;

  onClear?: () => void;
}

export interface AriaPasswordFieldProps
  extends PasswordFieldProps,
    AriaTextFieldProps {}

function App() {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const app = new AppSvelte({
      target: ref.current,
    });
    return () => app.$destroy();
  }, []);

  return (
    <>
      <div ref={ref}></div>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
