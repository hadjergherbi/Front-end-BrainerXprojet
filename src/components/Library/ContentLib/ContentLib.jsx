import React from 'react';
import Lib1 from '../../../assets/lib1.png';
import Lib2 from '../../../assets/lib2.png';
import Lib3 from '../../../assets/lib3.png';
import Lib4 from '../../../assets/lib4.png';
import Lib5 from '../../../assets/lib5.png';
import './ContentLib.css';

const ContentLib = () => {
  return (
    <div className='ContainerLib'>
      <div id='Lib1'>
        <img src={Lib1} alt="Lib 1" />
       <div id='ContainerTextLib' >
         <div style={{gap:"10px"}}>
          <p className='Details'>Sep 26, 2021</p>
          <p className='TitleLIB'>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
         </div>
         <p className='Details'><a href="#">Read Full Article</a></p>
       </div>
      </div>

      <div>
        <img src={Lib2} alt="Lib 2" />
       <div  className='ContainerTextLib'>
         <div style={{gap:"10px"}}>
          <p className='Details'>Sep 26, 2021</p>
          <p className='TitleLIB'>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
        </div>
        <p className='Details'><a href="#">Read Full Article</a></p>
       </div>
      </div>

      <div>
        <img src={Lib3} alt="Lib 3" />
       <div  className='ContainerTextLib'>
         <div style={{gap:'20px'}}>
          <p className='Details'>Sep 26, 2021</p>
          <p className='TitleLIB'>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
        </div>
        <p className='Details'><a href="#">Read Full Article</a></p>
       </div>
      </div>

      <div>
        <img src={Lib4} alt="Lib 4" />
       <div  className='ContainerTextLib'>
         <div>
          <p className='Details'>Sep 26, 2021</p>
          <p className='TitleLIB'>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
        </div>
        <p className='Details'><a href="#">Read Full Article</a></p>
       </div>
      </div>

      <div>
        <img src={Lib5} alt="Lib 5" />
        <div  className='ContainerTextLib'>
         <div>
          <p className='Details'>Sep 26, 2021</p>
          <p className='TitleLIB'>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
        </div>
        <p className='Details'><a href="#">Read Full Article</a></p>
       </div>
      </div>
    </div>
  );
};

export default ContentLib;
