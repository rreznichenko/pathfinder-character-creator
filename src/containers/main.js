import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
// import BasicStats from './components/BasicStats';
// import HealthSection from './components/HealthSection';
// import InitiativeSection from './components/InitiativeSection';
// import DefenceClass from './components/DefenceClass';
// import SurpriseSection from './components/SurpriseSection';
// import TouchAttackSection from './components/TouchAttackSection';

function onGeneralInfoChange(player, info) {
    return {
        generalInfo: {
            ...player.generalInfo,
            ...info,
        },
        ...player,
    }
} 

function Main() {
    const [player, setPlayer] = useState({
        generalInfo: {

        }
    });

    const onGeneralChange = (info) => {
        const playerInfo = onGeneralInfoChange(player, info);
        setPlayer(playerInfo)
    }

    return (
        <div>
            <img src="/PathfinderLogo.png" alt="logo" />
            <GeneralInfo onChange={onGeneralChange} />
            {/* <BasicStats />
            <HealthSection />
            <InitiativeSection />
            <DefenceClass />
            <SurpriseSection />
            <TouchAttackSection /> */}
        </div>
    );
}

export default Main;