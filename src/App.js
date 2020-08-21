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
  <header className='container main background'>
    <div className='blur'>
      <h1>
        My Name is Zach
      </h1>
      <h3>
        blah blah
      </h3>
    </div>
  </header>
  <article className='container aboutme background'>
    <div className='blur'>
      <h2>
        About Me
      </h2>
    </div>
  </article>
  <article className='container ibm background'>
    <div className='blur'>
      <h2>
        IBM
      </h2>
    </div>
  </article>
  <article className='container unc background'>
    <div className='blur'>
      <h2>
        UNC Chapel Hill
      </h2>
    </div>
  </article>
  <article className='container duke background'>
    <div className='blur'>
      <h2>
        Duke University
      </h2>
    </div>
  </article>
  <article className='container xavier background'>
    <div className='blur'>
      <h2>
        Xavier University of Louisiana
      </h2>
    </div>
  </article>
  <article className='container tulane background'>
    <div className='blur'>
      <h2>
        Tulane University
      </h2>
    </div>
  </article>
  <article className='container dartmouth background'>
    <div className='blur'>
      <h2>
        Dartmouth College
      </h2>
    </div>
  </article>
  <article className='container lsu background'>
    <div className='blur'>
      <h2>
        LSU
      </h2>
    </div>
  </article>
</>);


export default App
