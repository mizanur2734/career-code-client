import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import JobList from './JobList';
import { jobCreatedByPromise } from '../../api/JobsApi';

const MyPostedJobs = () => {
    const {user} = useAuth()
    return (
        <div>
             <Suspense>
                <JobList jobCreatedByPromise=
                {jobCreatedByPromise(user.email)}></JobList>
             </Suspense>
        </div>
    );
};

export default MyPostedJobs;