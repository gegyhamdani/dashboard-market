import PageLayout from "./component/PageLayout";
import HeaderLayout from "./component/HeaderLayout";
import SiderLayout from "./component/SiderLayout";
import Dashboard from "./component/Dashboard";

import "./App.css";

const App = () => (
  <div className="container">
    <PageLayout headerChildren={<HeaderLayout />} siderChildren={<SiderLayout />}>
      <Dashboard />
    </PageLayout>
  </div>
);

export default App;
