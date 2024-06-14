import { Container, DescriptionText, DetailContainer, DetailDescripition, DetailImage, DetailText } from "./styles";
import Term from "../../../../assets/images/Term.png"
import Nuvem from "../../../../assets/images/Nuvem.png"
import Vento from "../../../../assets/images/Vento.png"
import Gota from "../../../../assets/images/Gota.png"
import Sol from "../../../../assets/images/Sol.png"

export default function WeatherDetail(){
    
    return(

        <Container>

            <DetailContainer>
                <DetailDescripition>
                    <DetailImage source={Term}/>
                    <DetailText>Sensação Térmica</DetailText>
                </DetailDescripition>
                <DescriptionText>26ºc</DescriptionText>
            </DetailContainer>

            <DetailContainer>
                <DetailDescripition>
                    <DetailImage source={Nuvem}/>
                    <DetailText>Probabilidade de chuva</DetailText>
                </DetailDescripition>
                <DescriptionText>0%</DescriptionText>
            </DetailContainer>

            <DetailContainer>
                <DetailDescripition>
                    <DetailImage source={Vento}/>
                    <DetailText>Velocidade do vento</DetailText>
                </DetailDescripition>
                <DescriptionText>8km/h</DescriptionText>
            </DetailContainer>

            <DetailContainer>
                <DetailDescripition>
                    <DetailImage source={Gota}/>
                    <DetailText>Umidade do ar</DetailText>
                </DetailDescripition>
                <DescriptionText>40%</DescriptionText>
            </DetailContainer>
            
            <DetailContainer>
                <DetailDescripition>
                    <DetailImage source={Sol}/>
                    <DetailText>Índice UV</DetailText>
                </DetailDescripition>
                <DescriptionText>5</DescriptionText>
            </DetailContainer>

        </Container>
    )

}