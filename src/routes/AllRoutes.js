import { Route, Routes } from "react-router-dom";
import { MockAPI } from "../components/mockAPI/MockAPI";
import { AccountHolderProfile } from "../screens/accountHolderProfile/AccountHolderProfile";
import { Home } from "../screens/home/Home";
import { Login } from "../screens/login/Login";
import { PersonProfile } from "../screens/personProfile/PersonProfile";
import { Signup } from "../screens/signup/Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
      <Route path="/personProfile" element={<PersonProfile />} />
      <Route path="/accountHolderProfile" element={<AccountHolderProfile />} />
      <Route path="/mock" element={<MockAPI />} />
    </Routes>
  );
};

export { AllRoutes };
