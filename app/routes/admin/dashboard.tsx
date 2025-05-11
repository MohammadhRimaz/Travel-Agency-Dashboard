import { Header } from "components";

const Dashboard = () => {
  const user = { name: "M Rimaz" };

  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"} 👋`}
        description="Track activity, trends and popular destinations in real time."
      />
      Dashboard content goes here
    </main>
  );
};

export default Dashboard;
