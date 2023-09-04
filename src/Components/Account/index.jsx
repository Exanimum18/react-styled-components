import React, { useState } from "react";
import { styled } from "styled-components";
import { Icono, Box, Btn, Saldo, Detalle } from "../UI";
import privado from "../../assets/images/privado.svg";
import ojo from "../../assets/images/ojo.svg";
import dinero from "../../assets/images/dinero.svg";

//Herencia
const IconMargin = styled(Icono)`
  margin-top: 2px;
`

const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    // <div className="box">
    <Box>
      <h2>Cuenta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponible
        <span>
          <Icono src={dinero} alt="Icono de saldo" />
        </span>
        {toggleState ? (
          <Saldo>
          {/* <div className="saldo"> */}
            <Detalle>
              $
            </Detalle>
            8,621.50
            {/* <span className="detalle">$</span> 8,621.50 */}
          {/* </div> */}
          </Saldo>
        ) : null}
      </div>

      {/* <button className="btn" onClick={toggleHandler}> */}
      <Btn onClick={toggleHandler}>
        <IconMargin
          // style={{ marginTop: "2px" }}
          // className="imagen-icono"
          src={toggleState ? privado : ojo}
          alt="Privacidad de saldo"
        />
      </Btn>
      {/* </button> */}
    </Box>
    // </div>
  );
};

export default Account;
