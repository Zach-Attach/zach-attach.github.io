import React from "react";
import './index.css'
// import {ParallaxProvider, Parallax} from "react-scroll-parallax";

// const ParallaxImage = () => (
//   <Parallax className="custom-class" y={[-70, 70]} styleOuter={{zIndex: 2}} styleInner={{zIndex: 1}}>
//     <img src={MyImage}/>
//   </Parallax>
// );

// const App = () => {
//   return (
//     <>
//     <ParallaxProvider style = {{zIndex: 1}}>
//       <div className={'testContainer'}>
//         <ParallaxImage/>
//       </div>
//     </ParallaxProvider>
//     <div className='container'><img src={MyImage}/></div>
//       </>
//   );
// };

const App = () => (<>
  <header className='container main'>
    <div className='blur'>
      <h1>
        My Name is Zach
      </h1>
      <h3>
        blah blah
      </h3>
    </div>
  </header>
  <article className='container second'>
    <div className='blur'>
      <h2>
        abc
      </h2>
    </div>
  </article>
  <article className='container third'>
    <div className='blur'>
      <h2>
        def
      </h2>
    </div>
  </article>
  <article className='container fourth'>
    <div className='blur'>
      <h2>
        ghi
      </h2>
    </div>
  </article>
  <article className='container fifth'>
    <div className='blur'>
      <h2>
        jkl
      </h2>
    </div>
  </article>
</>);


export default App
