import {StrictMode} from 'react';//Imports StrictMode from the React library. It's a wrapper component that activates extra warnings during development — it won't affect your production build, it just helps you catch bugs early.
import {createRoot} from 'react-dom/client';//This is the modern React 18+ way of mounting your app into the browser
import App from './App.tsx';//Imports your root App component
import '../src/index.css';//Imports your global stylesheet

createRoot(document.getElementById('root')!).render(
    /*document.getElementById('root') — finds the <div id="root"></div> element in your index.html. That's the anchor point where React takes over.
! — the exclamation mark is TypeScript telling the compiler "trust me, this element exists, it won't be null." Without it, TypeScript would complain it could be null.
createRoot(...) — hands that DOM element to React and says "you own this now."*/
// render( - tells React what to actually display inside that root element.
  <StrictMode>
    <App />
  </StrictMode>,
);


