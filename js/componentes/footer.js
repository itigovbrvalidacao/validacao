function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('br-footer');
    footer.innerHTML = `
    <div class="container-lg" id="aaaaa">
    <div class="logo"><img src="./imagens/logo-iti.png" alt="Imagem" /></div>
    <!-- ComeÃ§o da div para links diretos no footer -->
    <div class="br-list horizontal" data-toggle="data-toggle" data-sub="data-sub">
      <div class="col-2">
        <div class="br-item header footer-nowrap">
          <a href="https://www.gov.br/iti/pt-br/assuntos"
            class="content text-down-01 text-bold text-uppercase flex-none">Assuntos</a>
          <div class="support"><i class="fas fa-angle-down" aria-hidden="true"></i>
          </div>
        </div>
        <div class="br-list"><span class="br-divider d-md-none"></span><a class="br-item"
            href="https://auditoria.iti.gov.br/#/">
            <div class="content">Auditoria ICP-Brasil</div>
          </a><a class="br-item" href="https://www.gov.br/iti/pt-br/assuntos/cadastro-de-agente-de-registro-car">
            <div class="content">Cadastro de Agente de Registro - CAR</div>
          </a>
          </span><a class="br-item" href="https://www.gov.br/iti/pt-br/assuntos/certificado-digital">
            <div class="content">Certificado Digital</div>
          </a><a class="br-item" href="https://www.gov.br/iti/pt-br/assuntos/comite-gestor">
            <div class="content">ComitÃª Gestor</div>
          </a><a class="br-item" href="https://www.gov.br/iti/pt-br/assuntos/consulta-publica">
            <div class="content">Consulta PÃºblica</div>
          </a><a class="br-item" href="https://www.gov.br/iti/pt-br/assuntos/credenciamento">
            <div class="content">Credenciamento</div>
          </a>
          </span><a class="br-item" href="https://fiscalizacao.iti.gov.br/index">
            <div class="content">FiscalizaÃ§Ã£o</div>
          </a><a class="br-item" href="https://www.gov.br/iti/pt-br/assuntos/homologacao">
            <div class="content">HomologaÃ§Ã£o</div>
          </a><a class="br-item" href="https://www.gov.br/iti/pt-br/assuntos/icp-brasil">
            <div class="content">ICP-Brasil</div>
          </a><a class="br-item" href="https://www.gov.br/iti/pt-br/assuntos/legislacao">
            <div class="content">LegislaÃ§Ã£o</div>
          </a>
          </span><a class="br-item" href="https://www.gov.br/iti/pt-br/assuntos/noticias">
            <div class="content">NotÃ­cias</div>
          </a><a class="br-item"
            href="https://www.gov.br/pt-br/servicos/protocolar-documentos-junto-ao-instituto-nacional-de-tecnologia-da-informacao-iti">
            <div class="content">Protocolo Digital ITI</div>
          </a><a class="br-item" href="https://www.gov.br/iti/pt-br/assuntos/publicacoes">
            <div class="content">PublicaÃ§Ãµes TÃ©cnicas</div>
          </a><a class="br-item" href="https://www.gov.br/iti/pt-br/assuntos/repositorio">
            <div class="content">RepositÃ³rio</div>
          </a>
          </span><a class="br-item" href="https://www.gov.br/iti/pt-br/assuntos/navegadores">
            <div class="content">Navegadores</div>
          </a><span class="br-divider d-md-none"></span>
        </div>
      </div>
      <div class="col-2">
        <div class="br-item header footer-nowrap">
          <a href="https://www.gov.br/iti/pt-br/acesso-a-informacao"
            class="content text-down-01 text-bold text-uppercase">Acesso Ã  informaÃ§Ã£o</a>
          <div class="support"><i class="fas fa-angle-down" aria-hidden="true"></i>
          </div>
        </div>
        <div class="br-list"><span class="br-divider d-md-none"></span><a class="br-item"
            href="https://www.gov.br/iti/pt-br/acesso-a-informacao/institucional">
            <div class="content">Institucional</div>
          </a><a class="br-item" href="https://www.gov.br/iti/pt-br/acesso-a-informacao/acoes-e-programas">
            <div class="content">AÃ§Ãµes e Programas</div>
          </a><a class="br-item" href="https://www.gov.br/iti/pt-br/acesso-a-informacao/participacao-social">
            <div class="content">ParticipaÃ§Ã£o Social</div>
          </a>
          </span><a class="br-item" href="https://www.gov.br/iti/pt-br/acesso-a-informacao/auditorias">
            <div class="content">Auditorias</div>
          </a><a class="br-item" href="https://www.gov.br/iti/pt-br/acesso-a-informacao/convenios-e-transferencias">
            <div class="content">ConvÃªnios e TransferÃªncias</div>
          </a><a class="br-item" href="https://www.gov.br/iti/pt-br/acesso-a-informacao/receitas-e-despesas">
            <div class="content">Receitas e Despesas</div>
          </a><a class="br-item" href="https://www.gov.br/iti/pt-br/acesso-a-informacao/licitacoes-e-contratos">
            <div class="content">LicitaÃ§Ãµes e Contratos</div>
          </a>
          </span><a class="br-item" href="https://www.gov.br/iti/pt-br/acesso-a-informacao/servidores">
            <div class="content">Servidores ITI</div>
          </a><a class="br-item" href="https://www.gov.br/iti/pt-br/acesso-a-informacao/informacoes-classificadas">
            <div class="content">InformaÃ§Ãµes Classificadas</div>
          </a><a class="br-item"
            href="https://www.gov.br/iti/pt-br/acesso-a-informacao/servico-de-informacao-ao-cidadao-sic">
            <div class="content">ServiÃ§o de InformaÃ§Ã£o ao CidadÃ£o - SIC</div>
          </a><a class="br-item" href="https://www.gov.br/iti/pt-br/acesso-a-informacao/perguntas-frequentes">
            <div class="content">Perguntas Frequentes</div>
          </a>
          </span><a class="br-item" href="https://www.gov.br/iti/pt-br/acesso-a-informacao/dados-abertos">
            <div class="content">Dados Abertos</div>
          </a><a class="br-item" href="https://www.gov.br/iti/pt-br/acesso-a-informacao/sancoes-administrativas">
            <div class="content">SensaÃ§Ãµes Administrativas</div>
          </a><a class="br-item"
            href="https://www.gov.br/iti/pt-br/acesso-a-informacao/ferramentas-e-aspectos-tecnologicos">
            <div class="content">Ferramentas e aspectos tecnolÃ³gicos</div>
          </a><a class="br-item" href="https://www.gov.br/iti/pt-br/acesso-a-informacao/agendas-do-iti">
            <div class="content">Agendas do ITI</div>
          </a>
          </span><a class="br-item"
            href="https://www.gov.br/iti/pt-br/acesso-a-informacao/privacidade-e-protecao-de-dados">
            <div class="content">Privacidade e ProteÃ§Ã£o de Dados</div>
          </a><span class="br-divider d-md-none"></span>
        </div>
      </div>
      <div class="col-2">
        <div class="br-item header footer-nowrap">
          <a href="https://www.gov.br/iti/pt-br/centrais-de-conteudo"
            class="content text-down-01 text-bold text-uppercase">Centrais de ConteÃºdo</a>
          <div class="support"><i class="fas fa-angle-down" aria-hidden="true"></i>
          </div>
        </div>
        <div class="br-list"><span class="br-divider d-md-none"></span><a class="br-item"
            href="https://www.gov.br/iti/pt-br/centrais-de-conteudo/aplicativos">
            <div class="content">Aplicativos</div>
          </a><a class="br-item" href="https://www.gov.br/iti/pt-br/centrais-de-conteudo/glossario">
            <div class="content">GlossÃ¡rio</div>
          </a><a class="br-item" href="https://www.gov.br/iti/pt-br/centrais-de-conteudo/opiniao-do-diretor-presidente">
            <div class="content">OpiniÃ£o do Diretor Presidente</div>
          </a><a class="br-item" href="https://www.gov.br/iti/pt-br/centrais-de-conteudo/artigos">
            <div class="content">Artigos</div>
          </a><span class="br-divider d-md-none"></span>
        </div>
      </div>
      <div class="col-2">
        <div class="br-item header footer-nowrap">
          <a href="https://www.gov.br/iti/pt-br/canais_atendimento"
            class="content text-down-01 text-bold text-uppercase">Canais de Atendimento</a>
          <div class="support"><i class="fas fa-angle-down" aria-hidden="true"></i>
          </div>
        </div>
        <div class="br-list"><span class="br-divider d-md-none"></span><a class="br-item"
            href="https://www.gov.br/iti/pt-br/canais_atendimento/imprensa">
            <div class="content">Imprensa</div>
          </a><a class="br-item" href="https://falabr.cgu.gov.br/web/home">
            <div class="content">Ouvidoria</div>
          </a><a class="br-item"
            href="https://www.gov.br/iti/pt-br/acesso-a-informacao/servico-de-informacao-ao-cidadao-sic/sic-servico-de-informacao-ao-cidadao">
            <div class="content">ServiÃ§o de InformaÃ§Ã£o ao CidadÃ£o - SIC</div>
          </a><span class="br-divider d-md-none"></span>
        </div>
      </div>
      <div class="col-2">
        <div class="br-item header footer-nowrap">
          <a href="https://www.gov.br/iti/pt-br/redes-sociais-canais"
            class="content text-down-01 text-bold text-uppercase">Redes Sociais/Canais</a>
          <div class="support"><i class="fas fa-angle-down" aria-hidden="true"></i>
          </div>
        </div>
        <div class="br-list"><span class="br-divider d-md-none"></span><a class="br-item"
            href="https://www.facebook.com/itigovbr">
            <div class="content">Facebook</div>
          </a><a class="br-item" href="https://twitter.com/i/flow/login?redirect_after_login=%2Fitigovbr">
            <div class="content">Twitter</div>
          </a><a class="br-item" href="https://www.linkedin.com/company/1105316">
            <div class="content">Linkedin</div>
          </a>
          </span><a class="br-item" href="http://instagram.com/itigovbr">
            <div class="content">Instagram</div>
          </a><a class="br-item" href="http://youtube.com/user/itidigital">
            <div class="content">Youtube</div>
          </a><a class="br-item" href="https://www.flickr.com/photos/itigovbr/">
            <div class="content">Flickr</div>
          </a><a class="br-item" href="https://t.me/itigovbr">
            <div class="content">Telegram</div>
          </a><span class="br-divider d-md-none"></span>
        </div>
      </div>
      <div class="col-2"><a class="br-item header footer-nowrap" href="https://certforum.iti.gov.br/">
          <div class="content text-down-01 text-bold text-uppercase">Certforum</div>
          <!-- <div class="support"><i class="fas fa-angle-down" aria-hidden="true"></i> -->
      </div></a>
    </div>
  
    <!-- Final da div para links diretos no footer -->
    <div class="d-none d-sm-block">
      <div class="row align-items-end justify-content-between py-5">
        <div class="col">
          <div class="social-network">
            <div class="social-network-title" id="arrobaiti">Redes Sociais</div>
            <div class="d-flex"><a class="br-button circle" href="https://www.facebook.com/itigovbr"
                aria-label="Compartilhar por Facebook"><i class="fab fa-facebook-f" aria-hidden="true"></i></a><a
                class="br-button circle" href="https://twitter.com/itigovbr" aria-label="Compartilhar por Twitter"><i class="fab fa-twitter"></i></a><a class="br-button circle"
                href="https://br.linkedin.com/company/itigovbr" aria-label="Compartilhar por Linkedin"><i
                  class="fab fa-linkedin-in" aria-hidden="true"></i></a><a class="br-button circle"
                href="https://www.youtube.com/user/itidigital" aria-label="Compartilhar por Youtube"><i
                  class="fab fa-youtube" aria-hidden="true"></i></a><a class="br-button circle"
                href="https://www.instagram.com/itigovbr" aria-label="Compartilhar por Instagram"><i
                  class="fab fa-instagram" aria-hidden="true"></i></a></div>
          </div>
        </div>
        <div class="col assigns text-right">
          <!-- <img class="ml-4" src="https://cdngovbr-ds.estaleiro.serpro.gov.br/design-system/images/logo-assign-negative.png" alt="Imagem"/> -->
          <img class="ml-4 cursor" src="./imagens/govbrpb.png" onclick="parent.open('https://www.gov.br/acessoainformacao/pt-br')"
            src="/images/acessoAinformacao.svg" alt="Imagem" />
        </div>
      </div>
    </div>
  
  </div>
  
  </div><span class="br-divider my-3"></span>
  <!-- Div para termos de uso do site -->
  <div class="container-lg">
    <div class="info">
      <div class="text-down-01 text-medium pb-3">Texto destinado a exibiÃ§Ã£o de informaÃ§Ãµes relacionadas
        Ã &nbsp;<strong>licenÃ§a de uso.</strong></div>
    </div>
  </div>
  <!-- Final da div para termos de uso do site -->
    `;
    return footer;
  }
  
  function init() {
    const footerContainer = document.body;
    if (footerContainer) {
        const footer = createFooter();
        footerContainer.appendChild(footer);
    }
  }
  
  document.addEventListener('DOMContentLoaded', init);