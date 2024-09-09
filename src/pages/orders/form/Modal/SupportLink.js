import React, {useState, useEffect} from 'react';
import { fetchPlanData } from '../../../../services/PlanService';
import Support from './Support';
import NeedHelp from './NeedHelp';

const SupportLink = () => {
    const [planData, setPlanData] = useState(null);
    const token = sessionStorage.getItem('token');
    const userPlanData = sessionStorage.getItem('planData');

    useEffect(() => {
        const getPlanData = async () => {
          try {
            const plan = await fetchPlanData(token);
            setPlanData(plan);
          } catch (error) {
    
          }
        };
        getPlanData();
      }, [token]);

    return (
        <>
            {planData ? (
            <>
                {/* Conditional rendering based on the 'upgrade' value */}
                {planData.upgrade ? (
                <NeedHelp data={planData} />
                ) : (
                <Support />
                )}
            </>
            ) : (
            <></>
            )}
        </>
    )
}

export default SupportLink;