import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Tab = () => {
  return (
    <ul>
      <li>
        <Link to="/input">Input Tab</Link>
      </li>
      <li>
        <Link to="/list">List Tab</Link>
      </li>
    </ul>
  );
};

export default Tab;
