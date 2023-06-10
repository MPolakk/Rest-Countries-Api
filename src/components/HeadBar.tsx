import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
const HeadBar = (props: {
   darkModeActive: boolean,
   setDarkModeActive: React.Dispatch<React.SetStateAction<boolean>>
}) => {

   const darkModeHandler = () => {
      props.setDarkModeActive(!props.darkModeActive)
   }

   return (
      <div className="headbar">
         <h1 className="title">Where in the world?</h1>
         <button onClick={darkModeHandler} className="darkmode-button">
            <FontAwesomeIcon icon={faMoon} className="icon" />
            <span>Dark mode</span>
         </button>

      </div>
   );
}

export default HeadBar;