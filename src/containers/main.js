import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import BasicStats from './components/BasicStats';
// import HealthSection from './components/HealthSection';
// import InitiativeSection from './components/InitiativeSection';
// import DefenceClass from './components/DefenceClass';
// import SurpriseSection from './components/SurpriseSection';
// import TouchAttackSection from './components/TouchAttackSection';
import SavesSection from './components/SavesSection';
import CmSection from './components/CmSection';

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
function onCmSectionChange(player, info) {
    return {
        ...player,
        combatManeuver: {
            ...player.combatManeuver,
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
    }
    const onCmChange = (info) => {
        const playerInfo = onCmSectionChange(player, info);
        setPlayer(playerInfo)
    }

    return (
        <>
            <div className="container flex mx-auto" >
                <div className="w-full">
                    <img src="/PathfinderLogo.png" alt="logo" />
                </div>
                <GeneralInfo onChange={onGeneralChange} />
            </div>
            <div className="container flex mx-auto ">
                <BasicStats onChange={onBasicChange}/> 
            </div>
            <div className="container flex mx-auto">
                <SavesSection onChange={onSavesChange} />
            </div>
            <div className="container flex mx-auto">
                <CmSection onChange={onCmChange} str={player.basicStats["модификатор-сил"]} dex={player.basicStats["модификатор-лвк"]} />
            </div>
            {/* <HealthSection />
            <InitiativeSection />
            <DefenceClass />
            <TouchAttackSection />
            <SurpriseSection /> */}
        </>
    );
}

export default Main;