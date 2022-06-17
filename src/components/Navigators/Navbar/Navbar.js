import React, { useState } from 'react';
import './navbar.css';
import ExperimentsDropdown from './ExperimentsDropdown';
import DataCollectionDropdown from'./DataCollectionDropdown';
import { Link } from 'react-router-dom';
function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState({
    experiments: false,
    datacollection: false
  });
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const onMouseEnter = name => {
    if (window.innerWidth < 960) {
      setDropdown(state => ({ ...state, [name]: false }));
    } else {
      setDropdown(state => ({ ...state, [name]: true }));
    }
  };
  const onMouseLeave = name => {
    setDropdown(state => ({ ...state, [name]: false }));
  };
  return (
    <>
      <nav className="navbar">
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter.bind(this, 'experiments')}
            onMouseLeave={onMouseLeave.bind(this, 'experiments')}
          >
            <Link to
              ="/experiments"
              className="nav-links"
              onClick={closeMobileMenu}
            >
            Experiments
            </Link>
            {dropdown.experiments && <ExperimentsDropdown />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter.bind(this, 'datacollection')}
            onMouseLeave={onMouseLeave.bind(this, 'datacollection')}
          >
            <Link to ="/datacollection" className="nav-links" onClick={closeMobileMenu}>
              DataCollection
            </Link>
            {dropdown.datacollection && <DataCollectionDropdown />}
          </li>
      </nav>
    </>
  );
}
export default Navbar;