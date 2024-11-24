import EditProfile from "./EditProfile";
import Preferences from "./Preferences";
import Security from "./Security";
import TabInterface from "../../components/TabInterface";
import Layout from "../../layouts/Layout";

const Settings = () => {
  const tabs = [
    { label: 'Edit Profile', content: <EditProfile /> },
    { label: 'Preferences', content: <Preferences /> },
    { label: 'Security', content: <Security /> },
  ];

  return (
    <Layout>
      <TabInterface tabs={tabs} />
    </Layout>
  )
}
export default Settings