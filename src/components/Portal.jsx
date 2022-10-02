import { createPortal } from 'react-dom';

const Portal = (Component) => (props) => {
    return createPortal(
       <Component {...props} />,
       document.getElementById("portal")
    )
 }
 
 export default Portal