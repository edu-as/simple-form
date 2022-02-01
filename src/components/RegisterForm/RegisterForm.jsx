import React, { useState } from "react";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import UserInfo from "../UserInfo/UserInfo";
import ToReceive from "../ToReceive/ToReceive";
import { Typography } from "@material-ui/core";

function RegisterForm({ toSend, validCpf }) {
  const [stageLatest, setStageLatest] = useState(1);

  function latestForm(stage){
    switch (stage) {
      case 0:
        return <UserInfo />;
      case 1:
        return <PersonalInfo toSend={toSend} validCpf={validCpf}  />;
      case 2:
        return<ToReceive />;
        default:
          return<Typography>Erro ao selecionar o formulario</Typography>
    }
  }

  return (
    <>
      {latestForm(stageLatest)} 
    </>
  );
} 


export default RegisterForm;
