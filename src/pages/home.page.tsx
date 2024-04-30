import { Link } from "react-router-dom";
import { ROUTES } from "../lib/routes";
import Container from "@/components/Container";
const Home = () => {
  return (
    <Container className="container">
      <Link to={`${ROUTES.CUSTOMER_DETAILS}`}>Customer</Link>
      <Link to={`${ROUTES.BRANCH}`}>Branch</Link>
    </Container>
  );
};

export default Home;
