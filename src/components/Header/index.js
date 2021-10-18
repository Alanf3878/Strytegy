import React from "react";
import * as S from "./style";
export function Header({
  blog,
  faq,
  enter,
  lang,
  ImgLogo,
  title,
  imgheader,
  text,
  start,
}) {
  return (
    <>
      <S.ContainerHeader>
        <img style={{ width: "180px" }} src={ImgLogo} alt="Logo" />
        <S.Item>{blog}</S.Item>
        <S.Item>{faq}</S.Item>
        <S.Enterbtn>{enter}</S.Enterbtn>
        <S.Butonlag>{lang}</S.Butonlag>
      </S.ContainerHeader>
      <S.Headercontainer>
        <S.Box>
        <S.Titlemain>{title}</S.Titlemain>
          <p>{text}</p>
          <S.Enterbtn>{start}</S.Enterbtn>
        </S.Box>
        <img src={imgheader} alt="img" />
      </S.Headercontainer>
    </>
  );
}

export default Header;
