import styled from "styled-components/native";

export const Container = styled.View`
   display: flex;
   align-items: center;
   width: 359px;
   height: 176px;
   background-color: #16161f;
   border-radius: 8px;

`

export const DayContainer = styled.View`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 4;
   width: 67px;
   height: 152px;

`

export const DayText = styled.Text`
   font-size: 14px;
   font-weight: 700;
   color: white;

`

export const DayImage = styled.Image`
   height: 54px;
   height: 54px;

`

export const TempContainer = styled.View`
   display: flex;
   flex-direction: column;
   color: white;

`

export const MaxTempText = styled.Text`
   display: flex;
   flex-direction: column;
   color: white;

`

export const MinTempText = styled.Text`
   display: flex;
   flex-direction: column;

`