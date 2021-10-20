import React from 'react';
import * as S from "./style";

const Main = ({
    titlepag,
    texthome,
    maingif,
    titlecontainergif,
    textcontainergif,
    containerimg,
    containertitle,
    dataimg,
    textcontainer,
    usertitle,
    usertext,
    titlecontainerimg,
    textcontainerimg

}) => {
    return (
        <>
          <S.Containertitle>
            <h2 style={{fontSize: "60px"}}>{titlepag}</h2>
            <p style={{fontSize: "30px"}}>{texthome}</p>
        </S.Containertitle>
        <S.Containergif>
          <img style={{width: "400px", height: "250px"}} src={maingif} alt="gif"/>
          <S.Containertext>
              <h2>{titlecontainergif}</h2>
              <p style={{fontSize: "30px"}}>{textcontainergif}</p>
          </S.Containertext>
        </S.Containergif>
        <S.Containergif style={{backgroundColor: "#fff"}}>
          <img style={{width: "400px", height: "250px"}} src={containerimg} alt="gif"/>
          <S.Containertext>
              <h2 style={{color:"rgb(34,37,75)"}}>{titlecontainerimg}</h2>
              <p style={{fontSize: "30px", color:"rgb(34,37,75)"}}>{textcontainerimg}</p>
          </S.Containertext>
        </S.Containergif>
        <S.Containergif>
          <S.Containertext>
              <h2>{containertitle}</h2>
              <p style={{fontSize: "30px"}}>{textcontainergif}</p>
          </S.Containertext>
       
        </S.Containergif>
        <S.Containergif style={{backgroundColor: "#fff"}}>
          <S.Containertext>
              <h2 style={{color:"rgb(34,37,75)"}}>{containertitle}</h2>
              <img src = {dataimg} style={{width: "800px", height:"350px"}}/>
              <p style={{fontSize: "30px", color:"rgb(34,37,75)"}}>{textcontainer}</p>  
          </S.Containertext>
        </S.Containergif>
        <S.Containergif>
          <S.Containertext>
              <h2>{usertitle}</h2>
              <p style={{fontSize: "30px"}}>{usertext}</p>
          </S.Containertext>
        </S.Containergif>
        
        </>
     );
}
export default Main;