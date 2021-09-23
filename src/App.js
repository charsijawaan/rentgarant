import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = lazy(() => import("./components/pages/home/Home"));
const Login = lazy(() => import("./components/pages/login/Login"));
const Signup = lazy(() => import("./components/pages/signup/Signup"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
