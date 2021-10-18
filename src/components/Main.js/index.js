import React from 'react';
import * as S from "./style";

const Main = ({
    titlepag,
    texthome,
    maingif,
    titlecontainergif,
    textcontainergif,
    containerimg
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
              <h2 style={{color:"rgb(34,37,75)"}}>{titlecontainergif}</h2>
              <p style={{fontSize: "30px", color:"rgb(34,37,75)"}}>{textcontainergif}</p>
          </S.Containertext>
        </S.Containergif>
        <S.Containergif>
          <S.Containertext>
              <h2>{titlecontainergif}</h2>
              <p style={{fontSize: "30px"}}>{textcontainergif}</p>
          </S.Containertext>
          
        </S.Containergif>
        </>
     );
}
export default Main;