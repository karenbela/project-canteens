import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [show, setshow] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const db = getDatabase();
    const navbarRef = ref(db, 'navbar');
    onValue(navbarRef, (snapshot) => {
      const fetchedData = snapshot.val();
      setData(fetchedData);
    });
  }, []);

  const hanldeClick = () => {
    setshow(!show);
  };

  if (!data) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <nav>
      <div className="logo">
        <img src={data.logo} alt="Logo" />
      </div>
      <ul id="nav-bar" className={show ? 'open' : ''}>
        {Object.keys(data.menuItems).map((key) => (
          <li key={key}>
            <Link to={data.menuItems[key].link}>{data.menuItems[key].name}</Link>
          </li>
        ))}
      </ul>
      <ul className="menu-right-side">
        <li>
          {show ? (
            <img className="menu" onClick={hanldeClick} src={data.icons.cross} alt="Close Menu" />
          ) : (
            <img className="menu" onClick={hanldeClick} src={data.icons.menu} alt="Open Menu" />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
