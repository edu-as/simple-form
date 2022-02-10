import React, { useState, useEffect } from "react";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import UserInfo from "../UserInfo/UserInfo";
import ToReceive from "../ToReceive/ToReceive";

function RegisterForm({ toSend, validCpf }) {
  const [stageLatest, setStageLatest] = useState(0);
  const [infoObtained, setObtained] = useState({});

  useEffect(()=>{
   console.log(infoObtained);
  })

  const formArray = [
    <UserInfo toSend={pickInfos} />,
    <PersonalInfo toSend={pickInfos} validCpf={validCpf} />,
    <ToReceive toSend={pickInfos} />,
  ];

  function pickInfos(Info) {
    setObtained({...infoObtained, ...Info});
    nextStage();
  }
  
  function nextStage() {
    setStageLatest(stageLatest + 1);
  }

  return <>{formArray[stageLatest]}</>;
}

export default RegisterForm;
