import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ROUTES } from "../lib/routes";
import LoginForm from "@/components/forms/Login.form";

const Login = () => {
  return (
    <Container className="flex flex-col justify-center items-center">
      <LoginForm />
      <p>
        No account?
        <Button variant="link" asChild>
          <Link to={ROUTES.REGISTER}>Sign Up Here</Link>
        </Button>
      </p>
    </Container>
  );
};

export default Login;
