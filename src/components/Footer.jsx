import React from "react";

function Footer()  {
    return(
<div className="ftr">
        <div class="d-flex justify-content-between">
        <div class="row">
          <div class="col-md-4">
              <h4>Azienda</h4>
              <ul>
                  <li><a href="#">Chi siamo</a></li>
                  <li><a href="#">Opportunità di lavoro</a></li>
                  <li><a href="#">For the Record</a></li>
              </ul>
          </div>
          <div class="col-md-4">
              <h4>Community</h4>
              <ul>
                  <li><a href="#">Per artisti</a></li>
                  <li><a href="#">Sviluppatori</a></li>
                  <li><a href="#">Pubblicità</a></li>
                  <li><a href="#">Investitori</a></li>
                  <li><a href="#">Venditori</a></li>
              </ul>
          </div>
          <div class="col-md-4">
              <h4>Link Utili</h4>
              <ul>
                  <li><a href="#">Assistenza</a></li>
                  <li><a href="#">App mobile gratuita</a></li>
                  <li><a href="#">Diritti del consumatore</a></li>
              </ul>
          </div>
      </div>
        
      </div>
    <div class="cont">
      <div>
      <p class="iff">informazioni legali </p>
       <p class="iff">Sicurezza e Centro sulla privacy </p>
       <p class="iff">Informativa sulla privacy </p>
        <p class="iff">Impostazioni coockie </p>
          <p class="iff">Info annunci </p>
            <p class="iff">Accessibilità</p>
          </div>
          <div>
            <p style={{ color: '#969696;' }}>&copy;2024 Meteo AB</p>
          </div>
    </div>
</div>
    );
}

export default Footer;
