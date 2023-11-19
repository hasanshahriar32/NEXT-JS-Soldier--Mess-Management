import DashboardLayout from "@/components/Layout/DashboardLayout";
import { useRouter } from "next/router";
import React from "react";

const DynamicUserProfile = () => {
  const router = useRouter();
  const userId = router.query.userid;
  const name = router.query.name;

  return <div>this is dynamic user profile route: {userId}</div>;
};

export default DynamicUserProfile;

DynamicUserProfile.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
