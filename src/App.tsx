import Login from "./core/public/loginPage/login";

const App = () => {
  const isAuthenticated = true;
  return <>{isAuthenticated ? <Login /> : "hellow world"}</>;
};
export default App;
