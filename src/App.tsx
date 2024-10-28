import { useState } from 'react'
import aidiaLogo from './assets/logo.svg'
import './App.css'

function App() {

  return (
    <>
    <header>
          <div className="HeaderContainer">
              <div className="HeaderLogo">
                  <a href="./index.html"><img src={aidiaLogo} alt="logo"/></a>
              </div>
              <nav>
                  <ul className="LiFont InterBold HeaderNavFont HeaderNav">
                      <li className="HeaderHome"><a>Home</a></li>
                      <li className="HeaderAbout"><a>About</a></li>
                      <li className="HeaderUpload"><a>Upload</a></li>
                      <li className="HeaderSearch"><a>Search</a></li>
                  </ul>
              </nav>
              <div className="HeaderLoginSignup">
                  <ul className="LiFont LiMargin">
                      <li className="HeaderLogin"><a href="login.html">Log in</a></li>
                      <li className="HeaderSignup"><a>Sign up</a></li>
                  </ul>
              </div>
          </div>
      </header>
      <main>
          <div className="IndexCenterContainer">
              <div className="CenterText">
                  <h1 className="NotoSansKrBlack">세상을 바꾸는 작은 아이디어 시작하기</h1>
              </div>
              <div className="CenterButton">
                  <button type="button" className="NotoSansKrBold" id="CenterButtonText">버튼을 눌러 시작하기</button>
              </div>
          </div>
      </main>
    </>
  )
}

export default App
