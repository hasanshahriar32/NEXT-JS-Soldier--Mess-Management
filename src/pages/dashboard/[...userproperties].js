import { useRouter } from "next/router";
import React from "react";

const UserProperties = () => {
  const route = useRouter();
  const path = route.query.userproperties;
  return (
    <div>
      <h1>this is path: {path}</h1>
    </div>
  );
};

export default UserProperties;
