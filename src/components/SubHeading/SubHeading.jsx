import React from 'react';

import {images} from "../../constants/index"

const SubHeading = ({title}) => (
  <div style={{marginBottom: "1rem"}}>
    <p className='p__cormorant'>{title}</p>
    <img src={images.spoon} alt="Sub Heading" className='top__spoon'/>
  </div>
);

export default SubHeading;  