import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Header = ({ isHome }) => {
  return (
    <header className="bg-primary text-neutral py-4 px-6 shadow-lg fixed w-full z-50">
      <div className="flex justify-between items-center container mx-auto">
        <h1 className="text-2xl font-bold">
          <Link to="/">SG</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            {isHome ? (
              <>
                <li>
                  <Link to="/" className="hover:text-accent">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/main/about" className="hover:text-accent">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/main/projects" className="hover:text-accent">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/main/contact" className="hover:text-accent">
                    Contact
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/" className="hover:text-accent">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/main/about" className="hover:text-accent">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/main/projects" className="hover:text-accent">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/main/contact" className="hover:text-accent">
                    Contact
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};


export default Header;

