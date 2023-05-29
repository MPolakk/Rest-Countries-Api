import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
const HeadBar = () => {
   return (
      <div className="headbar">
         <h1 className="title">Where in the world?</h1>
         <div className="darkmode-button">
            <FontAwesomeIcon icon={faMoon} className="icon" />
            <span>Dark mode</span>
         </div>

      </div>
   );
}

export default HeadBar;