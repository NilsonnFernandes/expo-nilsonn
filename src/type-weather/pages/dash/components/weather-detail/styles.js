import styled from "styled-components/native";

export const Container = styled.View`
    
    

`

export const DetailContainer = styled.View`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   width: 327px;
   height: 56px;
   border-style: solid;
   border-bottom-width: 1px;
   border-bottom-color: #1C1C27;

`

export const DetailDescripition = styled.View`
   display: flex;
   flex-direction: row;
   justify-content: center;
   gap: 12px;
   align-items: center;

`

export const DetailImage = styled.Image`
   width: 24px;
   height: 24px;

`

export const DetailText = styled.Text`
   font-size: 14px;
   font-weight: 700;
   color: white;

`

export const DescriptionText = styled.Text`
   font-size: 20px;
   font-weight: 700;
   color: white;

`