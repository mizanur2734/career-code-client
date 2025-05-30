import React, { Suspense } from "react";
import ApplicationState from "./ApplicationState";
import ApplicationList from "./ApplicationList";
import useAuth from "../../hooks/useAuth";
import { myApplicationsPromise } from "../../api/applicationsApi";

const MyApplication = () => {
  const { user } = useAuth();
  return (
    <div>
      <ApplicationState></ApplicationState>
      <Suspense fallback={"loading your application"}>
        <ApplicationList
          myApplicationsPromise={myApplicationsPromise(user.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplication;
