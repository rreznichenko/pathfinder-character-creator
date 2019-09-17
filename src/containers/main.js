import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import BasicStats from './components/BasicStats';
// import HealthSection from './components/HealthSection';
// import InitiativeSection from './components/InitiativeSection';
// import DefenceClass from './components/DefenceClass';
// import SurpriseSection from './components/SurpriseSection';
// import TouchAttackSection from './components/TouchAttackSection';
import SavesSection from './components/SavesSection';

function onGeneralInfoChange(player, info) {
    return {
        ...player,
        generalInfo: {
            ...player.generalInfo,
            ...info,
        },
    }
} 

function onBasicStatsChange(player, info) {
    return {
        ...player,
        basicStats: {
            ...player.basicStats,
            ...info,
        },
    }
} 

function onSavesSectionChange(player, info) {
    return {
        ...player,
        savesSection: {
            ...player.savesSection,
            ...info,
        },
    }
} 

function Main() {
    const [player, setPlayer] = useState({
        generalInfo: {},
        basicStats: {}
    });

    const onGeneralChange = (info) => {
        const playerInfo = onGeneralInfoChange(player, info);
        setPlayer(playerInfo)
    }
    const onBasicChange = (info) => {
        const playerInfo = onBasicStatsChange(player, info);
        setPlayer(playerInfo)
    }
    const onSavesChange = (info) => {
        const playerInfo = onSavesSectionChange(player, info);
        setPlayer(playerInfo)
        console.log(playerInfo)
    }

    return (
        <div>
            <img src="/PathfinderLogo.png" alt="logo" />
            {/* <GeneralInfo onChange={onGeneralChange} />
            <BasicStats onChange={onBasicChange}/> */}
            {/*<HealthSection />
            <InitiativeSection />
            <DefenceClass />
            <SurpriseSection />
            <TouchAttackSection /> */}
             <SavesSection onChange={onSavesChange} />
        </div>
    );
}

export default Main;