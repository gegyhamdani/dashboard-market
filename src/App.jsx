import PageLayout from "./component/PageLayout";
import HeaderLayout from "./component/HeaderLayout";
import SiderLayout from "./component/SiderLayout";

import "./App.css";

const App = () => (
  <div className="container">
    <PageLayout headerChildren={<HeaderLayout />} siderChildren={<SiderLayout />}>
      Content
    </PageLayout>
  </div>
);

export default App;
