import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer-section" className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-4 col-md-3">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/pirateGold">Pirate Gold</Link>
              </li>
              <li>
                <Link to="/lazyBoy">Lazy Boy</Link>
              </li>
              <li>
                <Link to="/klondike">Klondike</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
