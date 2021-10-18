import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"
import Main from "../components/Main.js"
import "./index.css"

export const query =graphql`
query {
  alldata{
    projects {
      butonblog
      butonenter
      buttonEnter
      buttonFaq
      buttonStart
      containertitle
      text
      textcontainer
      textcontainergif
      textcontainerimg
      texthome
      titlecontainergif
      titlecontainerimg
      titlemain
      titlepag
      logo {
        url
      }
      imgheader {
        url
      }
      containerimg {
        url
      }
      maingif {
        url
      }
    }
  }
  }
`
export default function({ data }){
  const projectdata = data.alldata.projects[0]
  return(
    <div>
      {console.log("aqi",data)}
      <Header
       ImgLogo = {projectdata.logo.url}
      blog = {projectdata.butonblog}
      enter = {projectdata.butonenter}
      faq = {projectdata.buttonFaq}
      lang = {projectdata.buttonEnter}
      title={projectdata.titlemain}
      imgheader = {projectdata.imgheader.url}
      text = {projectdata.text}
      start = {projectdata.buttonStart}
      />
      <Main
      titlepag = {projectdata.titlepag}
      texthome = {projectdata.texthome}
      maingif = {projectdata.maingif.url}
      titlecontainergif = {projectdata.titlecontainergif}
      textcontainergif = {projectdata.textcontainergif}
      containerimg= {projectdata.containerimg.url}
      />
    </div>
  )
}