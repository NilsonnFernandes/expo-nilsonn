import styled from "styled-components/native";

export const ContainerWrapper = styled.View`
    width: 359px;
    height: 328;
    background-color: #16161f;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const Container = styled.View`
    width: 335;
    height: 384;
    background-color: aqua;
    border-radius: 8px;

`

export const ContainerTitle = styled.View`
    padding: 20px;

`

export const Title = styled.Text`
    font-size: 20px;
    font-weight: 700;
    color: white;

`

export const Description = styled.Text`
    font-size: 16px;
    font-weight: 400;
    color: white;

`
export const WeatherContainer = styled.View`
    display: flex;
    flex-direction: column;
    padding-left: 16px;
    padding-bottom: 16px;

`
export const WeatherTitle = styled.Text`
    font-size: 48px;
    font-weight: 800;
    color: white;

`

export const WeatherRange = styled.Text`
    font-size: 16px;
    font-weight: 700;
    color: white;

`

export const WeatherDescription = styled.Text`
    font-size: 14px;
    font-weight: 400;
    color: white;

`

export const WeatherWrapper = styled.View`
    display: flex;
    justify-content: space-between;
    flex-direction: row;

`

export const WeatherImage = styled.Image`
    width: 160px;
    height: 160px;

`