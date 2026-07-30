import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import AmazonPage from './AmazonPage';

import "./index.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AmazonPage />
  </StrictMode>,
);


//React intro to components

/*function AComponent() {
  return null;
}

function AComponent2() {
  return (
    <>
    <div>
      <h1>React seems aight.</h1>
    </div>
    </>
  );
}

function AComponent3() {
  return (
    <>
    <div>
      <div>
        <p>Im learning react.</p>
      </div>
    </div>
    </>
  );
}

function ParentComponent() {
  return (
    <div>
      <h1>The parent component</h1>
      <AComponent />
      <AComponent2></AComponent2>
      <AComponent3 />
      <ParentComponent />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>Understanding react</h1>
    <ParentComponent />
  </StrictMode>,
);*/