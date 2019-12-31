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

    const onSubmit = () => {
        fetch("http://localhost:3002/character/", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(player), // тип данных в body должен соответвовать значению заголовка "Content-Type"
        })
        .then(response => {
                fetch("http://localhost:3002/character/", {
                'Content-Type': 'application/pdf',
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
            }).then(response => {
                return new Response(response.body);
            }).then(stream => stream.blob())
            .then(newBlob => {
                const data = window.URL.createObjectURL(newBlob);
                var link = document.createElement("a");
                link.href = data;
                link.download="file.pdf";
                document.body.appendChild(link);
                link.click();
                setTimeout(function(){
                    // For Firefox it is necessary to delay revoking the ObjectURL
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(data);
                }, 100)
            })
        }); 
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
            <div className="container flex mx-auto">
                <button onClick={onSubmit}>Create!</button>
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