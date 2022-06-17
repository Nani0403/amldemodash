import React, { useState } from 'react';
import './dropdown.css';
import{DataCollectionMenuItems}  from './DataCollectionMenuItems';
import { Link } from 'react-router-dom';
function DataCollectionDropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {DataCollectionMenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link  className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default DataCollectionDropdown;