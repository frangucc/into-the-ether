import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'


export default function Italian() {
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
          <li> <a href="#news">Notizie</a> </li>
          <li> <a href="#videos">Videos</a> </li>
          <li> <a href="#about">Chi Siamo</a> </li>
          <li> <a href="#coaches">Allenatori</a> </li>
       
          <li> <a href="#open-modal">Contatto</a> </li>
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
        <p className="sub-text">FC United 06 | MLS Next | U17 | 6”1 165 <span className="hideable">|</span> Attaccante #18 | 3.6 GPA | c/o ‘25 🇮🇹 🇺🇸</p>
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
        <span className="text">Scorri Basso</span>
      </a>

      <div className="elig">
      <div className="flag"><a href="/"><img src="/flag-us.jpg" /></a></div>
      <div className="flag"><a href="/italian"><img src="/flag-italy.jpg" /></a></div>
      <br />
      <p>Ammissibilità</p>
      </div>
    </div>
  </figure>
  {/*  DEMO CONTENT  */}

</>
<div className="elig2">
      <div className="flag"><a href="/"><img src="/flag-us.jpg" /></a></div>
      <div className="flag"><a href="/italian"><img src="/flag-italy.jpg" /></a></div>
      <br />
      <p>Ammissibilità</p>
      </div>
<h2 className="vid-head sport2" id="news">Risultati, Punti Salienti e Notizie</h2>
<p className="vid-head-p">Segui i progressi di Antonio con i suoi ultimi video dei momenti salienti e le notizie recenti.</p>
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
          <h3 className="card-title">Evidenze della primavera 2023 della MLS Next, regione Midwest</h3>
          <p className="card-description">
            Antonio si fa notare questa primavera nella posizione di centravanti titolare, realizzando 11 gol e 8 assist nelle ultime 8 partite di campionato, oltre ad alcuni gol anche in California durante l'MLS Next Fest.
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
            La squadra U17 del FC United nati nel 2006 ha ufficialmente garantito il suo posto nella MLS Next Cup del 2023. Antonio e la sua squadra inizieranno il torneo a Dallas il 17 giugno 2023. 
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
            Con un eccezionale mezzo colpo di tacco all'indietro contro il Baltimore Armour per portare il punteggio sull'1-0 nella seconda metà, Antonio segna molti gol agli incredibili Campionati dell'Accademia IMG MLS.
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
            Antonio realizza molteplici gol e assist all'MLS Next Fest in California lo scorso dicembre. Questo evento altamente competitivo è l'evento di showcase principale per gli scout universitari.
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
          <h3 className="card-title">Partite Esibizione La Liga 2022 a Madrid, Spagna</h3>
          <p className="card-description">
            Antonio viaggia a Madrid con Suenos Sports per competere in 2 partite esibizione private contro le squadre U19 di CF Rayo Majadahonda e Real Vallecano, fornendo 1 gol e 1 assist in entrambe le partite.
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
          <h3 className="card-title">Antonio incontra il Direttore dell'Accademia del Wolverhampton Wanderers F.C. a Golden Chance</h3>
          <p className="card-description">
            Antonio partecipa al secondo giorno del campo privato ID dei Wolves per mostrare il suo talento allo staff di allenamento dei Wolves.
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
          <h3 className="card-title">Campione del Lockport Winter Classic 2022, Chicago</h3>
          <p className="card-description">
            Antonio compete nel Lockport Winter Classic 9v9 garantendo 6 gol in 5 partite, compreso uno straordinario tiro al buzzer negli ultimi secondi della finale per battere Lockport.
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
          <h3 className="card-title">Doppio Campione e Capocannoniere del Campionato di Futsal ID League 2022</h3>
          <p className="card-description">
            "Antonio si aggiudica il primo posto in entrambe le sessioni della ID Futsal League, sede del Chicago Streets Futsal, per Wheeling Futsal. Riceve anche il trofeo di capocannoniere due volte, per entrambe le sessioni.
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
          <h3 className="card-title">Formazione e Recupero Autunno 2022</h3>
          <p className="card-description">
            Un terapista sportivo messicano ripristina miracolosamente il ginocchio di Antonio a fine autunno senza intervento chirurgico o fisioterapia, aiutando Antonio a riconquistare la sua posizione di partenza con FC United U17's.
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
    <div className="swipeRight">SCORRI A DESTRA<span className="arrow">&nbsp;&nbsp;&#8594;</span></div>
      <h3>Testimonianze</h3>
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <div class="card-test border-light bg-light text-center">
            <i class="fa fa-quote-left fa-3x card-img-top rounded-circle" aria-hidden="true"></i>
            <div class="card-body blockquote">
              <p class="card-text">Dentro l'area di rigore, Antonio è incredibilmente pericoloso. I difensori devono stare attenti a dargli spazio. Lui fiuta il gol!</p>
              <footer class="blockquote-footer"><cite title="Source Title">America Technica</cite></footer>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card-test border-light bg-light text-center">
            <i class="fa fa-quote-left fa-3x card-img-top rounded-circle" aria-hidden="true"></i>
            <div class="card-body blockquote">
              <p class="card-text">L'etica del lavoro di Antonio è eccezionale. A 16 anni, si allena come un professionista, più volte al giorno.</p>
              <footer class="blockquote-footer"><cite title="Source Title">Franck Jones</cite></footer>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card-test border-light bg-light text-center">
            <i class="fa fa-quote-left fa-3x card-img-top rounded-circle" aria-hidden="true"></i>
            <div class="card-body blockquote">
              <p class="card-text">Antonio ha l'altezza di un numero 9 e sa creare gioco come un numero 10. La sua passione prefigura ancora più crescita nel prossimo futuro.</p>
              <footer class="blockquote-footer"><cite title="Source Title">Kyle Knotek</cite></footer>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
<br /><br /><br /><br /><br /><br />
  <div className="video-section" id="videos">
  <h4 className="section-caption">Archivi Video</h4>
<h1 className="sport2 vid-h1-pad">Evidenze della stagione primaverile MLS Next 2023</h1>
<p>
Antonio mette in mostra le sue abilità nella lega di calcio più agguerrita degli Stati Uniti. In questa rielaborazione dei momenti salienti della primavera, Antonio ha già segnato 11 gol e fornito 8 assist nelle ultime 9 partite consecutive di campionato MLS Next. Questo video include gol contro la squadra di punta Sockers FC Chicago, così come Shattuck Minnesota, Michigan Wolves, Michigan Jaguars, Midwest, St. Louis e altre squadre. </p>
  <div className="featured-video">
        <iframe src="https://www.youtube.com/embed/Z8wKQU8_ePs?modestbranding=1&autohide=0&showinfo=1&controls=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>
     </div>
     <br /><br /><br />
     <h1 className="sport2 vid-h1-pad">Evidenze di Sockers FC Chicago</h1>
<p>Prima di ritornare a FC United, Antonio ha messo in mostra il suo talento presso Sockers FC Chicago, una delle migliori accademie della regione. Durante il suo tempo lì, Antonio ha segnato più di 60 gol in soli due anni per le squadre U12 e U13. Questa rielaborazione dei momenti salienti sottolinea chiaramente la sua mentalità offensiva implacabile e la sua determinazione ferrea nel segnare per la sua squadra.</p>
  
<div className="featured-video">
        <iframe src="https://www.youtube.com/embed/SDBpQ4s94XE?modestbranding=1&autohide=0&showinfo=0&controls=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>
     </div>

     <br /><br /><br />
     <h1 className="sport2 vid-h1-pad">Una Storia di Duro Lavoro e Passione</h1>
<p>
Questo breve documentario mette in luce l'impegno e la dedizione incrollabile di Antonio nei confronti del suo amato gioco. Il suo percorso non è stato sempre facile; gli allenatori lo hanno spesso spinto duramente e non è sempre stato la scelta principale. Tuttavia, di fronte agli ostacoli, Antonio ha rifiutato le scuse e ha raddoppiato i suoi sforzi. Questa perseveranza gli ha guadagnato il riconoscimento come fonte di ispirazione per molti.</p>
  
     <div className="featured-video">
        <iframe src="https://www.youtube.com/embed/lhH5DTts0NA?modestbranding=1&autohide=0&showinfo=0&controls=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>
     </div>
       <br /><br /><br />
     <h1 className="sport2 vid-h1-pad">Mostra del Futsal della US Soccer Development Academy</h1>
<p>All'età di 12 anni, Antonio è stato invitato alla Mostra del Futsal della US Soccer Development Academy, un prestigioso evento dove ha sorpreso i presenti segnando impressionanti 13 gol in 6 partite nel corso di due giorni. La sua performance lo ha posizionato tra i migliori marcatori di tutta la manifestazione.</p>
  
<div className="featured-video">
        <iframe src="https://www.youtube.com/embed/0KmGHXyqlsI?modestbranding=1&autohide=0&showinfo=0&controls=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>
     </div>
            <br /><br /><br />
     <h1 className="sport2 vid-h1-pad">Evidenze della Stagione di FC United @ U11</h1>
<p>Antonio Pinto ha iniziato il suo viaggio con il suo attuale club, FC United, all'età di 9 anni, unendosi alla squadra U11 come uno dei giocatori più giovani della squadra. Nel suo primo anno, ha brillato in campo segnando oltre 30 gol, contribuendo al successo sia della prima che della seconda squadra. Questo video offre uno sguardo anticipato alla specializzazione di Antonio nella posizione di centravanti.</p>
  
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
      <h1 className="sport3">Riguardo ad Antonio</h1>
      <p>Antonio, cittadino sia degli Stati Uniti che dell'Italia, è nato il 22 settembre 2006. Oggi, è il centravanti titolare di riferimento per il FC United, una squadra che si distingue come <a href="https://www.mlssoccer.com/mlsnext/standings/u17/#Boys%20-%20U17%20Mid-America%20Division" target="_blank">seconda classificata squadre </a> nella fieramente competitiva regione Midwest della MLS Next. <br /><br />Lo sviluppo di Pinto nel calcio è stato guidato da alcuni dei più stimati allenatori dell'area di Chicago, tra cui <a href="https://www.google.com/search?q=oscar+rivero+uic&sxsrf=APwXEddT9BWAOFxpe3gO1Z8cJCH8Adty8g:1684183506975&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjKv629mPj-AhWejIkEHUhVDPQQ_AUoAnoECAEQBA&biw=1729&bih=1099&dpr=2" target="_blank">Oscar Rivero</a>, <a href="https://www.google.com/search?q=nilton+batata&tbm=isch&ved=2ahUKEwifg5u-mPj-AhW3NN4AHWTaBWoQ2-cCegQIABAA&oq=nilton+batata&gs_lcp=CgNpbWcQAzIECCMQJzIGCAAQCBAeMgcIABAYEIAEOggIABCABBCxAzoFCAAQgAQ6BwgAEIoFEEM6BAgAEB5QggZYvxFgghNoAHAAeACAAXCIAekIkgEEMTEuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=1JliZJ_JLrfp-LYP5LSX0AY&bih=1099&biw=1729" target="_blank">Nilton Batata</a>, <a href="https://www.google.com/search?q=gonzalo+segares&tbm=isch&ved=2ahUKEwjv7YD5mPj-AhU6KN4AHQ1PDrUQ2-cCegQIABAA&oq=gonzalo+segares&gs_lcp=CgNpbWcQAzIFCAAQgAQyBwgAEBgQgAQyBwgAEBgQgAQyBwgAEBgQgAQ6BAgjECc6BggAEAgQHjoICAAQgAQQsQM6BwgAEIoFEEM6CwgAEIAEELEDEIMBOgQIABAeOgYIABAFEB5QrgNY-BZgoxhoAXAAeACAAWmIAZYLkgEEMTUuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=UJpiZO-FBLrQ-LYPjZ65qAs&bih=1099&biw=1729" target="_blank">Gonzalo Segares</a>, <a href="https://www.google.com/search?q=charlie+trout&tbm=isch&ved=2ahUKEwiO1MyGmfj-AhWrI94AHbn8DCgQ2-cCegQIABAA&oq=charlie+trout&gs_lcp=CgNpbWcQAzIECCMQJzIHCAAQGBCABDIHCAAQGBCABDIHCAAQGBCABDIHCAAQGBCABDIHCAAQGBCABDIHCAAQGBCABDIHCAAQGBCABDIHCAAQGBCABDoFCAAQgAQ6CAgAEIAEELEDOgcIABCKBRBDOgoIABCKBRCxAxBDOggIABCxAxCDAToECAAQAzoECAAQHjoGCAAQBRAeOgYIABAIEB5Q5gNYsBJglBNoAXAAeACAAWmIAbEKkgEEMTMuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=bJpiZI7uIqvH-LYPufmzwAI&bih=1099&biw=1729" target="_blank">Charlie Trout</a>, <a href="https://www.google.com/search?q=Aleksey+Korol&tbm=isch&hl=en&sa=X&ved=2ahUKEwixtfCwmfj-AhULM94AHRT5DSAQBXoECAEQLQ&biw=1729&bih=1099" target="_blank">Aleksey Korol</a>, and <a href="https://www.google.com/search?q=kyle+knotek&tbm=isch&ved=2ahUKEwjJqsKymfj-AhVaE94AHQUmDIMQ2-cCegQIABAA&oq=kyle+knotek&gs_lcp=CgNpbWcQAzIHCAAQGBCABDIHCAAQGBCABDoECCMQJzoHCAAQigUQQzoICAAQgAQQsQM6BQgAEIAEOggIABCxAxCDAToLCAAQgAQQsQMQgwE6BggAEAgQHjoECAAQHlCBiwFY7p4BYICgAWgDcAB4AIABdogBhgmSAQQxMi4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=yJpiZMmmKdqm-LYPhcywmAg&bih=1099&biw=1729&hl=en" target="_blank">Kyle Knotek</a>.

      <br />
      <br />
     Quando non si allena o gioca a calcio, Antonio si diverte a suonare il pianoforte, pescare e giocare a FIFA. Parla anche un buon livello di Italiano. &#xe50f;

      </p>
       </div>
       <br />
      <div className="hero-home" id="about">
      <div className="antonio-bio">
      <h1 className="sport3">About Antonio</h1>
      <p>Antonio, cittadino sia degli Stati Uniti che dell'Italia, è nato il 22 settembre 2006. Oggi, è il centravanti titolare di riferimento per il FC United, una squadra che si distingue come <a href="https://www.mlssoccer.com/mlsnext/standings/u17/#Boys%20-%20U17%20Mid-America%20Division" target="_blank">seconda classificata squadre </a> nella fieramente competitiva regione Midwest della MLS Next. <br /><br />Lo sviluppo di Pinto nel calcio è stato guidato da alcuni dei più stimati allenatori dell'area di Chicago, tra cui <a href="https://www.google.com/search?q=oscar+rivero+uic&sxsrf=APwXEddT9BWAOFxpe3gO1Z8cJCH8Adty8g:1684183506975&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjKv629mPj-AhWejIkEHUhVDPQQ_AUoAnoECAEQBA&biw=1729&bih=1099&dpr=2" target="_blank">Oscar Rivero</a>, <a href="https://www.google.com/search?q=nilton+batata&tbm=isch&ved=2ahUKEwifg5u-mPj-AhW3NN4AHWTaBWoQ2-cCegQIABAA&oq=nilton+batata&gs_lcp=CgNpbWcQAzIECCMQJzIGCAAQCBAeMgcIABAYEIAEOggIABCABBCxAzoFCAAQgAQ6BwgAEIoFEEM6BAgAEB5QggZYvxFgghNoAHAAeACAAXCIAekIkgEEMTEuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=1JliZJ_JLrfp-LYP5LSX0AY&bih=1099&biw=1729" target="_blank">Nilton Batata</a>, <a href="https://www.google.com/search?q=gonzalo+segares&tbm=isch&ved=2ahUKEwjv7YD5mPj-AhU6KN4AHQ1PDrUQ2-cCegQIABAA&oq=gonzalo+segares&gs_lcp=CgNpbWcQAzIFCAAQgAQyBwgAEBgQgAQyBwgAEBgQgAQyBwgAEBgQgAQ6BAgjECc6BggAEAgQHjoICAAQgAQQsQM6BwgAEIoFEEM6CwgAEIAEELEDEIMBOgQIABAeOgYIABAFEB5QrgNY-BZgoxhoAXAAeACAAWmIAZYLkgEEMTUuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=UJpiZO-FBLrQ-LYPjZ65qAs&bih=1099&biw=1729" target="_blank">Gonzalo Segares</a>, <a href="https://www.google.com/search?q=charlie+trout&tbm=isch&ved=2ahUKEwiO1MyGmfj-AhWrI94AHbn8DCgQ2-cCegQIABAA&oq=charlie+trout&gs_lcp=CgNpbWcQAzIECCMQJzIHCAAQGBCABDIHCAAQGBCABDIHCAAQGBCABDIHCAAQGBCABDIHCAAQGBCABDIHCAAQGBCABDIHCAAQGBCABDIHCAAQGBCABDoFCAAQgAQ6CAgAEIAEELEDOgcIABCKBRBDOgoIABCKBRCxAxBDOggIABCxAxCDAToECAAQAzoECAAQHjoGCAAQBRAeOgYIABAIEB5Q5gNYsBJglBNoAXAAeACAAWmIAbEKkgEEMTMuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=bJpiZI7uIqvH-LYPufmzwAI&bih=1099&biw=1729" target="_blank">Charlie Trout</a>, <a href="https://www.google.com/search?q=Aleksey+Korol&tbm=isch&hl=en&sa=X&ved=2ahUKEwixtfCwmfj-AhULM94AHRT5DSAQBXoECAEQLQ&biw=1729&bih=1099" target="_blank">Aleksey Korol</a>, and <a href="https://www.google.com/search?q=kyle+knotek&tbm=isch&ved=2ahUKEwjJqsKymfj-AhVaE94AHQUmDIMQ2-cCegQIABAA&oq=kyle+knotek&gs_lcp=CgNpbWcQAzIHCAAQGBCABDIHCAAQGBCABDoECCMQJzoHCAAQigUQQzoICAAQgAQQsQM6BQgAEIAEOggIABCxAxCDAToLCAAQgAQQsQMQgwE6BggAEAgQHjoECAAQHlCBiwFY7p4BYICgAWgDcAB4AIABdogBhgmSAQQxMi4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=yJpiZMmmKdqm-LYPhcywmAg&bih=1099&biw=1729&hl=en" target="_blank">Kyle Knotek</a>.

      <br /><br />
        Quando non si allena o gioca a calcio, Antonio si diverte a suonare il pianoforte, pescare e giocare a FIFA. Parla anche un buon livello di Italiano.
      </p>


       </div>
     <div>

        
      </div>

      </div>

      <br /><br /><br /><br /><br /><br />
  <div className="video-section" id="coaches">
  <h4 className="section-caption">Mentori</h4>
<h1 className="sport2 vid-h1-pad">Coaches & Trainers</h1>
<p>
"Chicago non è solo una città, è il mio campo di allenamento, ricco di alcuni dei più bravi e talentuosi allenatori e preparatori di calcio degli Stati Uniti. Questi ragazzi sono i veri MVP: senza di loro, non sarei dove sono oggi."

Insieme, abbiamo ottenuto molto, ma la partita è lontana dal termine. Ci sono ancora sangue, sudore e lacrime da affrontare, e sono benedetto ad avere questi mentori con me ad ogni passo del cammino. Se stai cercando di migliorare il tuo gioco, non posso raccomandarli abbastanza." <i>-Antonio Pinto</i></p>
  

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
          <h3 className="card-title">Oscar Rivero, FC United U17/U19 L'allenatore Capo</h3>
          <p className="card-description">
            L'allenatore Oscar ha svolto un ruolo fondamentale nella recente progressione delle abilità di Antonio. Conosciuto per il suo stile di allenamento rigoroso e l'eccezionale attenzione ai dettagli, ha guidato con successo la squadra U17 verso i playoff della MLS Cup nel suo primo anno come allenatore capo del FCU. 🇨🇺 🇲🇽
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
          <h3 className="card-title">Gonzalo Segares, Fire Legend & Former FC United U14/U15 Allenatore - Current U17 US National Team Head Coach</h3>
          <p className="card-description">
           Gonzalo Segares ha notato una scintilla promettente in Antonio quando lo ha allenato nelle squadre U14 e U15. Ora, Gonzalo porta la sua ricca esperienza e profonda conoscenza nel suo attuale ruolo di allenatore capo della squadra nazionale U17. 🇨🇷
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
            Nilton Batata ha svolto un ruolo cruciale nella formazione delle prime fasi dello sviluppo calcistico di Antonio. L'approccio duro ma appassionato di Batata all'allenamento ha avuto un impatto duraturo. Le squadre giovanili di Sockers FC da lui guidate sono rinomate come alcune delle migliori al mondo. 🇧🇷
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
            Charlie Trout è riconosciuto come uno dei principali allenatori di calcio di Chicago e co-creatore di <a href="https://www.fundamentalfutbol.net/" className="yellowLinks" target="_blank">Fundamental Futbol</a>. È noto per la sua profonda capacità di insegnare e ispirare giovani giocatori. Antonio ha affinato le sue abilità sotto la guida di Charlie per oltre mezzo decennio. 🇬🇧
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
            Aleksey, un doppio campione NCAA e ex professionista, gode di una reputazione leggendaria all'interno dei circoli calcistici di Chicago. Rinomato per la sua competenza nel training a uno e due tocchi e nell'incremento della capacità del piede debole, incarna un allenatore che va dritto al punto, concentrato esclusivamente sullo sviluppo dei suoi atleti.  🇺🇦
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
            Le strutture di allenamento all'avanguardia di Kyle e le sue capacità di formazione specifiche per la posizione hanno aiutato Antonio a perfezionare dettagli cruciali che vanno dal linguaggio del corpo alla tecnica senza palla.
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
