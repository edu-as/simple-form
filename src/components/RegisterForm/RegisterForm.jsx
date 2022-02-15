import React, { useState, useEffect } from "react";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import UserInfo from "../UserInfo/UserInfo";
import ToReceive from "../ToReceive/ToReceive";
import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";

function RegisterForm({ toSend, validCpf }) {
  const [stageLatest, setStageLatest] = useState(0);
  const [infoObtained, setObtained] = useState({});

  useEffect(() => {
    if (stageLatest === formArray.length ) {
      toSend(infoObtained);
    }
  })

  const formArray = [
    <UserInfo toSend={pickInfos} />,
    <PersonalInfo toSend={pickInfos} validCpf={validCpf} />,
    <ToReceive toSend={pickInfos} />,
    <Typography variant="h3" align="center">
      Muito obrigado por Cadastrar-se!
    </Typography>
  ];

  function pickInfos(InfoForm) {
    setObtained({ ...infoObtained, ...InfoForm });
    nextStage();
  }

  function nextStage() {
    setStageLatest(stageLatest + 1);
  }

  return<>
    <Stepper activeStep={stageLatest}>
      <Step>
        <StepLabel>Login</StepLabel>
      </Step>
      <Step>
        <StepLabel>Pessoal</StepLabel>
      </Step>
      <Step>
        <StepLabel>Endereço</StepLabel>
      </Step>
      <Step>
        <StepLabel>Finalização</StepLabel>
      </Step>
    </Stepper>
    {formArray[stageLatest]}
  </>; 
}

export default RegisterForm;
