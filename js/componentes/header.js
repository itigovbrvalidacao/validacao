function createHeader() {
    const header = document.createElement("header");
    header.classList.add("br-header");
    header.setAttribute("data-sticky", "true");
    header.innerHTML = `
    <span class="debug-bar"></span>
    <div class="container-lg noSpace">
    <div class="header-top">
    <div class="header-logo cursor">
        <img src="./govbr.png" onclick="parent.open('https://www.gov.br/pt-br')" alt="logo" />
        <span class="br-divider vertical"></span>
        <div class="header-sign cursor" onclick="parent.open('https://www.gov.br/iti/pt-br')">&nbsp;&nbsp;&nbsp;&nbsp;Instituto Nacional de Tecnologia da Informação</div>
      </div>
      <div class="header-actions">
        <div class="header-links dropdown">
            <button class="br-button circle small" type="button" data-toggle="dropdown" aria-label="Abrir Acesso Rápido">
                <i class="fas fa-ellipsis-v branco" aria-hidden="true"></i>
            </button>
            <div class="br-list" id="orgaos">
                <div class="header">
                    <div class="title" id="rapido">Acesso Rápido</div>
                </div>
                <a id="menub1" class="br-item" href="https://www.gov.br/pt-br/orgaos-do-governo">Órgãos do Governo</a>
                <a id="menub2" class="br-item" href="https://www.gov.br/acessoainformacao/pt-br">Acesso à  Informação</a>
                <a id="menub3" class="br-item" href="http://www4.planalto.gov.br/legislacao/">Legislação</a>
                <a id="menub4" class="br-item" href="https://www.gov.br/governodigital/pt-br/acessibilidade-digital">Acessibilidade</a>
            </div>
        </div>
        <span class="br-divider vertical mx-half mx-sm-1"></span>
        <div class="header-functions dropdown">
          <button class="br-button circle small" type="button" data-toggle="dropdown" aria-label="Abrir Funcionalidades do Sistema"><i class="fas fa-th branco" aria-hidden="true"></i>
          </button>
          <div class="br-list" id="funcBack">
            <div class="header">
              <div class="title branco" id="funcSistema">Funcionalidades do Sistema</div>
            </div>
            <div class="br-item" id="adjustBack">
                <button id="black" class="br-button circle small" type="button" aria-label="Funcionalidade 1"><i id="adjust" class="fas fa-adjust" aria-hidden="true"></i><span class="text branco" id="funcTema">Tema Escuro/Claro</span>
                </button>
            </div>
            <div class="br-item" id="circleBack">
              <a href="./duvidas.html">
                <button class="br-button circle small" type="button" aria-label="Funcionalidade 2"><i id="circle" class="fas fa-question-circle"></i><span class="text branco" id="funcDuv">DÃºvidas</span>
                </button>
              </a>
            </div>
            <!-- <div class="br-item">
              <button class="br-button circle small" type="button" aria-label="Funcionalidade 3"><i class="fas fa-headset" aria-hidden="true"></i><span class="text">Funcionalidade 3</span>
              </button>
            </div>
            <div class="br-item">
              <button class="br-button circle small" type="button" aria-label="Funcionalidade 4"><i class="fas fa-comment" aria-hidden="true"></i><span class="text">Funcionalidade 4</span>
              </button>
            </div> -->
          </div>
        </div>
        <div class="header-search-trigger">
          <button class="br-button circle" type="button" aria-label="Abrir Busca" data-toggle="search" data-target=".header-search"><i class="fas fa-search branco" aria-hidden="true"></i>
          </button>
        </div>
        <!-- <div class="header-login">
          <div class="header-sign-in">
            <button class="br-sign-in small" type="button" data-trigger="login"><i class="fas fa-user" aria-hidden="true"></i><span class="d-sm-inline">Entrar</span>
            </button>
          </div>
          <div class="header-avatar"></div>
        </div> -->
      </div>
    </div>
    <div class="d-flex">
    <div class="header-bottom" id="header-bottom">
      <div class="header-menu">
        <div class="header-menu-trigger">
          <button class="br-button small circle" type="button" aria-label="Menu" data-toggle="menu" data-target="#main-navigation" id="menu-sticky"><i class="fas fa-bars branco" aria-hidden="true"></i>
          </button>
        </div>
        <div class="header-info">
          <div class="header-title cursor" onclick="window.location.href='./index.html'">VALIDAR</div>
          <div id="menusubtitulo" class="header-subtitle">Serviço de validação de assinaturas eletrônicas</div>
        </div>
      </div>
      <div>
      <div class="header-search" id="search">
        <div class="br-input has-icon">
          <label for="searchbox-25216">Texto da pesquisa</label>
          <input
            oninput="filterSearchCustom()"
            id="inputFilter"
            type="text"
            placeholder="O que você procura?"
          />
          <!-- botÃ£o de lupa -->
          <button
            class="br-button circle small"
            type="button"
            id="triggerexample2"
            data-toggle="dropdown"
            aria-label="Abrir Acesso RÃ¡pido"
            data-target="target2"
          >
            <i class="fas fa-search" aria-hidden="true"></i>
          </button>
          
        </div>
        <!-- botÃ£o de fechar  -->
        <button
          class="br-button circle search-close ml-1"
          type="button"
          aria-label="Fechar Busca"
          data-dismiss="search"
        >
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
      <div id="createDiv" class="br-list target responsividade-search"></div>
    </div>
    <div class="langWrap">
    <div>
        <a onclick="portugues()"><img src="bandeiraBR.png" language="portuga" alt="bandeira_brasil" class="active cursor" id="selectorPT"></a>
    </div>
    <div>
        <a onclick="spanish()"> <img src=" bandeiraESP.png" language="espanhol" alt="bandeira_espanha" class="cursor" id="selectorES"></a>
    </div>
    <div>
        <a onclick="english()"> <img src=" bandeiraUK.png" language="ingles" alt="bandeira_reino_unido" class="cursor" id="selectorIN"></a>
    </div>
  </div>
  </header>
    </div>
  </div>
  </div>
  
    `;
    return header;
  }
  
  function init() {
    const headerContainer = document.body;
    if (headerContainer) {
      const header = createHeader();
      headerContainer.prepend(header);
    }
  }
  
  document.addEventListener("DOMContentLoaded", init);
  
  $(document).ready(function () {
    if (sessionStorage.getItem("black") == "true") {
      setTimeout(function () {
        // let meuElemento = document.getElementById("black");
        // meuElemento.click();
  
        if (sessionStorage.getItem("page") == "relatorioDeConformidade") {
          let meuElemento = document.getElementById("btnFloating");
          meuElemento.click();
        }
        $(
          "#header, .br-header, body, .menu-panel, .menu-item, .wizard-progress, .wizard-panel-btn, .wizard-card, .alert-inf, .mainInfo, .br-accordion, .aten, #orgaos, #menub1, #menub2, #menub3, #menub4,#adjustBack, #circleBack, #funcBack, .blackMode, #impressao "
        ).toggleClass("blackback");
        $(
          ".header-title, .header-subtitle, .header-sign, label, h2, h3, .wizard-progress, .wizard-form, h4, .bnt-pdf, .btnFloating, #Breadcrumbs, #validate, #datevalid, #te3, #ti3a, #te5, #te5a, #te5b, #te9, #te14, .blackMenu, .topicos, ul, #atenH, .atenBar, .divReferencia, #td1, #td2, #td3, #td4, #td5, #td6, #td7, #td8, #td9, #td10, #td11, #td12, #td13, #td14, .tdb, .fontOficial, #ger3aDev, #ger3bDev, #ger3cDev, #ger3dDev, #ger3eDev, #ger1aDev, #ger1bDev, #ger1cDev, #ger1dDev, #ger1eDev, #ger1fDev, #ger1gDev, #ger1hDev, #ger1iDev, #ref1aDev, #ref1bDev, .ref1cDev, #ref1dDev, #ref1eDev, .ref1fDev, #ref1gDev, #ref1hDev, .ref1iDev, #ref2aDev, #ref2bDev, #ref2cDev, #ref2dDev, #ref2eDev, #ref2fDev, #ref2gDev, #ref2hDev, #ref2iDev, #ref2jDev, #info3Duv, #info3aDuv, #info3bDuv, #info5Duv, #info5aDuv, #info5bDuv, #vali1Duv, #vali6Duv, #vali6aDuv, #code1Duv, .branco, .infoAssinatura, #nomeDoArquivo, #nomeArquivo, .infoGeralArquivo, #orgaos, #menub1, #menub2, #menub3, #menub4, #adjust, #circle, brancoo"
        ).toggleClass("whiteText");
        $(".tituloAssInfo, .subitem, .titleSubmenus, .black ").toggleClass(
          "blackText"
        );
        $(
          "#fileselectorbutton_detached, #urlPdfBox,#fileselectorbutton,#qrCodeBtn1"
        ).toggleClass("buttonblack");
        $(".bnts").toggleClass("whitebutton");
        if (sessionStorage.getItem("page") == "relatorioDeConformidade") {
          let meuElemento = document.getElementById("btnFloating");
          meuElemento.click();
        }
      }, 100);
    }
    $("#black").click(function () {
      if (sessionStorage.getItem("page") == "relatorioDeConformidade") {
        let meuElemento = document.getElementById("btnFloating");
        meuElemento.click();
      }
      $(
        "#header, .br-header, body, .menu-panel, .menu-item, .wizard-progress, .wizard-panel-btn, .wizard-card, .alert-info, .mainInfo, .br-accordion, .aten, #orgaos, #menub1, #menub2, #menub3, #menub4, #adjustBack, #circleBack, #funcBack, .blackMode, #impressao "
      ).toggleClass("blackback");
      $(
        ".header-title, .header-subtitle, .header-sign, label, h2, h3, .wizard-progress, .wizard-form, h4, .bnt-pdf, .btnFloating, #Breadcrumbs, #validate, #datevalid, #te3, #ti3a, #te5, #te5a, #te5b, #te9, #te14, .blackMenu, .topicos, ul, #atenH, .atenBar, .divReferencia, #td1, #td2, #td3, #td4, #td5, #td6, #td7, #td8, #td9, #td10, #td11, #td12, #td13, #td14, .tdb, .fontOficial, #ger3aDev, #ger3bDev, #ger3cDev, #ger3dDev, #ger3eDev, #ger1aDev, #ger1bDev, #ger1cDev, #ger1dDev, #ger1eDev, #ger1fDev, #ger1gDev, #ger1hDev, #ger1iDev, #ref1aDev, #ref1bDev, .ref1cDev, #ref1dDev, #ref1eDev, .ref1fDev, #ref1gDev, #ref1hDev, .ref1iDev, #ref2aDev, #ref2bDev, #ref2cDev, #ref2dDev, #ref2eDev, #ref2fDev, #ref2gDev, #ref2hDev, #ref2iDev, #ref2jDev, #info3Duv, #info3aDuv, #info3bDuv, #info5Duv, #info5aDuv, #info5bDuv, #vali1Duv, #vali6Duv, #vali6aDuv, #code1Duv, .branco, .infoAssinatura, #nomeDoArquivo, #nomeArquivo, .infoGeralArquivo, #orgaos, #menub1, #menub2, #menub3, #menub4, #adjust, #circle, .brancoo"
      ).toggleClass("whiteText");
      $(".tituloAssInfo, .subitem, .titleSubmenus, .black ").toggleClass(
        "blackText"
      );
      $(
        "#fileselectorbutton_detached, #urlPdfBox,#fileselectorbutton,#qrCodeBtn1"
      ).toggleClass("buttonblack");
      $(".bnts").toggleClass("whitebutton");
      if (sessionStorage.getItem("black") == "true") {
        sessionStorage.setItem("black", "false");
      } else {
        sessionStorage.setItem("black", "true");
      }
      if (sessionStorage.getItem("page") == "relatorioDeConformidade") {
        let meuElemento = document.getElementById("btnFloating");
        meuElemento.click();
      }
    });
  });
  
  // FunÃ§Ã£o para colocar a tarja vermelha no topo do site
  document.addEventListener("DOMContentLoaded", function () {
    const debugBar = document.querySelector(".debug-bar");
  
    // FunÃ§Ã£o para mostrar a tarja de depuraÃ§Ã£o
    function showDebugBar() {
      debugBar.style.display = "block";
    }
  
    // FunÃ§Ã£o para ocultar a tarja de depuraÃ§Ã£o
    function hideDebugBar() {
      debugBar.style.display = "none";
    }
  
    // Lista de endereÃ§os IP permitidos para exibir a tarja de depuraÃ§Ã£o
    const allowedIPs = ["validar.iti.gov.br", "validar.iti.br"]; // Substitua pelos IPs desejados
  
    // ObtÃ©m o endereÃ§o IP do visitante
    const userIPAddress = window.location.hostname;
    // console.log(window.location.hostname)
  
    // Verifica se o endereÃ§o IP estÃ¡ na lista de IPs permitidos
    if (allowedIPs.includes(userIPAddress)) {
      hideDebugBar();
    } else {
      console.log("NA RELÍQUIA DO PUFF DADDY")
    }
  });
  
  // FunÃ§Ã£o para dar o espaÃ§amento do menu para celular para que o a tarja nÃ£o sobreponha o menu
  document.addEventListener("DOMContentLoaded", function () {
    const noSpace = document.querySelector(".noSpace");
  
    // FunÃ§Ã£o para adicionar a classe e mostrar o elemento
    function showElementWithClass() {
      noSpace.classList.add("tarjaAjuste"); // Adiciona a classe
    }
  
    // FunÃ§Ã£o para remover a classe e ocultar o elemento
    function hideElementWithClass() {
      noSpace.classList.remove("tarjaAjuste"); // Remove a classe
    }
  
    // Lista de endereÃ§os IP permitidos para exibir o elemento
    const allowedIPs = ["validar.iti.gov.br", "validar.iti.br"]; // Substitua pelos IPs desejados
  
    // ObtÃ©m o endereÃ§o IP do visitante
    const userIPAddress = window.location.hostname;
  
    // Verifica se o endereÃ§o IP estÃ¡ na lista de IPs permitidos
    if (allowedIPs.includes(userIPAddress)) {
      hideElementWithClass();
    } else {
      showElementWithClass();
    }
  });