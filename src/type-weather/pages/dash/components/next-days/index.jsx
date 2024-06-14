import { Container } from "../weather-detail/styles";
import { DayContainer, DayImage, DayText, MaxTempText, MinTempText, TempContainer } from "./styles";

import Trovao from "/../../../assets/imagens/Trovao.png"
import Chuva from "/../../../assets/imagens/Chuva.png"
import Nublado from "/../../../assets/imagens/Nublado.png"
import PoucaNuvem from "/../../../assets/imagens/PoucaNuvem.png"
import Sole from "/../../../assets/imagens/Sole.png"

export default function NextDays (){
   return(


    <Container>

        <DayContainer>
            <DayText>Ter</DayText>
            <DayImage source={Trovao}/>
        </DayContainer>
        <TempContainer>
            <MaxTempText>32ºc</MaxTempText>
            <MinTempText>26ºc </MinTempText>
        </TempContainer>

        <DayContainer>
            <DayText>Qua</DayText>
            <DayImage source={Chuva}/>
        </DayContainer>
        <TempContainer>
            <MaxTempText>32ºc</MaxTempText>
            <MinTempText>26ºc </MinTempText>
        </TempContainer>

        <DayContainer>
            <DayText>Qui</DayText>
            <DayImage source={PoucaNuvem}/>
        </DayContainer>
        <TempContainer>
            <MaxTempText>32ºc</MaxTempText>
            <MinTempText>26ºc </MinTempText>
        </TempContainer>

        <DayContainer>
            <DayText>Sex</DayText>
            <DayImage source={Nublado}/>
        </DayContainer>
        <TempContainer>
            <MaxTempText>32ºc</MaxTempText>
            <MinTempText>26ºc </MinTempText>
        </TempContainer>

        <DayContainer>
            <DayText>Sab</DayText>
            <DayImage source={Sole}/>
        </DayContainer>
        <TempContainer>
            <MaxTempText>32ºc</MaxTempText>
            <MinTempText>26ºc </MinTempText>
        </TempContainer>

    </Container>
   )

}