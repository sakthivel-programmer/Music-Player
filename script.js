*{
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Arial, sans-serif;
  background-color: black;
  color: white;
}

/* Helper Classes  */
.trans-bg{
  background: transparent !important;
}

.font-mid{
  font-weight: 900;
  font-size: 1.2rem;
}

.side-margin-4px i{
  margin: 0 4px;
}

.small-img{
  height: 100px;
  width: 100px;
}

.heading-text{
  font-size: 2rem;
  margin-bottom: 3%;
}

a{
  text-decoration: none;
}

.inline-block{
  display: inline-block;
}

.inline{
  display: inline;
}

.right{
  float: right;
}


/* Additional Helpers */

::-webkit-scrollbar{
  display: none;
}

:root{
  --text-color: white;
}

/* Header-Nav-Bar */

.nav-bar{
  
  height: auto;
  width: auto;
  background-image: linear-gradient(180deg, black, rgba(0, 0, 0, 0));
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding-left: 5%;
  padding-right: 5%;
  transition: all ease-in-out 1s;
}

header>div{
  color: var(--text-color);
  flex: 1;
  text-align: center;
}

.title-combo>div{
  display: inline-block;
  vertical-align: middle;
}

.logo img{
  height: 50px;
  width: 50px;
  border-radius: 100%;
  animation-name: rotating;
  animation-timing-function: ease-in-out;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}

@keyframes rotating {
  0%{
      transform: rotate(0deg);
  }

  100%{
      transform: rotate(360deg);
  }
}

.search-box{
  position: relative;
  flex: 2 !important;
}

.search-box input{
  width: 100%;
  height: 30px;
  text-align: center;
  font-size: 16px;
  color: gray;
  border-radius: 30px;
  background: white;
  outline: none;
  border: none;
}

.search-box button{
  height: 30px;
  width: 30px;
  border: none;
  border-radius: 40px;
  position: absolute;
  top: 0;
  transform: scale(0.9);
  color: gray;
  background: white;
}

.search-box i{
  background: white;
}

#search{
  left: 0;
}

#mic{
  right: 0;
}

.text-hover:hover{
  color: yellow;
}


/* Main */

main{
  width: 100%;
  margin-top: 2%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  transition: all ease-in-out 1s;
  background: transparent;
}

/* Main Banner Section  */

.aside {
  display: inline-block;
  overflow: hidden;
}

.section-1 {
  width: 70%;
  height: 80vh;
  padding-left: 12px;
  overflow: scroll;
  overflow-x: hidden;
  background: transparent;
}


.container{
  display: flex;
  flex-direction: row;
  margin-top: 5%;
  overflow: visible;
  justify-content: center;
}

.box{
  transition: all ease-in-out 0.5s;
}

.box img{
  height: 14vw;
  width: 22.5vw;
  border-radius: 5px;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0,0.1);
  transition: 0.5s;
  margin-left: -30px;
}

.box:hover{
  transform: scale(1.3);
  z-index: 2;
  transition: all ease-in-out 0.5s;
}


/* Latest Releases */

.latest-releases{
  position: relative;
  top: 4vw;
  height: auto;
  width: 100%;
  box-sizing: border-box;
}

.card{
  display: flex;
  flex-direction: row;
}

.latest-releases>div{
  display: inline-flex;
  flex-direction: row;
  height: 100px;
  width: 47%;
  margin: 15px 0px;
  justify-content: space-around;
}


.card img {
  width: 100px;
  height: 100px;
  z-index: 1;
}

.song-info {
  float: right;
  margin-top: 20px;
  margin-left: 12px;
}

/* Popular Artists Section */

.popular-artists {
  position: relative;
  width: 100%;
  height: auto;
  top: 6vw;
  box-sizing: border-box;
}

.popular-artist-content {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  text-align: center;
  text-decoration: none;
}

.popular-artists figure{
  margin: 0 20px;
}

.popular-artists img {
  width: 10vw;
  min-width: 60px;
  min-height: 60px;
  height: 10vw;
  border-radius: 50%;
}

/* Music Station */

.music-station{
  display: inline-flex;
  position: relative;
  top: 8vw;
  height: 250px;
  width: 100%;
  box-sizing: border-box;
}

#mus-sta-fig{
  margin: 0 16px;
}

.mus-sta-fig img{
  width: 200px;
  height: 200px;
}

.music-mood{
  width: 66%;
  overflow: hidden;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.music-mood figure{
  margin: 0 2%;
}

.music-mood img{
  border-radius: 50%;
  width: 80px;
  height: 80px;
}

.music-mood img:hover{
  box-shadow: 0 0px 12px 0px white;
  transition: all ease-in-out 0.2s;
}

.music-mood p{
  color: whitesmoke;
  position: relative;
  display: flex;
  justify-content: center;
  bottom: 66px;
  font-size: 1.2rem;
  opacity: 0.7;
  font-weight: 900;
  background: transparent;
}

/* Big Music Station */

.b-music-station{
  display: flex;
  justify-content: space-evenly;
  position: relative;
  top: 10vw;
  height: auto;
  width: 94%;
  box-sizing: border-box;
}

.b-music-station figure{
  transition: all ease-in-out 0.5s;
}

.b-music-station figure:hover{
  transform: scale(1.3);
  z-index: 2;
}

.b-music-station img{
  width: 100%;
  height: 180px;
  border: 1px solid white;
  border-radius: 25px;
}

.b-music-station p{
  color: whitesmoke;
  position: relative;
  display: flex;
  justify-content: center;
  bottom: 132px;
  font-size: 2.2rem;
  opacity: 0.9;
  font-weight: 900;
  background: transparent;
}

/* Latest */
#latest-english{
  top: 12vw;
}

#latest-hindi{
  top: 14vw;
}

.latest-songs {
  position: relative;
  width: 100%;
  height: auto;
  box-sizing: border-box;
}

.latest-song-div {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  text-align: center;
  text-decoration: none;
}

.latest-song-div figure{
  margin: 8px 18px;
}

.latest-song-div img {
  width: 10vw;
  min-width: 60px;
  min-height: 60px;
  height: 10vw;
}

/* Aside  */

.section-2{
  width: 28%;
  height: 80vh;
  overflow: scroll;
}

/* PlayList Section  */

.playlist{
  margin-top: 5%;
}

.playlist-content {
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

@media screen and (max-height:500px){
  .playlist-content{
      height: 25vh;
  }
}

.playlist-content i:hover{
  transform: scale(2);
  color: red;
}

.content-left {
  display: flex;
  height: 100%;
  width: 70%;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: center;
}

.content-right {
  position: relative;
  bottom: 60%;
  left: 90%;
  width: min-content;
  height: 20px;
  color: white;
  font-size: 20px;
}

.playlist-item {
  width: 90%;
  height: auto;
  padding: 0px 1%;
  box-sizing: border-box;
  margin: 1%;
  transition: all ease-in-out 0.1s;
}

/* footer */

footer{
  background: hsl(0deg 0% 9%);
  width: 100%;
  height: 10vh;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.footer-img img{
  width: 60px;
  height: 60px;
}

.play-song-info{
  width: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.con-left {
  display: flex;
  height: 100%;
  width: 70%;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: center;
}

.con-right {
  display: flex;
  left: 90%;
  width: min-content;
  color: white;
  align-items: center;
  font-size: 20px;
}

.con-right i{
  background: transparent;
}

/* Player Controls  */

.player {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: nowrap;
}

.player-contorls{
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
}

.player-contorls div, i{
  background: transparent;
}

.time {
  margin: 0px 10px;
}

.slide-ctr {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.5;
  transition: opacity 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Extras */

.extras{
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.extras div, i{
  background: transparent;
}