import React, { useRef, useHistory, useLocation, useState, useEffect } from 'react';
import '../../App.css';
const Example = (props) => {
  const history = useHistory();
  const location = useLocation();

  const initialState = location.state;
  const [state, setState] = useState(initialState);


  useEffect(() => {
    const persistentState = state;
    history.replace({ pathname: location.pathname }, persistentState);
  },[state]);

  return (null);
}

export default function Survey123() {
  let survey123 = useRef(null)

  return (<div className='products' ref={survey123}>
            <iframe 
            name="survey123webform" 
            width="100%" 
            height="100%"
            frameborder="0" 
            marginheight="0" 
            marginwidth="0" 
            title="Survey" 
            src="//survey123.arcgis.com/share/8d1c357da5f345d185d3a5cbb60edff0"
            >
            </iframe>
          </div>);
}
