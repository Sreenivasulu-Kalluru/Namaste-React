import React from 'react';
import ReactDOM from 'react-dom/client';

// * This is how we create elements using Core React
// * React Element
// * React.createElement = Object => when render to the DOM, then it will becomes an HTMl element.
// * React.createElement = Object => HTMLElement(render)
const heading = React.createElement(
  'h1',
  { id: 'heading' },
  'Namaste React 🚀'
);

console.log(heading);

// * JSX = JSX is a JavaScript Syntax which is easier to create React Elements
// * JSX - is not HTML in JavaScript, but JSX is HTML like or XML like Syntax
// * This is how we create elements using JSX
// * JSX is React.createElement at the end of the day

// JSX (transipiled before it reaches the JS Engine)
// Transpiled means -> Transpiling is converting one higher level language to another higher level language. For example, Typescript is a high level language but after it's transpiled it's turned into JavaScript (another high level language). Or Babel for example can transpile ES6 JavaScript code into ES5 JavaScript.

// Parcel is Transpiling this code, means Parcel Manages Transpiling the code which is done By the Package known as Babel. Babel is a Transpiler - A source-to-source translator, source-to-source compiler (S2S compiler), transcompiler, or transpiler is a type of translator that takes the source code of a program written in a programming language as its input and produces an equivalent source code in the same or a different programming language.

// * JSX => Transpiled to React.createElement => React.JS Object = will be converted to HTMLElement on render(render)
const jsxHeading = <h1 id="heading">Namaste React Using JSX🚀</h1>;

console.log(jsxHeading);

// * React Component - Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.
// * 01) Class Based Component - Old way of writing React Components
// * 02) Functional Components - New way of writing React Components

// const HeadingComponent = () => <h1>Namaste React from Functional Component</h1>;

//                                      (or)

/* const HeadingComponent = () => (
    <h1 className="heading">
    Namaste React from Functional Component</h1>
   );
*/

//                                      (or)

// const HeadingComponent = () => {
//   return (
//     <div className="container">
//       <h1>Namaste React from Functional Component</h1>
//     </div>
//   );
// };

/* 
            React Element
    const headingElement = (
      <h1 className="heading">
      Namaste React from React Element
      </h1>
    );

              React Component
    const HeadingComponent = () => (
      <h1 className="heading">
      Namaste React from React Component
      </h1>
    );
*/

// Component Composition in React - What is component composition in React? In React, we can make components more generic by accepting props, which are to React components what parameters are to functions. Component composition is the name for passing components as props to other components, thus creating new components with other components.

//                  (or)

// Passing one component to another component is known as "Component Composition in React"

// Example for "Component Composition" is given below

// Component using function declaration
// const Title = function () {
//   return <h1 className="heading">Namaste React using JSX🚀</h1>;
// };

// // Component using Arrow Function
// const HeadingComponent = () => {
//   return (
//     <div className="container">
//       <Title /> (or) <Title></Title>
//       <h1>Namaste React from Functional Component</h1>
//     </div>
//   );
// };

// * Note: <Title /> (or) <Title></Title> are both treated as same in JSX

// * Writing JavaScript inside JSX

// normal JS varibles inside JSX
const name = 'Vasu';

// React Element inside JSX
const elem = <span>React Element</span>;

// * Note: If we try to put a React component inside a React Element, then it causes to inifinite loop inside JavaScript.
// * Note: JSx prevents Crsos-Site-Scripting Attacks for you -> means, JSX "Sanitizes" all the code written inside it. It is automatically taken care by React.

// const HeadingComponent = () => {
//   return (
//     <div className="container">
//       {/* {name} -> writing normal JS variables inside JSX */}
//       <h2>{name}</h2>
//       {elem}
//       <br />
//       {20 + 4}
//       <h1>Namaste React from Functional Component</h1>
//     </div>
//   );
// };

// * Note: we can call Component inside JSX in between {}, bcz A React Functional component at the end of the day is a JavaScript Function. So we can Call the function inside JSX
const Title = function () {
  return <h1 className="heading">Namaste React using JSX🚀</h1>;
};

// const HeadingComponent = () => {
//   return (
//     <div className="container">
//       {Title}
//       <Title />
//       {Title()}
//       <h1>Namaste React from Functional Component</h1>
//     </div>
//   );
// };

// * Note: JSX Element must have only one Parent Element

/*
(
  <div></div>
  <div></div>
)

This will give an error


(
  <div>
    <div></div>
    <div></div>
  </div>
)

it have one div parent element

      (or) 
      
we can use React Fragment(<React.Fragment>...</React.Fragment> (or) <>...</>) to wrap JSx Elements

(
  <React.Fragment>
    <div></div>
    <div></div>
  </React.Fragment>
)

So, if we want to create nested JSX Element Structure we, either wrap all those elements insdie a parent element (or) we can use React Fragment Syntax(<>...</>) to achieve the same thing.

*/

// Ex:
// const HeadingComponent = () => (
//   <div>
//     <div id="container">
//       <Title />
//       <h1 className="heading">Namaste React From Functional Component</h1>
//     </div>
//     <div id="container-2"></div>
//   </div>
// );

// (or)

// const HeadingComponent = () => (
//   <React.Fragment>
//     <div id="container">
//       <Title />
//       <h1 className="heading">Namaste React From Functional Component</h1>
//     </div>
//     <div id="container-2"></div>
//   </React.Fragment>
// );

//    (or)

const HeadingComponent = () => (
  <>
    <>
      <div id="container">
        <Title />
        <h1 className="heading">Namaste React From Functional Component</h1>
      </div>
      <div id="container-2"></div>
    </>
  </>
);

// * Note: React.Fragment behaves like an empty tag, means it doesn't appaear in the DOM tree on Browser

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);

const root2 = ReactDOM.createRoot(document.getElementById('root2'));

root2.render(<HeadingComponent />);
