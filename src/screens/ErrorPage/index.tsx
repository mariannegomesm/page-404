import { Button, Column, Row, Typography } from "@/components";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

import For from "../../../public/assets/for.svg";

export const ErrorPage: React.FC = () => {
  return (
    <PageContainer>
      <Column width="380px" ml="160px" mt="249px">
        <Typography variant="heading" fontWeight="bold" mb="s5">
          Ops, esta página não foi encontrada
        </Typography>
        <Typography mb="56px">
          Parece que você se perdeu... Tente voltar para a página anterior ou
          acesse a home.
        </Typography>
        <Row>
          <Button title="Voltar" mr="s4" />
          <Button title="Ir para a home" />
        </Row>
      </Column>
      <Row alignItems="center" width="406px" ml="242px">
        <Image src={For} alt="for" />
        <iframe
          src="https://lottie.host/?file=ab7a5c4d-d0de-4877-be5e-8cffedab2bf1/f7kJBYBWYz.json"
          width="230px"
          height="230px"
        />
        <Image src={For} alt="for" />
      </Row>
    </PageContainer>
  );
};

const PageContainer = styled(Row)`
  width: 100%;
  height: 100vh;

  background-size: cover;
  background-image: url("/assets/background.svg");
`;
