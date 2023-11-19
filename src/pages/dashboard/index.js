import DashboardLayout from "@/components/Layout/DashboardLayout";

export default function Dashboard() {
  return <div>this is dashboard route</div>;
}

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
