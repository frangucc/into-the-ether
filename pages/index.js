import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'


export default function Home() {
  return (

    <div className="container">
    <div className="club-logos">
    <a href="https://www.mlssoccer.com/mlsnext/" target="_blank"><img src="/antonio-pinto-mls-next.png" /></a>
    <a href="https://www.chicagofcunited.com/" target="_blank"><img src="/antonio-pinto-fc-united.png" /></a>
    <img src="/antonio-pinto-america-technica.png" /> 
  <a href="https://www.xn--sueossports-3db.com/" target="_blank"><img src="/antonio-pinto-suenos-sports.png" /></a>
   <a href="https://www.fundamentalfutbol.net/" className="hideable" target="_blank"><img src="/antonio-pinto-fundamental-futbol.png" /></a>


      
    </div>
   <div className="player-controls">
        <iframe src="/silence.mp3" type="audio/mp3" allow="autoplay" id="audio" style={{display: 'none'}} />
        
<div class="player">


        <audio autoPlay>
          <source src="/rise.mp3" type="audio/mp3" id="sound-track" />
        </audio>
            <i class="fa fa-play play" aria-hidden="true"></i>
    <i class="fa fa-pause pause" aria-hidden="true"></i>

        </div>
    </div>
<label>
        <input type="checkbox" />
        <span className="menu"> <span className="hamburger" /> </span>
        <ul className="link-labels">
          <li> <a href="#news">News</a> </li>
          <li> <a href="#videos">Videos</a> </li>
          <li> <a href="#about">About</a> </li>
          <li> <a href="#coaches">Coaches</a> </li>
       
          <li> <a href="#open-modal">Contact</a> </li>
        </ul>
      </label>



<>
  {/*  HERO WRAPPER  */}
  <figure className="hero-wrapper">

    {/*  BEGIN IFRAME CONTAINER */}
    <div className="video-hero-wrapper">

      {/*  OVERFLOW WRAPPER 
     Fits iframe full screen at 16 / 9 Aspect Ratio*/}
      <div className="overflow-wrapper">

      <video id="so_bgvideo_5df3a8b601042" preload="none" className="so_video_bg jquery-background-video is-playing is-visible" loop autoPlay playsInline muted data-bgvideo poster="/antonio-mls-next.jpg" data-bgvideo-fade-in={500} data-bgvideo-pause-after={120} data-bgvideo-show-pause-play="true" data-bgvideo-pause-play-x-pos="right" data-bgvideo-pause-play-y-pos="top" style={{minWidth: 'auto', minHeight: 'auto', width: '100%', height: 'auto', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', transitionDuration: '500ms', zIndex: 999}}>
        <source src="https://nodechron.s3.us-east-2.amazonaws.com/antonio-web-background-desktop-1080.mov" type="video/mp4" />
      </video>
      <video id="antonio-bgvideo-mobile" preload="none" className="so_video_bg jquery-background-video is-playing is-visible" loop autoPlay playsInline muted data-bgvideo poster="/antonio-mls-next-mobile.jpg" data-bgvideo-fade-in={500} data-bgvideo-pause-after={120} data-bgvideo-show-pause-play="true" data-bgvideo-pause-play-x-pos="right" data-bgvideo-pause-play-y-pos="top" style={{minWidth: 'auto', minHeight: 'auto', width: '460px', height: 'auto', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', transitionDuration: '500ms', zIndex: 999}}>
        <source src="https://nodechron.s3.us-east-2.amazonaws.com/Antonio-web-mobile-720.mov" type="video/mp4" />
      </video>
      </div>
      <figcaption>
        <div className="shade-effect" />
        <div className="sport">Antonio Pinto</div>
        <p className="sub-text">FC United 06 | MLS Next | U17 | 6”1 165 <span className="hideable">|</span> Striker #18 | 3.6 GPA | c/o ‘25 🇮🇹 🇺🇸</p>
      </figcaption>

      {/*  SCROLL DOWN ICON
    Scrolls to anchor #introduction on click 
    Forked from Thomas Nägele
    https://codepen.io/xonic/pen/KWMaqe​  
    Love the way this looks.  Unobtrusive.
*/}
      <a href="#introduction" className="scroll-down">
        <div className="chevron" />
        <div className="chevron" />
        <div className="chevron" />
        <span className="text">Scroll down</span>
      </a>

      <div className="elig">
      <div className="flag"><a href="/"><img src="/flag-us.jpg" /></a></div>
      <div className="flag"><a href="/italian"><img src="/flag-italy.jpg" /></a></div>
      <br />
      <p>Eligibility</p>
      </div>
    </div>
  </figure>
  {/*  DEMO CONTENT  */}

</>
<div className="elig2">
      <div className="flag"><a href="/"><img src="/flag-us.jpg" /></a></div>
      <div className="flag"><a href="/italian"><img src="/flag-italy.jpg" /></a></div>
      <br />
      <p>Eligibility</p>
      </div>
<h2 className="vid-head sport2" id="news">Achievements, Highlights & News</h2>
<p className="vid-head-p">Track Antonio's progress with his latest highlight reels and recent news.</p>
<div className="slide-section">

<main className="slide-container">
  <div className="sidebar">
    {/*     <h2>Discover</h2> */}
    <ion-icon name="arrow-forward-circle-outline" className="icon" />
  </div>


  <section className="scrolling-carousel">
  
    <div
      className="card"
      style={{
        backgroundImage:
          'url("/antonio-pinto-2023-mls-next-spring-highlights2.jpg")'
      }}
    >
      <div className="card-details">
        <div className="card-header">
          <h3 className="card-title">2023 MLS Next Spring Highlights, Midwest Region</h3>
          <p className="card-description">
            Antonio turns up this spring from the starting center forward position, delivering 11 goals and 8 assists in the last 8 league matches plus a few more a in California at MLS Next Fest.
          </p>
        </div>
        <div className="card-rating">
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
        </div>
        <div className="card-call-to-action">
          <a href="https://www.youtube.com/watch?v=Z8wKQU8_ePs&feature=youtu.be" target="_blank"><button className="btn primary">Watch Video</button></a>
          
        </div>
      </div>
    </div>
    <div
      className="card"
      style={{
        backgroundImage:
          'url("/antonio-pinto-mls-next-cup.jpg")'
      }}
    >
      <div className="card-details">
        <div className="card-header">
          <h3 className="card-title">FC United 2006 U17's Clinch Playoff Spot in Dallas, June</h3>
          <p className="card-description">
            FC United 2006 born U17's have officially secured their spot in the 2023 MLS Next Cup. Antonio and his team kickoff in Dallas June 17th, 2023. 
          </p>
        </div>
        <div className="card-rating">
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
        </div>
        <div className="card-call-to-action">
          
        </div>
      </div>
    </div>
    

     <div
      className="card"
      style={{
        backgroundImage:
          'url("/antonio-pinto-img-showcase-2022.jpg")'
      }}
    >
      <div className="card-details">
        <div className="card-header">
          <h3 className="card-title">2023 IMG National Academy Championships, Florida</h3>
          <p className="card-description">
            With an outstanding backwards half-bike against Baltimore Armour for a 1-0 lead in the 2nd half, Antonio scores multiple goals at the incredible IMG MLS Academy Championships.
          </p>
        </div>
        <div className="card-rating">
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
        </div>
        <div className="card-call-to-action">
          
        </div>
      </div>
    </div>
    <div
      className="card"
      style={{
        backgroundImage:
          'url("/antonio-pinto-mls-next-fest.jpg")'
      }}
    >
      <div className="card-details">
        <div className="card-header">
          <h3 className="card-title">2022 MLS Next Fest Highlights, California</h3>
          <p className="card-description">
            Antonio delivers multiple goals and assists at the MLS Next Fest in California last December. This firecly competitive event is the top showcase event for colleges scouts.
          </p>
        </div>
        <div className="card-rating">
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
        </div>
        <div className="card-call-to-action">
          <a href="https://www.youtube.com/watch?v=A1Cq8IfcMsk" target="_blank"><button className="btn primary">Watch</button></a>
        </div>
      </div>
    </div>

   
    <div
      className="card"
      style={{
        backgroundImage:
          'url("/antonio-pinto-la-liga.jpg")'
      }}
    >
      <div className="card-details">
        <div className="card-header">
          <h3 className="card-title">2022 La Liga Exhibition Matches in Madrid, Spain</h3>
          <p className="card-description">
            Antonio travels to Madrid with Suenos Sports to compete in 2 private exhibition matches against CF Rayo Majadahonda and Real Vallecano U19 squads, furnishing 1 goal and 1 assist in both games.
          </p>
        </div>
        <div className="card-rating">
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
        </div>
        <div className="card-call-to-action">
         
          
        </div>
      </div>
    </div>
    <div
      className="card"
      style={{
        backgroundImage:
          'url("/antonio-wolves-id-session.jpg")'
      }}
    >
      <div className="card-details">
        <div className="card-header">
          <h3 className="card-title">Antonio Meets Wolverhampton Wanderers F.C. Academy Director at Golden Chance</h3>
          <p className="card-description">
            Antonio attends day 2 at the Wovles pivate ID camp to showcase his talent for the Wolves coaching staff.
          </p>
        </div>
        <div className="card-rating">
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
        </div>
        <div className="card-call-to-action">
          <button className="btn">Video Soon</button>
          
        </div>
      </div>
    </div>
   

    <div
      className="card"
      style={{
        backgroundImage:
          'url("/antonio-pinto-lockport-winter-classic-champion.jpg")'
      }}
    >
      <div className="card-details">
        <div className="card-header">
          <h3 className="card-title">2022 Lockport Winter Classic Champion, Chicago</h3>
          <p className="card-description">
            Antonio competes in the 9v9 Lockport Winter Classic security 6 goals across 5 matches, including an astonishing buzzer beater in the final seconds of the finals to beat out Lockport.
          </p>
        </div>
        <div className="card-rating">
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
        </div>
        <div className="card-call-to-action">
  
          
        </div>
      </div>
    </div>
    
<div
      className="card"
      style={{
        backgroundImage:
          'url("/id-league-futsal-2-time-champion-antonio-and-frankie-pinto.jpg")'
      }}
    >
      <div className="card-details">
        <div className="card-header">
          <h3 className="card-title">2022 ID League Fustal Two-Time Champion & Lead Scorer</h3>
          <p className="card-description">
            Antonio secures 1st place in both sessions of the ID Fustal League, home of Chicago Streets Futsal, for Wheeling Futsal. Also is awarded leading scorer trophy twice, for both sessions.
          </p>
        </div>
        <div className="card-rating">
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
        </div>
        <div className="card-call-to-action">
         
          
        </div>
      </div>
    </div>
     <div
      className="card"
      style={{
        backgroundImage:
          'url("/antonio-pinto-fc-united-1.jpg")'
      }}
    >
      <div className="card-details">
        <div className="card-header">
          <h3 className="card-title">2022 Fall Training & Recovery</h3>
          <p className="card-description">
            A Mexican sports therapist miraculously resets Antonio's knee late in the fall without surgery or physical therapy, helping Antonio reclaim his starting position with FC United U17's.
          </p>
        </div>
        <div className="card-rating">
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
        </div>
        <div className="card-call-to-action">

          
        </div>
      </div>
    </div>

    
  </section>
</main>

</div>


  <div class="testimonials text-center">

    <div class="container">
    <div className="swipeRight">SCROLL RIGHT <span className="arrow">&nbsp;&nbsp;&#8594;</span></div>
      <h3>Testimonials</h3>
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <div class="card-test border-light bg-light text-center">
            <i class="fa fa-quote-left fa-3x card-img-top rounded-circle" aria-hidden="true"></i>
            <div class="card-body blockquote">
              <p class="card-text">Inside the box, Antonio is incredibly dangerous. Defenders need to be careful giving him space. He smells the goal!</p>
              <footer class="blockquote-footer"><cite title="Source Title">America Technica</cite></footer>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card-test border-light bg-light text-center">
            <i class="fa fa-quote-left fa-3x card-img-top rounded-circle" aria-hidden="true"></i>
            <div class="card-body blockquote">
              <p class="card-text">Antonio's work ethic is outstanding. At 16, he trains like a professional, multiple times per day.</p>
              <footer class="blockquote-footer"><cite title="Source Title">Franck Jones</cite></footer>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card-test border-light bg-light text-center">
            <i class="fa fa-quote-left fa-3x card-img-top rounded-circle" aria-hidden="true"></i>
            <div class="card-body blockquote">
              <p class="card-text">Antonio has the height of a number 9 and can playmake like the 10. His work ethic and passion foreshadow even more growth in the near future.</p>
              <footer class="blockquote-footer"><cite title="Source Title">Kyle Knotek</cite></footer>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
<br /><br /><br /><br /><br /><br />
  <div className="video-section" id="videos">
  <h4 className="section-caption">Video Archives</h4>
<h1 className="sport2 vid-h1-pad">2023 MLS Next Spring Season Highlights</h1>
<p>
Antonio showcases his skills in the most fiercely contested soccer league in the United States. In this spring highlight reel, Antonio has already netted 11 goals and provided 8 assists in the past 9 consecutive MLS Next league games. This video includes goals against the 1st place Sockers FC Chicago, as well as Shattuck Minnesota, Michigan Wolves, Michigan Jaguars, Midwest, St. Louis, and others. </p>
  <div className="featured-video">
        <iframe src="https://www.youtube.com/embed/Z8wKQU8_ePs?modestbranding=1&autohide=0&showinfo=1&controls=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>
     </div>
     <br /><br /><br />
     <h1 className="sport2 vid-h1-pad">Sockers FC Chicago Highlights</h1>
<p>Before rejoining FC United, Antonio showcased his talents at Sockers FC Chicago, one of the top academies in the region. During his time there, Antonio found the back of the net more than 60 times in just two years for the U12 and U13 squads. This highlight reel clearly underlines his relentless offensive mentality and blood-thirsty drive to score for his team.</p>
  
<div className="featured-video">
        <iframe src="https://www.youtube.com/embed/SDBpQ4s94XE?modestbranding=1&autohide=0&showinfo=0&controls=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>
     </div>

     <br /><br /><br />
     <h1 className="sport2 vid-h1-pad">A Story of Hard Work and Passion</h1>
<p>This brief documentary spotlights Antonio's unwavering commitment and diligence towards his beloved game. His journey hasn't always been smooth; coaches often pushed him hard, and he wasn't always the primary choice. Yet, when faced with obstacles, Antonio shunned excuses and instead redoubled his efforts. This perseverance has earned him recognition as a source of inspiration to many.</p>
  
     <div className="featured-video">
        <iframe src="https://www.youtube.com/embed/lhH5DTts0NA?modestbranding=1&autohide=0&showinfo=0&controls=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>
     </div>
       <br /><br /><br />
     <h1 className="sport2 vid-h1-pad">US Soccer Development Academy Futsal Showcase</h1>
<p>At age 12, Antonio was invited to US Soccer's DA Futsal Showcase, a prestigious event where he stunned attendees by scoring an impressive 13 goals in 6 games over a span of two days. His performance placed him among the top scorers of the entire showcase.</p>
  
<div className="featured-video">
        <iframe src="https://www.youtube.com/embed/0KmGHXyqlsI?modestbranding=1&autohide=0&showinfo=0&controls=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>
     </div>
            <br /><br /><br />
     <h1 className="sport2 vid-h1-pad">FC United Season Highlights @ U11 </h1>
<p>Antonio Pinto embarked on his journey with his current club, FC United, at age 9, joining their U11 squad as one of the youngest players on the team. In his inaugural year, he dazzled on the field by scoring over 30 goals, contributing to both the 1st and 2nd teams' successes. This video provides an early glimpse at Antonio's specialization in the center forward position.</p>
  
<div className="featured-video">
        <iframe src="https://www.youtube.com/embed/sXYGcQqaq2g?modestbranding=1&autohide=0&showinfo=0&controls=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>
     </div>





  <br />
<br />
<br />
<br />
<br /><br />
<br /><br />

 </div>
  
<div className="antonio-bio2" id="about">
      <h1 className="sport3">About Antonio</h1>
      <p>Antonio, a dual citizen of America and Italy, was born on September 22nd, 2006. Today, he is the go-to starting forward for FC United, a team that stands proud as the <a href="https://www.mlssoccer.com/mlsnext/standings/u17/#Boys%20-%20U17%20Mid-America%20Division" target="_blank">second-ranked team </a> in the fiercely competitive MLS Next Midwest region. <br /><br />Pinto's development in soccer has been guided by some of the most esteemed coaches in the Chicago area, including <a href="https://www.google.com/search?q=oscar+rivero+uic&sxsrf=APwXEddT9BWAOFxpe3gO1Z8cJCH8Adty8g:1684183506975&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjKv629mPj-AhWejIkEHUhVDPQQ_AUoAnoECAEQBA&biw=1729&bih=1099&dpr=2" target="_blank">Oscar Rivero</a>, <a href="https://www.google.com/search?q=nilton+batata&tbm=isch&ved=2ahUKEwifg5u-mPj-AhW3NN4AHWTaBWoQ2-cCegQIABAA&oq=nilton+batata&gs_lcp=CgNpbWcQAzIECCMQJzIGCAAQCBAeMgcIABAYEIAEOggIABCABBCxAzoFCAAQgAQ6BwgAEIoFEEM6BAgAEB5QggZYvxFgghNoAHAAeACAAXCIAekIkgEEMTEuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=1JliZJ_JLrfp-LYP5LSX0AY&bih=1099&biw=1729" target="_blank">Nilton Batata</a>, <a href="https://www.google.com/search?q=gonzalo+segares&tbm=isch&ved=2ahUKEwjv7YD5mPj-AhU6KN4AHQ1PDrUQ2-cCegQIABAA&oq=gonzalo+segares&gs_lcp=CgNpbWcQAzIFCAAQgAQyBwgAEBgQgAQyBwgAEBgQgAQyBwgAEBgQgAQ6BAgjECc6BggAEAgQHjoICAAQgAQQsQM6BwgAEIoFEEM6CwgAEIAEELEDEIMBOgQIABAeOgYIABAFEB5QrgNY-BZgoxhoAXAAeACAAWmIAZYLkgEEMTUuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=UJpiZO-FBLrQ-LYPjZ65qAs&bih=1099&biw=1729" target="_blank">Gonzalo Segares</a>, <a href="https://www.google.com/search?q=charlie+trout&tbm=isch&ved=2ahUKEwiO1MyGmfj-AhWrI94AHbn8DCgQ2-cCegQIABAA&oq=charlie+trout&gs_lcp=CgNpbWcQAzIECCMQJzIHCAAQGBCABDIHCAAQGBCABDIHCAAQGBCABDIHCAAQGBCABDIHCAAQGBCABDIHCAAQGBCABDIHCAAQGBCABDIHCAAQGBCABDoFCAAQgAQ6CAgAEIAEELEDOgcIABCKBRBDOgoIABCKBRCxAxBDOggIABCxAxCDAToECAAQAzoECAAQHjoGCAAQBRAeOgYIABAIEB5Q5gNYsBJglBNoAXAAeACAAWmIAbEKkgEEMTMuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=bJpiZI7uIqvH-LYPufmzwAI&bih=1099&biw=1729" target="_blank">Charlie Trout</a>, <a href="https://www.google.com/search?q=Aleksey+Korol&tbm=isch&hl=en&sa=X&ved=2ahUKEwixtfCwmfj-AhULM94AHRT5DSAQBXoECAEQLQ&biw=1729&bih=1099" target="_blank">Aleksey Korol</a>, and <a href="https://www.google.com/search?q=kyle+knotek&tbm=isch&ved=2ahUKEwjJqsKymfj-AhVaE94AHQUmDIMQ2-cCegQIABAA&oq=kyle+knotek&gs_lcp=CgNpbWcQAzIHCAAQGBCABDIHCAAQGBCABDoECCMQJzoHCAAQigUQQzoICAAQgAQQsQM6BQgAEIAEOggIABCxAxCDAToLCAAQgAQQsQMQgwE6BggAEAgQHjoECAAQHlCBiwFY7p4BYICgAWgDcAB4AIABdogBhgmSAQQxMi4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=yJpiZMmmKdqm-LYPhcywmAg&bih=1099&biw=1729&hl=en" target="_blank">Kyle Knotek</a>.

      <br />
      <br />
      When not training and playing soccer, Antonio enjoys playing the piano, fishing, and playing FIFA. He also speaks Italian. &#xe50f;

      </p>
       </div>
       <br />
      <div className="hero-home" id="about">
      <div className="antonio-bio">
      <h1 className="sport3">About Antonio</h1>
      <p>Antonio, a dual citizen of America and Italy, was born on September 22nd, 2006. Today, he is the go-to starting forward for FC United, a team that stands proud as the <a href="https://www.mlssoccer.com/mlsnext/standings/u17/#Boys%20-%20U17%20Mid-America%20Division" target="_blank">second-ranked team </a> in the fiercely competitive MLS Next Midwest region. <br /><br />Pinto's development in soccer has been guided by some of the most esteemed and renowned coaches in the Chicago area, including <a href="https://www.google.com/search?q=oscar+rivero+uic&sxsrf=APwXEddT9BWAOFxpe3gO1Z8cJCH8Adty8g:1684183506975&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjKv629mPj-AhWejIkEHUhVDPQQ_AUoAnoECAEQBA&biw=1729&bih=1099&dpr=2" target="_blank">Oscar Rivero</a>, <a href="https://www.google.com/search?q=nilton+batata&tbm=isch&ved=2ahUKEwifg5u-mPj-AhW3NN4AHWTaBWoQ2-cCegQIABAA&oq=nilton+batata&gs_lcp=CgNpbWcQAzIECCMQJzIGCAAQCBAeMgcIABAYEIAEOggIABCABBCxAzoFCAAQgAQ6BwgAEIoFEEM6BAgAEB5QggZYvxFgghNoAHAAeACAAXCIAekIkgEEMTEuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=1JliZJ_JLrfp-LYP5LSX0AY&bih=1099&biw=1729" target="_blank">Nilton Batata</a>, <a href="https://www.google.com/search?q=gonzalo+segares&tbm=isch&ved=2ahUKEwjv7YD5mPj-AhU6KN4AHQ1PDrUQ2-cCegQIABAA&oq=gonzalo+segares&gs_lcp=CgNpbWcQAzIFCAAQgAQyBwgAEBgQgAQyBwgAEBgQgAQyBwgAEBgQgAQ6BAgjECc6BggAEAgQHjoICAAQgAQQsQM6BwgAEIoFEEM6CwgAEIAEELEDEIMBOgQIABAeOgYIABAFEB5QrgNY-BZgoxhoAXAAeACAAWmIAZYLkgEEMTUuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=UJpiZO-FBLrQ-LYPjZ65qAs&bih=1099&biw=1729" target="_blank">Gonzalo Segares</a>, <a href="https://www.google.com/search?q=charlie+trout&tbm=isch&ved=2ahUKEwiO1MyGmfj-AhWrI94AHbn8DCgQ2-cCegQIABAA&oq=charlie+trout&gs_lcp=CgNpbWcQAzIECCMQJzIHCAAQGBCABDIHCAAQGBCABDIHCAAQGBCABDIHCAAQGBCABDIHCAAQGBCABDIHCAAQGBCABDIHCAAQGBCABDIHCAAQGBCABDoFCAAQgAQ6CAgAEIAEELEDOgcIABCKBRBDOgoIABCKBRCxAxBDOggIABCxAxCDAToECAAQAzoECAAQHjoGCAAQBRAeOgYIABAIEB5Q5gNYsBJglBNoAXAAeACAAWmIAbEKkgEEMTMuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=bJpiZI7uIqvH-LYPufmzwAI&bih=1099&biw=1729" target="_blank">Charlie Trout</a>, <a href="https://www.google.com/search?q=Aleksey+Korol&tbm=isch&hl=en&sa=X&ved=2ahUKEwixtfCwmfj-AhULM94AHRT5DSAQBXoECAEQLQ&biw=1729&bih=1099" target="_blank">Aleksey Korol</a>, and <a href="https://www.google.com/search?q=kyle+knotek&tbm=isch&ved=2ahUKEwjJqsKymfj-AhVaE94AHQUmDIMQ2-cCegQIABAA&oq=kyle+knotek&gs_lcp=CgNpbWcQAzIHCAAQGBCABDIHCAAQGBCABDoECCMQJzoHCAAQigUQQzoICAAQgAQQsQM6BQgAEIAEOggIABCxAxCDAToLCAAQgAQQsQMQgwE6BggAEAgQHjoECAAQHlCBiwFY7p4BYICgAWgDcAB4AIABdogBhgmSAQQxMi4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=yJpiZMmmKdqm-LYPhcywmAg&bih=1099&biw=1729&hl=en" target="_blank">Kyle Knotek</a>.

      <br /><br />
        When not training and playing soccer, Antonio enjoys playing the piano, fishing, and playing FIFA. He also speaks Italian.
      </p>


       </div>
     <div>

        
      </div>

      </div>

      <br /><br /><br /><br /><br /><br />
  <div className="video-section" id="coaches">
  <h4 className="section-caption">Mentors</h4>
<h1 className="sport2 vid-h1-pad">Coaches & Trainers</h1>
<p>
"Chicago's not just a city, it's my training ground, packed with some of the coolest and most skilled soccer coaches and trainers across the U.S. These guys are the real MVPs - without them, I wouldn't be where I am today.

Together, we've accomplished a lot, but the game's far from over. There's still a blood, sweat, and tears ahead, and I'm blessed to have these mentors with me every step of the way. If you're looking to level up your game, I can't recommend them enough." <i>-Antonio Pinto</i></p>
  

  </div>
<div className="slide-section">

<main className="slide-container s2">
  <div className="sidebar">
    {/*     <h2>Discover</h2> */}
    <ion-icon name="arrow-forward-circle-outline" className="icon" />
  </div>


  <section className="scrolling-carousel">
  
    <div
      className="card"
      style={{
        backgroundImage:
          'url("/coach-oscar-rivero-antonio-pinto-fc-united.jpg")'
      }}
    >
      <div className="card-details">
        <div className="card-header">
          <h3 className="card-title">Oscar Rivero, FC United U17/U19 Head Coach</h3>
          <p className="card-description">
            Coach Oscar has played a pivotal role in the recent progression of Antonio's skills. Known for his exacting coaching style and exceptional attention to detail, he successfully steered the U17 team to the MLS Cup Playoffs in his debut year as head coach for FCU. 🇨🇺 🇲🇽
          </p>
        </div>
        <div className="card-rating">
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
        </div>
        <div className="card-call-to-action">
          
        </div>
      </div>
    </div>
    <div
      className="card"
      style={{
        backgroundImage:
          'url("/coach-gonzalo-segares.jpg")'
      }}
    >
      <div className="card-details">
        <div className="card-header">
          <h3 className="card-title">Gonzalo Segares, Fire Legend & Former FC United U14/U15 Coach - Current U17 US National Team Head Coach</h3>
          <p className="card-description">
           Gonzalo Segares spotted a promising spark in Antonio when he coached him in the U14 and U15 teams.  Gonzalo now brings his rich experience and deep knowledge to his current role as head coach of the U17 National Team. 🇨🇷
          </p>
        </div>
        <div className="card-rating">
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
        </div>
        <div className="card-call-to-action">
          <a href="https://en.wikipedia.org/wiki/Gonzalo_Segares" target="_blank"><button className="btn">Wikipedia</button></a>
        </div>
      </div>
    </div>

     <div
      className="card"
      style={{
        backgroundImage:
          'url("/coach-nilton-batata.jpg")'
      }}
    >
      <div className="card-details">
        <div className="card-header">
          <h3 className="card-title">Nilton Batata, Sockers FC U12/U13 - Santos FC & Brazilian National Team Legend</h3>
          <p className="card-description">
            Nilton Batata played a crucial role in shaping Antonio's initial stages of soccer development. Batata's tough but passionate approach to coaching made a lasting impact. His Sockers FC youth teams are renowned as some of the best in the world. 🇧🇷
          </p>
        </div>
        <div className="card-rating">
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
        </div>
        <div className="card-call-to-action">
          <a href="https://en.wikipedia.org/wiki/N%C3%ADlton_Batata" target="_blank"><button className="btn">Wikipedia</button></a>
        </div>
      </div>
    </div>
    <div
      className="card"
      style={{
        backgroundImage:
          'url("/coach-charlie-trout.jpg")'
      }}
    >
      <div className="card-details">
        <div className="card-header">
          <h3 className="card-title">Charlie Trout, Former Chicago Fire & FCU Coach - Now Puerto Rican Men's National Team Head Coach</h3>
          <p className="card-description">
            Recognized as one of Chicago's leading soccer trainers and co-creator of <a href="https://www.fundamentalfutbol.net/" className="yellowLinks" target="_blank">Fundamental Futbol</a>, Trout is noted for his profound ability to teach and inspire young players. Antonio has been honing his skills under Charlie's guidance for over half a decade. 🇬🇧
          </p>
        </div>
        <div className="card-rating">
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
        </div>
        <div className="card-call-to-action">
          <a href="https://www.youtube.com/watch?v=rv61G3yuyek" target="_blank"><button className="btn primary">Video 1</button></a>
          <a href="https://www.youtube.com/watch?v=CLkC4cEQOaw" target="_blank"><button className="btn primary">Video 2</button></a>
          <a href="https://www.fundamentalfutbol.net/charlie-trout" target="_blank"><button className="btn">About</button></a>

        </div>
      </div>
    </div>

   
    <div
      className="card"
      style={{
        backgroundImage:
          'url("/coach-aleksey-korol.jpg")'
      }}
    >
      <div className="card-details">
        <div className="card-header">
          <h3 className="card-title">Aleksey Korol, UIC Associate Head Coach & Fundamental Futbol Training Director</h3>
          <p className="card-description">
            Aleksey, a double NCAA Champion and ex-professional, commands a legendary reputation within Chicago's soccer circles. Renowned for his expertise in one and two-touch training and weak foot enhancement, he embodies a trainer that cuts straight to the chase, focusing solely on the development of his athletes.  🇺🇦
          </p>
        </div>
        <div className="card-rating">
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
        </div>
        <div className="card-call-to-action">
         
         <a href="https://www.youtube.com/watch?v=pFKkhlYu200" target="_blank"><button className="btn primary">Watch Video</button></a>
          <a href="https://en.wikipedia.org/wiki/Aleksey_Korol" target="_blank"><button className="btn">Wikipedia</button></a>
        </div>
      </div>
    </div>
   

    <div
      className="card"
      style={{
        backgroundImage:
          'url("/coach-kyle-knotek.jpg")'
      }}
    >
      <div className="card-details">
        <div className="card-header">
          <h3 className="card-title">Coach Kyle Knotek, Former Professional Player & True Player Development Founder</h3>
          <p className="card-description">
            Kyle's state of the art training facilities and hyper-detailed position specific training abilities have helped Antonio hone in on crucial details ranging from body language to off-the-ball technique.
          </p>
        </div>
        <div className="card-rating">
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
          <ion-icon name="heart-outline" className="heart-icon" />
        </div>
        <div className="card-call-to-action">
  
          <a href="https://en.wikipedia.org/wiki/Kyle_Knotek" target="_blank"><button className="btn">Wikipedia</button></a>
        </div>
      </div>
    </div>
    <div
      className="card-blank"
      style={{
        backgroundImage:
          ''
      }}
    >
      
    </div>
    <div
      className="card-blank"
      style={{
        backgroundImage:
          ''
      }}
    >
      
    </div>
    <div
      className="card-blank"
      style={{
        backgroundImage:
          ''
      }}
    >
      
    </div>
    
    
  </section>

</main>

</div>

        
      <Head>
        <title>Antonio Pinto, 2006 Class of 2025, FC United Striker #18</title>
       <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <script src="fj.js" />
         <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />

         <link href="https://cdn.jsdelivr.net/npm/bootstrap-v4-grid-only@1.0.0/dist/bootstrap-grid.css" rel="stylesheet" />
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400;300|Lato:900' rel='stylesheet' type='text/css' />

 <script src="slider.js" />
<script>


 $( document ).ready(function() {"{"}



  window.addEventListener('blur',function(){"{"}
  window.setTimeout(function () {"{"}
  if (document.activeElement instanceof HTMLIFrameElement) {"{"}
  $("audio").remove();
  {"}"}
  {"}"}, 0);
  {"}"}); jQuery('.player').on('click', function () {"{"}
  if(jQuery(this).hasClass('active')) {"{"}
  jQuery(this).find('audio').trigger('play');
  jQuery(this).removeClass('active');
  {"}"} else {"{"}
  jQuery(this).find('audio').trigger('pause'); jQuery(this).addClass('active');
  {"}"}
  {"}"});


  {"}"});




</script>
       </Head>
      <main>
        <Header />
        
      </main>



      <Footer />
      <div className="contact-footer" id="footer">
<p><a href="mailto:antoinopinto4911@gmail.com">AntonioPinto4911@gmail.com</a></p>
<p>Cell: 224-241-9189</p>
</div>
<br /><br />
<br /><br />


  
  <div id="open-modal" className="modal-window">
    <div>
      <a href="#" title="Close" className="modal-close">
        Close
      </a>
      <h1>Contact Antonio</h1>
      <div>
        
<p><a href="mailto:antoinopinto4911@gmail.com">AntonioPinto4911@gmail.com</a></p>
<p>Cell: 224-241-9189</p>
<div className="foot-icons">

        <a href="https://www.instagram.com/antoniopintohighlights/" target="_blank"><img src="/icon-insta.png" /></a>
        <a href="https://twitter.com/antoniopinto_18" target="_blank"><img src="/icon-twitter.png" /></a>
        </div>

<br /><br />
<br /><br />
      </div>
      <br />
    </div>
  </div>
       <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
  <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
  

 

    </div>
  )
}
