// Click de botÃµes

function escondeFile() {
    document.getElementById("formFile").click();
  }
  
  function escondeEnviaDuvida() {
    document.getElementById("emailduvida").click();
  }
  
  function manutencao() {
    Swal.fire({
      icon: "warning",
      title: "FunÃ§Ã£o em manutenÃ§Ã£o",
    });
  }
  
  function avaliarBotao() {
    window.open("./avaliar.html");
  }
  
  // js que faz o scroll suave para as seÃ§Ãµes definidas do site
  function scrollToSection(sectionId) {
    var targetSection = document.querySelector(sectionId);
  
    if (targetSection) {
      var scrollOffset = targetSection.offsetTop - window.innerHeight / 2;
      window.scrollTo({ top: scrollOffset, behavior: "smooth" });
      targetSection.classList.add("highlight");
  
      setTimeout(function () {
        targetSection.classList.remove("highlight");
      }, 3300);
    }
  }
  
  // ObtÃ©m o hash da URL e rola atÃ© a seÃ§Ã£o correspondente quando a pÃ¡gina Ã© carregada
  $(document).ready(function () {
    var hash = window.location.hash;
    if (hash) {
      scrollToSection(hash);
    }
  });
  
  function clickSocial(id) {
    switch (id) {
      case "twitter":
        window.open("https://twitter.com/itigovbr");
        break;
      case "youtube":
        window.open("https://www.youtube.com/user/itidigital");
        break;
      case "face":
        window.open("https://www.facebook.com/itigovbr");
        break;
      case "linkedin":
        window.open("https://br.linkedin.com/company/itigovbr");
        break;
      case "insta":
        window.open("https://instagram.com/itigovbr?igshid=YmMyMTA2M2Y=");
        break;
    }
  }
  function modalTermos() {
    var lin = sessionStorage.getItem("language");
    if (lin == "portuga") {
      Swal.fire({
        width: "1000px",
        html: '<h3><b>TERMO DE USO E POLÃTICA DE PRIVACIDADE</b></h3><br><p>Este termo foi atualizado em 07/11/2023 em conformidade com a <a href="https://www.in.gov.br/en/web/dou/-/portaria-iti-n-22-de-28-de-setembro-de-2023-513844303">(Portaria ITI nÂ° 22, de 28 de setembro de 2023)</a></p><h5 class="mt-3"><b>InformaÃ§Ãµes nesse documento</b></h5><p>Neste Termo, o usuÃ¡rio do serviÃ§o VALIDAR encontrarÃ¡ informaÃ§Ãµes sobre:</p><ul class = "text-left"><li><p class="m-0">AceitaÃ§Ã£o do Termo;</p></li><li><p class="m-0">DescriÃ§Ã£o do serviÃ§o;</p></li><li><p class="m-0">LegislaÃ§Ã£o aplicÃ¡vel;</p></li><li><p class="m-0">Tratamento de dados;</p></li><li><p class="m-0">Resultados obtidos;</p></li><li><p class="m-0">Responsabilidades do usuÃ¡rio;</p></li><li><p class="m-0">Garantias do ITI;</p></li><li><p class="m-0">Responsabilidades do ITI.</p></li></ul><br><h5><b>AceitaÃ§Ã£o do Termo</b></h5><p>Ao utilizar o serviÃ§o, vocÃª confirma que leu, compreendeu o Termo de Uso e PolÃ­tica de Privacidade aplicÃ¡veis ao serviÃ§o solicitado e concorda em ficar a eles vinculado</p><br><h5><b>DescriÃ§Ã£o do serviÃ§o</b></h5><p>LanÃ§ado em 19 de dezembro de 2022, o VALIDAR unifica e substitui outros dois portais de serviÃ§os: o www.assinaturadigital.iti.gov.br e o www.verificador.iti.gov.br.</p><p>O serviÃ§o permite conferir apenas o status de uma assinatura eletrÃ´nica, seja ela do tipo avanÃ§ada ou qualificada, quanto Ã  integridade e autoria, em documentos assinados digitalmente por certificados emitidos no Ã¢mbito da ICP-Brasil ou por outras infraestruturas que sejam oficialmente reconhecidas no Brasil, como a assinatura avanÃ§ada produzida no Ã¢mbito do portal GOV.BR, nÃ£o sendo possÃ­vel conferir a veracidade do conteÃºdo dos documentos submetidos.</p><p>Este serviÃ§o tambÃ©m compreende a submissÃ£o de documentos cujas assinaturas eletrÃ´nicas tenham sido providas por infraestruturas de chaves pÃºblicas oficiais de outros paÃ­ses.</p><br><h5 class="mt-3"><b>REQUISITOS</b></h5><p>Os seguintes requisitos sÃ£o considerados pelo serviÃ§o de validaÃ§Ã£o:</p><ul class = "text-left"><li><p class="m-0">Validar o estado criptogrÃ¡fico da assinatura eletrÃ´nica;</p></li><li><p class="m-0">Verificar se a cadeia de confianÃ§a de certificaÃ§Ã£o, incluindo o certificado digital do titular, estava vÃ¡lida na referÃªncia temporal adotada no momento da criaÃ§Ã£o da assinatura;</p></li><li><p class="m-0">Confirmar a validade da assinatura eletrÃ´nica da Autoridade Certificadora que emitiu o certificado do signatÃ¡rio e de toda a cadeia de certificaÃ§Ã£o atÃ© a Autoridade Certificadora Raiz de uma determinada Ã¢ncora de confianÃ§a;</p></li></ul><br><h5><b>LegislaÃ§Ã£o aplicÃ¡vel</b></h5><p>O VALIDAR atende os dispositivos legais, tal como a regulamentaÃ§Ã£o da ICP-Brasil e as definiÃ§Ãµes contidas tanto na Medida ProvisÃ³ria nÂº 2.200-2, de 24 de agosto de 2001, quanto na Lei nÂº 14.063, de 23 de setembro de 2020 e no Decreto nÂº 10.543, de 13 de novembro de 2020. Obedece ainda ao Acordo de Reconhecimento MÃºtuo de Assinaturas Digitais do Mercosul e a eventuais outros acordos, convÃªnios e tratados de reconhecimento tÃ©cnico de assinaturas eletrÃ´nicas de que o Brasil seja signatÃ¡rio.</p><p>Ressalta-se ainda que o serviÃ§o tambÃ©m considera as assinaturas providas por certificados digitais procedentes da cadeia de confianÃ§a da Adobe. Isso acontece porque o ITI representa o Brasil no programa Adobe Approved Trust List, conforme acordo assinado entre ITI e aquela empresa.</p><p>AlÃ©m disso, apenas sÃ£o passÃ­veis de verificaÃ§Ã£o os arquivos produzidos nos formatos CMS CAdES, XAdES e PAdES nas modalidades embarcadas ou destacadas, conforme previsto na ResoluÃ§Ã£o CG ICP-Brasil nÂº 182, de 18 de fevereiro de 2021 e na Portaria Conjunta ITI/CC/PR SGD/SEDGG/ME nÂº 1, de 08 de setembro de 2021.</p><p>A ResoluÃ§Ã£o CG ICP-Brasil 182/2021 traz uma visÃ£o geral sobre assinaturas digitais, define os principais conceitos e lista os demais documentos que compÃµem as normas da ICP-Brasil sobre o assunto. JÃ¡ a Portaria Conjunta ITI/CC/PR SGD/SEDGG/ME 1/2021 estabelece os padrÃµes criptogrÃ¡ficos referenciais para as assinaturas eletrÃ´nicas avanÃ§adas nas comunicaÃ§Ãµes que envolvam a administraÃ§Ã£o pÃºblica federal direta, autÃ¡rquica e fundacional.</p><br><h5><b>Tratamento de dados</b></h5><p>Durante a navegaÃ§Ã£o, o portal VALIDAR utiliza cookies prÃ³prios (primÃ¡rios), ou seja, dos domÃ­nios validar.iti.gov.br e validar.iti.br, para registrar as configuraÃ§Ãµes e preferÃªncias de navegaÃ§Ã£o dos usuÃ¡rios e gerar relatÃ³rios estatÃ­sticos atravÃ©s do Google Analytics, e tambÃ©m cookies de terceiros para complementar essas estatÃ­sticas. A configuraÃ§Ã£o do Google Analytics para os domÃ­nios citados nÃ£o permite que dados pessoais e o documento assinado objeto de validaÃ§Ã£o sejam armazenados e/ou repassados a terceiros.</p><p>O serviÃ§o descarta o documento submetido Ã  verificaÃ§Ã£o tÃ£o logo finalize a validaÃ§Ã£o das assinaturas e, para isso, precisa calcular o hash (resumo criptogrÃ¡fico) do documento e comparÃ¡-lo com o hash da assinatura. Dados obtidos atravÃ©s de documentos enviados por usuÃ¡rios atravÃ©s dos canais de atendimento, entre os quais Fala.BR e e-mail institucional do ITI, sÃ£o tratados exclusivamente para analisar a dÃºvida do usuÃ¡rio e descartados na sequÃªncia.</p><p>Para a finalidade de informar o resultado da verificaÃ§Ã£o dos documentos assinados eletronicamente, o portal VALIDAR realiza o tratamento dos seguintes dados pessoais dos documentos enviados pelos usuÃ¡rios:</p><ul class ="text-left"><li><p class="m-0">Nome;</p></li><li><p class="m-0">CPF;</p></li><li><p class="m-0">Registro Profissional, quando o documento contiver atributo de identificaÃ§Ã£o profissional.</p></li></ul><p>O ITI se compromete a apresentar o CPF do(s) signatÃ¡rio(s) de forma anonimizada a fim de proteger os dados do cidadÃ£o.</p><br><h5><b>Resultados obtidos</b></h5><p>O resultado bem-sucedido da verificaÃ§Ã£o de arquivo assinado digitalmente com certificado ICP-Brasil ou GOV.BR, quando submetido ao VALIDAR, poderÃ¡ resultar nas seguintes situaÃ§Ãµes: Aprovado, Reprovado ou Indeterminado, em conformidade com a norma ETSI EN 319 102-1 V1.1.1. (2016-05), e legislaÃ§Ã£o aplicÃ¡vel, sendo:</p><p><b>Aprovado</b>: Assinatura em conformidade com a regulamentaÃ§Ã£o da ICP-Brasil, no caso de assinaturas eletrÃ´nicas qualificadas, ou em conformidade com a regulamentaÃ§Ã£o GOV.BR para assinaturas eletrÃ´nicas avanÃ§adas;</p><p><b>Reprovado</b>: Assinatura nÃ£o mantÃ©m conformidade com a regulamentaÃ§Ã£o da ICP Brasil, no caso de assinaturas eletrÃ´nicas qualificadas, ou nÃ£o mantÃ©m conformidade com a regulamentaÃ§Ã£o GOV.BR para assinaturas eletrÃ´nicas avanÃ§adas;</p><p><b>Indeterminado</b>: InformaÃ§Ãµes disponÃ­veis sÃ£o insuficientes para afirmar se a assinatura estÃ¡ em conformidade ou nÃ£o com as regulamentaÃ§Ãµes da ICP-Brasil, no caso de assinaturas eletrÃ´nicas qualificadas, ou com a regulamentaÃ§Ã£o GOV.BR para assinaturas eletrÃ´nicas avanÃ§adas.</p><p>A consulta poderÃ¡ resultar nas seguintes mensagens de erro:</p><ul class="text-left"><li><p class="m-0">Documento sem assinatura ou com assinatura corrompida;</p></li><li><p class="m-0">QR Code gerado com erro;</p></li><li><p class="m-0">O formato de arquivo nÃ£o Ã© suportado, por favor envie um arquivo no formato pdf, xml ou p7s;</p></li><li><p class="m-0">A API estÃ¡ fora do ar, por favor tente novamente mais tarde.</p></li></ul><p>Os documentos eletrÃ´nicos em formato PDF admitem o recurso Modification Detection and Prevention (DocMDP) determinado pela ISO-32000-1/2008 (Document management - Portable document format, Part 1: PDF 1.7), que, quando corretamente implementado, permite verificar se o documento foi ou nÃ£o modificado apÃ³s a assinatura. Por isso, caso o software utilizado para assinar documentos PDF nÃ£o tenha implementado esse recurso, o resultado poderÃ¡ ser reconhecido como â€œIndeterminadoâ€ pelo VALIDAR.</p><p>Ressaltamos que essa capacidade de indeterminar a assinatura de um documento modificado apÃ³s assinatura foi inserida em marÃ§o de 2022 no antigo serviÃ§o https://verificador.iti.gov.br de modo opcional. No entanto, com a extinÃ§Ã£o do Verificador (e sua unificaÃ§Ã£o ao Validar) tal critÃ©rio, antes opcional, passou a ser obrigatÃ³rio. Com isso, Ã© possÃ­vel que assinaturas antes consideradas vÃ¡lidas passem a obter, como resultado, a mensagem "assinatura indeterminada"</p><p> Esses resultados nÃ£o implicam, necessariamente, que o arquivo assinado digitalmente seja aprovado ou reprovado ou que as declaraÃ§Ãµes nele constantes e seu signatÃ¡rio sejam verdadeiros ou nÃ£o.</p><br><h5><b>Responsabilidades do usuÃ¡rio</b></h5><p>O usuÃ¡rio se responsabiliza pela conformidade dos documentos, dados e procedimentos e reconhece que a imprecisÃ£o destes poderÃ¡ causar a impossibilidade de se obter a validaÃ§Ã£o de documentos eletrÃ´nicos atravÃ©s do serviÃ§o.</p><p>Durante a utilizaÃ§Ã£o do serviÃ§o, a fim de nÃ£o sobrecarregar o serviÃ§o de informaÃ§Ã£o ao cidadÃ£o, o usuÃ¡rio se compromete a consultar se as suas dÃºvidas jÃ¡ foram sanadas e disponibilizadas no link:<a href="duvidas.html"> https://validar.iti.gov.br/duvidas.html</a>.</p><p>O usuÃ¡rio do serviÃ§o se compromete Ã  leitura e atendimento dos requisitos constantes na Cartilha de Uso e no Guia de Boas PrÃ¡ticas, sendo responsÃ¡vel pelas consequÃªncias no descuido ou erros decorrentes da sua nÃ£o-observÃ¢ncia.</p><p>O usuÃ¡rio Ã© responsÃ¡vel pela reparaÃ§Ã£o de todos e quaisquer danos, diretos ou indiretos (inclusive decorrentes do desrespeito de quaisquer direitos de outros usuÃ¡rios, de terceiros, inclusive direitos de propriedade intelectual, de segredo e de personalidade), que sejam causados ao ITI, Ã  AdministraÃ§Ã£o PÃºblica, a qualquer outro usuÃ¡rio, ou, ainda, a qualquer terceiro, inclusive no ato do descumprimento do estabelecido nestes Termos de Uso ou de qualquer ato praticado a partir de seu acesso ao serviÃ§o.</p><br><h5><b>Garantias do ITI</b></h5><p>O Instituto Nacional de Tecnologia da InformaÃ§Ã£o - ITI, como provedor do serviÃ§o, se isenta de garantias expressas ou tÃ¡citas, incluindo, sem limitaÃ§Ãµes, quaisquer garantias implÃ­citas de comerciabilidade relacionada ao arquivo contendo assinatura eletrÃ´nica qualificada ou avanÃ§ada submetida ao serviÃ§o.</p><p>O usuÃ¡rio que aceita este termo fica ciente da forma como o serviÃ§o se apresenta, independentemente da versÃ£o disponibilizada, nÃ£o podendo reclamar por falhas ou falta de funÃ§Ã£o, sendo que qualquer pedido de correÃ§Ã£o devidamente evidenciada poderÃ¡ ser encaminhado ao ITI, que farÃ¡ anÃ¡lises, sem, entretanto, garantir a alteraÃ§Ã£o ou prestaÃ§Ã£o de suporte tÃ©cnico.</p><br><h5><b>Responsabilidades do ITI</b></h5><p>O ITI se compromete em cumprir todas as legislaÃ§Ãµes relativas ao uso correto dos dados pessoais do cidadÃ£o, bem como a garantir todos os direitos e garantias legais dos usuÃ¡rios.</p><p>Se compromete ainda a divulgar, em local de fÃ¡cil acesso, no Ã¢mbito de suas competÃªncias, informaÃ§Ãµes de interesse coletivo ou geral produzidas ou custodiadas.</p><p>O ITI nÃ£o se responsabiliza pelo conteÃºdo do documento eletrÃ´nico submetido ao portal VALIDAR ou comprometimentos que dele resultem, ou pela eventual atualizaÃ§Ã£o das bases de dados de terceiros, quando disponÃ­veis, para complementar alguma informaÃ§Ã£o relevante contida nos documentos submetidos.</p><p>Em nenhuma hipÃ³tese o ITI serÃ¡ responsÃ¡vel por quaisquer danos diretos, indiretos, incidentais, especiais, exemplares ou consequentes, (incluindo, sem limitaÃ§Ã£o, fornecimento de bens ou serviÃ§os substitutos, perda de uso ou dados, lucros cessantes ou interrupÃ§Ã£o de atividades), causados por quaisquer motivos e sob qualquer teoria de responsabilidade, seja responsabilidade contratual, restrita, ilÃ­cito civil, ou qualquer outra, como decorrÃªncia de uso do VALIDAR, mesmo que tenham sido avisados da possibilidade de tais danos.</p><p>O VALIDAR se destina ao uso aberto e livre de Ã´nus tanto para pessoas fÃ­sicas quanto para pessoas jurÃ­dicas, nÃ£o implicando em compromisso ou vÃ­nculo comercial entre as entidades envolvidas.</p><p>Ao aceitar esse Termo, o usuÃ¡rio declara ciÃªncia de possÃ­veis indisponibilidades ou instabilidades decorrentes de manutenÃ§Ãµes, ajustes ou mesmo correÃ§Ãµes, realizadas sem a necessidade de aviso prÃ©vio, justificativa de motivos e prazos a fim de corrigir falhas e para verificar a conformidade ao PadrÃ£o Brasileiro de Assinaturas Digitais (PBAD), descrito no conjunto normativo DOC-ICP-15, padrÃµes correlatos e legislaÃ§Ãµes aplicÃ¡veis.</p><p>O usuÃ¡rio que aceita este termo toma ciÃªncia da forma como o VALIDAR se apresenta, independentemente da versÃ£o disponibilizada. Por isso, nÃ£o pode reclamar por falhas ou falta de funÃ§Ã£o, sendo que qualquer pedido de correÃ§Ã£o devidamente evidenciada poderÃ¡ ser encaminhado ao ITI. Nesses casos, o Instituto buscarÃ¡ fazer anÃ¡lises, sem, entretanto, garantir a alteraÃ§Ã£o ou prestaÃ§Ã£o de suporte tÃ©cnico.</p><p>O ITI resguarda-se no direito de propor quaisquer aÃ§Ãµes cÃ­veis, penais e administrativas relacionadas ao nÃ£o cumprimento do disposto neste Termo. Fica eleito, desde jÃ¡, o foro federal da cidade de BrasÃ­lia-DF, em detrimento de qualquer outro, por mais especial que seja.</p><p>Fica, por fim, reservado ao ITI o direito de alterar o presente Termo a qualquer momento sem prÃ©vio aviso.</p><p>VersÃ£o 1.1</P>',
        confirmButtonText: "Estou de acordo",
        showCancelButton: true,
        cancelButtonText: "Fechar",
        customClass: {
          popup: "swal-popup",
          content: "swal-content",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          document.getElementById("acceptTerms").click();
        }
      });
    } else if (lin == "espanhol") {
      Swal.fire({
        width: "1000px",
        html: '<h3><b>TÃ‰RMINOS DE USO Y POLÃTICA DE PRIVACIDAD</b></h3><br><p>Este tÃ©rmino estÃ¡ de acuerdo <a href="https://www.in.gov.br/en/web/dou/-/portaria-iti-n-22-de-28-de-setembro-de-2023-513844303">(Ordenanza ITI NÂ° 22, del 28 de septiembre de 2023)</a></p><h5 class="mt-3"><b>InformaciÃ³n en este documento</b></h5><p>En estos tÃ©rminos, el usuario del servicio VALIDAR encontrarÃ¡ informaciÃ³n sobre:</p><ul class = "text-left"><li><p class="m-0">AceptaciÃ³n de los tÃ©rminos;</p></li><li><p class="m-0">DescripciÃ³n del servicio;</p></li><li><p class="m-0">Ley aplicable;</p></li><li><p class="m-0">Tratamiento de datos;</p></li><li><p class="m-0">Resultados obtenidos;</p></li><li><p class="m-0">Responsabilidades del usuario;</p></li><li><p class="m-0">GarantÃ­as del ITI;</p></li><li><p class="m-0">Responsabilidades del ITI.</p></li></ul><br><h5><b>AceptaciÃ³n de los tÃ©rminos</b></h5><p>Al utilizar el servicio, usted confirma haber leÃ­do y comprendido los TÃ©rminos de Uso y la PolÃ­tica de Privacidad aplicables al servicio solicitado, y acepta quedar vinculado a ellos.</p><br><h5><b>DescripciÃ³n del servicio</b></h5><p>Lanzado el 19 de diciembre de 2022, VALIDAR unifica y reemplaza otros dos portales de servicios: www.assinaturadigital.iti.gov.br y www.verificador.iti.gov.br.</p><p>El servicio permite verificar Ãºnicamente el estado de una firma electrÃ³nica, ya sea avanzada o cualificada, en cuanto a su integridad y autorÃ­a, en documentos firmados digitalmente mediante certificados emitidos en el Ã¡mbito de ICP-Brasil u otras infraestructuras reconocidas oficialmente en Brasil, como la firma avanzada producida en el portal GOV.BR. No es posible verificar la veracidad del contenido de los documentos presentados.</p><p>Este servicio tambiÃ©n incluye la presentaciÃ³n de documentos cuyas firmas electrÃ³nicas han sido proporcionadas por infraestructuras de clave pÃºblica oficiales de otros paÃ­ses.</p><br><h5><b>Ley aplicable</b></h5><p>VALIDAR cumple con las disposiciones legales, como la regulaciÃ³n de ICP-Brasil y las definiciones contenidas tanto en la Medida Provisional nÂº 2.200-2 del 24 de agosto de 2001, como en la Ley nÂº 14.063 del 23 de septiembre de 2020 y en el Decreto nÂº 10.543 del 13 de noviembre de 2020. TambiÃ©n se ajusta al Acuerdo de Reconocimiento Mutuo de Firmas Digitales del Mercosur y otros acuerdos, convenios y tratados de reconocimiento tÃ©cnico de firmas electrÃ³nicas de los cuales Brasil sea signatario.</p><p>Cabe destacar que el servicio tambiÃ©n considera las firmas proporcionadas por certificados digitales emitidos por la cadena de confianza de Adobe. Esto se debe a que el ITI representa a Brasil en el programa Adobe Approved Trust List, segÃºn el acuerdo firmado entre ITI y esa empresa.</p><p>AdemÃ¡s, solo se pueden verificar archivos producidos en los formatos CMS CAdES, XAdES y PAdES en las modalidades integradas o destacadas, segÃºn lo establecido en la ResoluciÃ³n CG ICP-Brasil nÂº 182 del 18 de febrero de 2021 y en el Decreto Conjunto ITI/CC/PR SGD/SEDGG/ME nÂº 1 del 08 de septiembre de 2021.</p><p>La ResoluciÃ³n CG ICP-Brasil 182/2021 ofrece una visiÃ³n general de las firmas digitales, define los conceptos principales y enumera otros documentos que forman parte de las normas de ICP-Brasil sobre el tema. Por su parte, el Decreto Conjunto ITI/CC/PR SGD/SEDGG/ME 1/2021 establece los estÃ¡ndares criptogrÃ¡ficos de referencia para las firmas electrÃ³nicas avanzadas en las comunicaciones que involucren a la administraciÃ³n pÃºblica federal directa, autÃ³noma y fundamental.</p><br><h5><b>Tratamiento de datos</b></h5><p>Durante la navegaciÃ³n, el portal VALIDAR utiliza cookies propios (primarios), es decir, de los dominios validar.iti.gov.br y validar.iti.br, para registrar las configuraciones y preferencias de navegaciÃ³n de los usuarios y generar informes estadÃ­sticos a travÃ©s de Google Analytics, asÃ­ como cookies de terceros para complementar estas estadÃ­sticas. La configuraciÃ³n de Google Analytics para los dominios mencionados no permite que se almacenen y/o transmitan datos personales y el documento firmado objeto de validaciÃ³n a terceros.</p><p>El servicio descarta el documento enviado para su verificaciÃ³n tan pronto como finaliza la validaciÃ³n de las firmas, para lo cual es necesario calcular el hash (resumen criptogrÃ¡fico) del documento y compararlo con el hash de la firma. Los datos obtenidos a travÃ©s de documentos enviados por los usuarios a travÃ©s de los canales de atenciÃ³n, como Fala.BR y el correo electrÃ³nico institucional del ITI, se tratan exclusivamente para analizar la consulta del usuario y se descartan posteriormente.</p><p>Con el fin de informar el resultado de la verificaciÃ³n de los documentos firmados electrÃ³nicamente, el portal VALIDAR realiza el tratamiento de los siguientes datos personales de los documentos enviados por los usuarios:</p><ul class ="text-left"><li><p class="m-0">Nombre;</p></li><li><p class="m-0">CPF (nÃºmero de identificaciÃ³n personal en Brasil);</p></li><li><p class="m-0">Registro profesional, cuando el documento contenga atributos de identificaciÃ³n profesional.</p></li></ul><p>El ITI se compromete a presentar el CPF del(os) firmante(s) de forma anonimizada para proteger los datos del ciudadano.</p><br><h5><b>Resultados obtenidos</b></h5><p>El resultado exitoso de la verificaciÃ³n de un archivo firmado digitalmente con certificado ICP-Brasil o GOV.BR, cuando se envÃ­a a VALIDAR, puede dar lugar a las siguientes situaciones: <b>Aprobado, Reprobado</b> o <b>Indeterminado</b>, de acuerdo con la norma ETSI EN 319 102-1 V1.1.1. (2016-05), y la legislaciÃ³n aplicable, que son las siguientes:</p><p><b>Aprobado</b>: la firma cumple con la normativa de ICP-Brasil en el caso de firmas electrÃ³nicas cualificadas, o cumple con la normativa de GOV.BR para firmas electrÃ³nicas avanzadas;</p><p><b>Reprobado</b>: la firma no cumple con la normativa de ICP-Brasil en el caso de firmas electrÃ³nicas cualificadas, o no cumple con la normativa de GOV.BR para firmas electrÃ³nicas avanzadas;</p><p><b>Indeterminado</b>: la informaciÃ³n disponible es insuficiente para afirmar si la firma cumple o no con las normativas de ICP-Brasil en el caso de firmas electrÃ³nicas cualificadas, o con la normativa de GOV.BR para firmas electrÃ³nicas avanzadas.</p><p>La consulta puede resultar en los siguientes mensajes de error:</p><ul class="text-left"><li><p class="m-0">Documento sin firma o con firma corrupta;</p></li><li><p class="m-0">CÃ³digo QR generado con error;</p></li><li><p class="m-0">El formato de archivo no es compatible, por favor envÃ­a un archivo en formato pdf, xml o p7s;</p></li><li><p class="m-0">La API no estÃ¡ disponible, por favor intenta nuevamente mÃ¡s tarde.</p></li></ul><p>Los documentos electrÃ³nicos en formato PDF admiten la funciÃ³n de DetecciÃ³n y PrevenciÃ³n de Modificaciones (DocMDP) establecida por la norma ISO-32000-1/2008 (GestiÃ³n de documentos: Formato de documento portÃ¡til, Parte 1: PDF 1.7), la cual, cuando se implementa correctamente, permite verificar si el documento ha sido modificado o no despuÃ©s de la firma. Por lo tanto, si el software utilizado para firmar documentos PDF no ha implementado esta funciÃ³n, el resultado puede ser reconocido como "Indeterminado" por VALIDAR.</p><p>Queremos destacar que esta capacidad de indeterminar una firma en un documento modificado despuÃ©s de la firma se introdujo en marzo de 2022 en el antiguo servicio https://verificador.iti.gov.br de forma opcional. Sin embargo, con la extinciÃ³n de Verificador (y su integraciÃ³n a Validar), este criterio, antes opcional, se ha vuelto obligatorio. Por lo tanto, es posible que las firmas que antes se consideraban vÃ¡lidas ahora obtengan como resultado el mensaje "firma indeterminada".</p><p>Estos resultados no implican necesariamente que el archivo firmado digitalmente sea aprobado o rechazado, ni que las declaraciones contenidas en Ã©l y su firmante sean verdaderas o falsas.</p><br><h5><b>Responsabilidades del usuario</b></h5><p>El usuario es responsable de la conformidad de los documentos, datos y procedimientos, y reconoce que la imprecisiÃ³n de los mismos puede hacer que sea imposible validar los documentos electrÃ³nicos a travÃ©s del servicio.</p><p>Durante el uso del servicio, con el fin de no sobrecargar el servicio de informaciÃ³n al ciudadano, el usuario se compromete a consultar si sus preguntas ya han sido respondidas y estÃ¡n disponibles en el siguiente enlace: <a href="duvidas.html">https://validar.iti.gov.br/duvidas.html</a>.</p><p>El usuario comprende que los documentos solo pueden ser validados si provienen de certificados digitales ICP-Brasil que sean vÃ¡lidos en el momento del envÃ­o, o de firmas GOV.BR o de acuerdos transfronterizos. El usuario del servicio tambiÃ©n se compromete a leer y cumplir con los requisitos establecidos en la Cartilla de Uso y en la GuÃ­a de Buenas PrÃ¡cticas, siendo responsable de las consecuencias derivadas de su falta de atenciÃ³n o errores debido a su incumplimiento.</p><p>El usuario es responsable de indemnizar todos y cada uno de los daÃ±os, directos o indirectos (incluyendo los derivados de la violaciÃ³n de los derechos de otros usuarios, terceros, incluyendo los derechos de propiedad intelectual, de secreto y de personalidad), que sean causados al ITI, a la AdministraciÃ³n PÃºblica, a cualquier otro usuario o a cualquier tercero, incluso en caso de incumplimiento de lo establecido en estos TÃ©rminos de Uso o de cualquier acto realizado a partir de su acceso al servicio.</p><br><h5><b>GarantÃ­as del ITI</b></h5><p>El Instituto Nacional de TecnologÃ­a de la InformaciÃ³n - ITI, como proveedor del servicio, se exime de cualquier garantÃ­a expresa o implÃ­cita, incluyendo, sin limitaciones, cualquier garantÃ­a implÃ­cita de comerciabilidad relacionada con el archivo que contiene la firma electrÃ³nica cualificada o avanzada enviada al servicio.</p><p>El usuario que acepta estos tÃ©rminos estÃ¡ consciente de cÃ³mo se presenta el servicio, independientemente de la versiÃ³n disponible, y no puede reclamar fallas o falta de funcionalidad. Cualquier solicitud de correcciÃ³n debidamente fundamentada puede ser enviada al ITI, el cual realizarÃ¡ anÃ¡lisis sin garantizar cambios o soporte tÃ©cnico.</p><br><h5><b>Responsabilidades del ITI</b></h5><p>El ITI se compromete a cumplir con todas las leyes relacionadas con el uso correcto de los datos personales del ciudadano, asÃ­ como a garantizar todos los derechos y garantÃ­as legales de los usuarios.</p><p>TambiÃ©n se compromete a divulgar, en un lugar de fÃ¡cil acceso y dentro de sus competencias, informaciÃ³n de interÃ©s colectivo o general producida o custodiada.</p><p>El ITI no se responsabiliza por el contenido del documento electrÃ³nico enviado al portal VALIDAR o por los compromisos derivados del mismo, ni por la eventual actualizaciÃ³n de las bases de datos de terceros, cuando estÃ©n disponibles, para complementar alguna informaciÃ³n relevante contenida en los documentos enviados.</p><p>En ningÃºn caso el ITI serÃ¡ responsable de ningÃºn daÃ±o directo, indirecto, incidental, especial, ejemplar o consecuencial (incluyendo, sin limitaciÃ³n, la provisiÃ³n de bienes o servicios sustitutos, la pÃ©rdida de uso o datos, la pÃ©rdida de beneficios o la interrupciÃ³n de actividades), causados por cualquier motivo y bajo cualquier teorÃ­a de responsabilidad, ya sea responsabilidad contractual, responsabilidad civil restringida, responsabilidad extracontractual o cualquier otra, como resultado del uso de VALIDAR, incluso si se les ha informado de la posibilidad de dichos daÃ±os.</p><p>VALIDAR estÃ¡ destinado al uso abierto y gratuito tanto para personas fÃ­sicas como jurÃ­dicas, sin implicar ningÃºn compromiso o relaciÃ³n comercial entre las entidades involucradas.</p><p>Ao aceptar este TÃ©rmino, el usuario declara su conocimiento de posibles indisponibilidades o inestabilidades resultantes de mantenimientos, ajustes o correcciones realizados sin necesidad de previo aviso, justificaciÃ³n de motivos y plazos, con el fin de corregir fallas y verificar la conformidad con el EstÃ¡ndar BrasileÃ±o de Firmas Digitales (PBAD), descrito en la normativa DOC-ICP15-x, estÃ¡ndares relacionados y legislaciones aplicables.</p><p>El usuario que acepta este tÃ©rmino reconoce la forma en que VALIDAR se presenta, independientemente de la versiÃ³n disponible. Por lo tanto, no puede quejarse de fallas o falta de funciÃ³n, y cualquier solicitud de correcciÃ³n debidamente fundamentada puede ser enviada al ITI. En estos casos, el Instituto realizarÃ¡ anÃ¡lisis, sin embargo, no garantizarÃ¡ cambios o soporte tÃ©cnico.</p><p>El ITI se reserva el derecho de emprender acciones civiles, penales y administrativas relacionadas con el incumplimiento de lo establecido en este TÃ©rmino. Se elige, desde ya, el foro federal de la ciudad de BrasÃ­lia-DF, en detrimento de cualquier otro, por mÃ¡s especial que sea.</p><p>Finalmente, el ITI se reserva el derecho de modificar este TÃ©rmino en cualquier momento sin previo aviso.</p><p>La presente versiÃ³n de este TÃ©rmino se actualizÃ³ el <a href="https://www.in.gov.br/en/web/dou/-/portaria-iti-n-22-de-28-de-setembro-de-2023-513844303"> https://www.in.gov.br/en/web/dou/-/portaria-iti-n-22-de-28-de-setembro-de-2023-513844303.</a></p>',
        confirmButtonText: "Estoy de acuerdo",
        showCancelButton: true,
        cancelButtonText: "Cerca",
        customClass: {
          popup: "swal-popup",
          content: "swal-content",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          document.getElementById("acceptTerms").click();
        }
      });
    } else if (lin == "ingles") {
      Swal.fire({
        width: "1000px",
        html: '<h3><b>Terms of Use and Privacy Policy</b></h3><br><p>This term is in accordance <a href="https://www.in.gov.br/en/web/dou/-/portaria-iti-n-22-de-28-de-setembro-de-2023-513844303">(Ordinance ITI No. 22, dated September 28, 2023)</a></p><h5 class="mt-3"><b>Information in this document</b></h5><p>In this Terms of Use, the user of the VALIDAR service will find information about:</p><ul class="text-left"><li><p class="m-0">Acceptance of the Terms;</p></li><li><p class="m-0">Description of the service;</p></li><li><p class="m-0">Applicable legislation;</p></li><li><p class="m-0">Data processing;</p></li><li><p class="m-0">Results obtained;</p></li><li><p class="m-0">User responsibilities;</p></li><li><p class="m-0">ITI warranties;</p></li><li><p class="m-0">ITI responsibilities.</p></li></ul><br><h5><b>Acceptance of the Terms</b></h5><p>By using the service, you confirm that you have read, understood the applicable Terms of Use and Privacy Policy, and agree to be bound by them.</p><br><h5><b>Description of the service</b></h5><p>Launched on December 19, 2022, VALIDAR unifies and replaces two other service portals: www.assinaturadigital.iti.gov.br and www.verificador.iti.gov.br.</p><p>The service allows for verifying only the status of an electronic signature, whether advanced or qualified, regarding integrity and authorship, in digitally signed documents by certificates issued within the scope of ICP-Brasil or by other infrastructures officially recognized in Brazil, such as the advanced signature produced within the GOV.BR portal. It is not possible to verify the veracity of the content of the submitted documents.</p><p>This service also includes the submission of documents whose electronic signatures have been provided by official public key infrastructures of other countries.</p><br><h5><b>Applicable legislation</b></h5><p>VALIDAR complies with legal provisions, such as the regulation of ICP-Brasil and the definitions contained in both Provisional Measure No. 2,200-2 of August 24, 2001, and Law No. 14,063 of September 23, 2020, and Decree No. 10,543 of November 13, 2020. It also complies with the Mutual Recognition Agreement of Digital Signatures of Mercosur and any other agreements, conventions, and treaties of technical recognition of electronic signatures of which Brazil is a signatory.</p><p>It should be noted that the service also considers signatures provided by digital certificates from the Adobe trust chain. This is because ITI represents Brazil in the Adobe Approved Trust List program, as per the agreement signed between ITI and that company.</p><p>In addition, only files produced in CMS CAdES, XAdES, and PAdES formats in embedded or detached modes, as provided in CG ICP-Brasil Resolution No. 182 of February 18, 2021, and Joint Ordinance ITI/CC/PR SGD/SEDGG/ME No. 1 of September 8, 2021, are subject to verification.</p><p>CG ICP-Brasil Resolution 182/2021 provides an overview of digital signatures, defines key concepts, and lists other documents that make up the ICP-Brasil standards on the subject. Joint Ordinance ITI/CC/PR SGD/SEDGG/ME 1/2021 establishes the reference cryptographic standards for advanced electronic signatures in communications involving the direct federal public administration, autarkic entities, and foundations.</p></p><br><h5><b>Data processing</b></h5><p>During navigation, the VALIDAR portal uses its own (primary) cookies, that is, from the domains validar.iti.gov.br and validar.iti.br, to record users  browsing settings and preferences and generate statistical reports through Google Analytics. It also uses third-party cookies to complement these statistics. The Google Analytics configuration for the mentioned domains does not allow personal data and the signed document subject to validation to be stored and/or passed on to third parties.</p><p>The service discards the document submitted for verification as soon as the signature validation is completed. To do so, it needs to calculate the hash (cryptographic digest) of the document and compare it with the hash of the signature. Data obtained through documents submitted by users through the service channels, including Fala.BR and ITI institutional email, are exclusively processed to analyze the users query and subsequently discarded.</p><p>For the purpose of informing the result of the verification of electronically signed documents, the VALIDAR portal processes the following personal data from the documents submitted by users:</p><ul class="text-left"><li><p class="m-0">Name;</p></li><li><p class="m-0">CPF (Brazilian Individual Taxpayer Registry number);</p></li><li><p class="m-0">Professional Registration, when the document contains a professional identification attribute.</p></li></ul><p>ITI commits to present the CPF(s) of the signer(s) in an anonymized manner in order to protect the individuals data.</p><br><h5><b>Results obtained</b></h5><p>The successful result of verifying a digitally signed file with an ICP-Brasil or GOV.BR certificate, when submitted to VALIDAR, may result in the following situations: <b>Approved, Rejected</b>, or <b>Indeterminate</b>, in accordance with the ETSI EN 319 102-1 V1.1.1 standard (2016-05) and applicable legislation, as follows:</p><p><b>Approved</b>: Signature in compliance with the ICP-Brasil regulations, in the case of qualified electronic signatures, or in compliance with the GOV.BR regulations for advanced electronic signatures;</p><p><b>Rejected</b>: Signature does not comply with the ICP-Brasil regulations, in the case of qualified electronic signatures, or does not comply with the GOV.BR regulations for advanced electronic signatures;</p><p><b>Indeterminate</b>: Available information is insufficient to assert whether the signature is compliant or not with the ICP-Brasil regulations, in the case of qualified electronic signatures, or with the GOV.BR regulations for advanced electronic signatures.</p><p>The query may result in the following error messages:</p><ul class="text-left"><li><p class="m-0">Document without a signature or with a corrupted signature;</p></li><li><p class="m-0">QR Code generated with an error;</p></li><li><p class="m-0">The file format is not supported, please send a file in PDF, XML, or P7S format;</p></li><li><p class="m-0">The API is offline, please try again later.</p></li></ul><p>Electronic documents in PDF format support the Modification Detection and Prevention (DocMDP) feature determined by ISO-32000-1/2008 (Document management - Portable document format, Part 1: PDF 1.7), which, when properly implemented, allows checking whether the document has been modified after the signature. Therefore, if the software used to sign PDF documents has not implemented this feature, the result may be recognized as "Indeterminate" by VALIDAR.</p><p>We emphasize that this capability to indetermine the signature of a document modified after signing was introduced in March 2022 in the former service https://verificador.iti.gov.br as an optional feature. However, with the extinction of Verificador (and its unification with Validar), this criterion, previously optional, became mandatory. As a result, signatures that were previously considered valid may now receive the "indeterminate signature" message as a result.</p><p>These results do not necessarily imply that the digitally signed file is approved or rejected or that the statements contained therein and their signer are true or false.</p><br><h5><b>User responsibilities</b></h5><p>The user is responsible for the compliance of the documents, data, and procedures and acknowledges that the inaccuracy of these may result in the impossibility of obtaining validation of electronic documents through the service.</p><p>During the use of the service, in order to avoid overloading the citizen information service, the user agrees to check if their questions have already been answered and made available at the following link: <a href="duvidas.html">https://validar.iti.gov.br/duvidas.html</a>.</p><p>The user understands that the documents can only be validated if they come from ICP-Brasil digital certificates that are valid at the time of submission or GOV.BR signatures or originate from cross-border agreements. The user of the service also undertakes to read and comply with the requirements set forth in the "Cartilha de Uso" and the "Guia de Boas PrÃ¡ticas" (Best Practices Guide), being responsible for the consequences of neglect or errors resulting from non-compliance.</p><p>The user is responsible for the repair of any and all damages, direct or indirect (including those resulting from the violation of any rights of other users, third parties, including intellectual property rights, trade secrets, and personality rights), caused to ITI, the Public Administration, any other user, or any third party, including non-compliance with these Terms of Use or any act performed based on their access to the service.</p><br><h5><b>ITI Guarantees</b></h5><p>The National Institute of Information Technology - ITI, as the service provider, disclaims any express or implied warranties, including, without limitation, any implied warranties of merchantability related to the file containing the qualified or advanced electronic signature submitted to the service.</p><p>The user who accepts these terms is aware of how the service is presented, regardless of the version made available, and cannot complain about failures or lack of functionality. However, any duly evidenced request for correction may be sent to ITI, which will conduct analyses without guaranteeing any changes or provision of technical support.</p><br><h5><b>ITI Responsibilities</b></h5><p>The ITI is committed to complying with all legislation related to the correct use of citizens personal data, as well as ensuring all rights and legal guarantees of users.</p><p>It also commits to disclose, in an easily accessible location within its competencies, information of collective or general interest produced or held.</p><p>The ITI is not responsible for the content of the electronic document submitted to the VALIDAR portal or any commitments resulting from it, or for the eventual updating of third-party databases, when available, to complement any relevant information contained in the submitted documents.</p><p>In no event shall the ITI be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including, without limitation, procurement of substitute goods or services, loss of use or data, loss of profits, or interruption of business), arising out of any cause and under any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise), arising in any way from the use of VALIDAR, even if advised of the possibility of such damages.</p><p>VALIDAR is intended for open and free use, both for individuals and legal entities, without implying any commitment or commercial relationship between the entities involved.</p><p>By accepting this Agreement, the user acknowledges the possibility of unavailability or instability resulting from maintenance, adjustments, or even corrections made without prior notice, justification, or deadlines to correct errors and ensure compliance with the Brazilian Digital Signature Standard (PBAD), as described in normative DOC-ICP15-x, related standards, and applicable legislation.</p><p>The user who accepts this Agreement acknowledges the way VALIDAR is presented, regardless of the version made available, and cannot complain about failures or lack of functionality. However, any duly evidenced request for correction may be submitted to the ITI. In such cases, the Institute will seek to conduct analyses without guaranteeing any changes or provision of technical support.</p><p>The ITI reserves the right to propose any civil, criminal, and administrative actions related to non-compliance with the provisions of this Agreement. The federal court of the city of BrasÃ­lia-DF is elected as the competent jurisdiction, to the detriment of any other, however special it may be.</p><p>Finally, the ITI reserves the right to modify this Agreement at any time without prior notice.</p><p>This version of the Agreement was last updated on <a href="https://www.in.gov.br/en/web/dou/-/portaria-iti-n-22-de-28-de-setembro-de-2023-513844303"> https://www.in.gov.br/en/web/dou/-/portaria-iti-n-22-de-28-de-setembro-de-2023-513844303.</a></p>',
        confirmButtonText: "I agree",
        showCancelButton: true,
        cancelButtonText: "Close",
        customClass: {
          popup: "swal-popup",
          content: "swal-content",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          document.getElementById("acceptTerms").click();
        }
      });
    }
  }
  
  function clickcheckBox() {
    chkbx = document.getElementById("acceptTerms");
    if ((chkbx.checked = true)) {
      chkbx.disabled = true;
    }
  }
  
  $(document).ready(function () {
    $(document).on("click", "#botaoVisualizarDoc", function () {
      Swal.fire({
        icon: "warning",
        text: "VocÃª serÃ¡ redirecionado para uma URL externa fornecida pelo provedor do documento.",
        allowOutsideClick: false,
        showCancelButton: true,
        confirmButtonText: "Continuar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          urlqr = sessionStorage.getItem("urlQr");
          var windowFeatures = "width=1000,height=1000";
          window.open(urlqr, "_blank", windowFeatures);
        }
      });
    });
  });
  
  //
  
  //cookies
  
  cake = localStorage.getItem("cake");
  if (cake == null) {
    document.write(
      '<div class="cookie p-4" id="cookie"><div class="divCookie row justify-content-center"><div class="cookieText col">Utizamos cookies para garantir uma anÃ¡lise de dados. Ao aceitar nossos cookies, vocÃª estarÃ¡ concordando em ter certos dados de navegaÃ§Ã£o analisados de forma anÃ´nima, para melhoria de nosso serviÃ§o. No entanto, se vocÃª optar por rejeitar cookies, os cookies que nÃ£o forem estritamente necessÃ¡rios serÃ£o desativados. Para saber mais, consulte nossos termos de uso.</div><div class="buttonDiv col-7 align-self-center"><button class="br-button secondary mt-3 mt-sm-0 ml-sm-3 deny grabt" type="button" onclick="cookiebuttonNone()">Rejeitar cookies</button><button type="button" onclick="cookiebutton()" class="br-button secondary mt-3 mt-sm-0 ml-sm-3 deny grabt">Aceitar cookies</button></div></div></div>'
    );
  }
  function cookiebutton() {
    localStorage.setItem("cake", "on");
    location.reload();
  }
  function cookiebuttonNone() {
    localStorage.setItem("cake", "off");
    document.getElementById("cookie").style.display = "none";
  }
  
  //
  
  //file selector
  
  var ifilee = 0;
  $(document).ready(function () {
    $("#signature_files").change(function () {
      document.getElementById("filebox").innerHTML = "";
      var i = $(this).prev("filebox").clone();
      var file = $("#signature_files")[0].files[0].name;
      $("#filebox").append("Arquivo escolhido: <strong>" + file + "</strong>");
    });
  
    $("#detached").click(function () {
      if ($(this).prop("checked")) {
        Swal.fire({
          icon: "warning",
          title: "Aviso",
          html: "Antes de prosseguir, confirme se de fato a assinatura que deseja submeter Ã© uma assinatura do tipo destacada.",
          confirmButtonText: "Confirmar",
          footer: `<a href="./duvidas.html#15" target="_blank">Como saber</a>`,
          didOpen: () => {
            const confirmButton = document.querySelector(".swal2-confirm");
            confirmButton.id = "confirmButton"; // Adiciona um ID personalizado
          },
        }).then((result) => {
          if (result.isConfirmed) {
            $("#signature_files_detached").toggle("slow");
            $("#fileselectorbutton").attr(
              "title",
              $(this).is(":checked")
                ? "Formatos aceitos: Todos"
                : "Formatos aceitos: pdf, xml ou p7s"
            );
          } else {
            $(this).prop("checked", false);
          }
        });
      } else {
        $("#signature_files_detached").toggle("slow");
      }
    });
  
    $("#signature_files_detached").change(function () {
      document.getElementById("fileboxDestacada").innerHTML = "";
      var i = $(this).prev("fileboxDestacada").clone();
      var file = $("#signature_filesDetached")[0].files[0].name;
      $("#fileboxDestacada").append(
        "Arquivo escolhido: <strong>" + file + "</strong>"
      );
    });
  
    $(document).on("click", "#btnFloating", function () {
      // $('.bnt-accordion-gov').toggle('slow')
      var attr = $(".bnt-accordion-gov").attr("active");
  
      if (typeof attr !== "undefined" && attr !== false) {
        $(".bnt-accordion-gov").removeAttr("active");
        $(".bnt-accordion-gov").attr("id", "fechado");
        $("#btnFloating").text("Expandir Elementos");
        // Scroll atÃ© o topo da pÃ¡gina
        $("html, body").animate({ scrollTop: 0 }, "fast");
      } else {
        $(".bnt-accordion-gov").attr("active", "");
        $(".bnt-accordion-gov").attr("id", "aberto");
        $("#btnFloating").text("Fechar Elementos");
      }
    });
  });
  
  //
  
  //Reinicia as checkbox
  $(document).ready(function () {
    $("#detached").prop("checked", false);
    $("#acceptTerms").prop("checked", false);
  });
  //
  
  /*$(document).ready(function () {
    $('.cpf').mask('000.000.000-00');
    $('.phone').mask('(99) 99999-9999');
    $('.cnpj').mask('00.000.000/0000-00');
  
  });*/
  
  function imprimir() {
    window.print();
  }
  
  function preImpressao() {
    sessionStorage.setItem("imprimir", true);
    window.location.reload();
  }
  
  // FunÃ§Ã£o apara ajuste do botÃ£o de pesquisar
  function screenAdjustment() {
    const headerElement = document.querySelector("header");
    const cssBugHeader = document.getElementById("createDiv");
  
    if (headerElement.classList.contains("sticky")) {
      if (cssBugHeader.childElementCount > 0) {
        document.getElementById("search").classList.add("active");
      }
      cssBugHeader.classList.add("cssBug");
    } else {
      cssBugHeader.classList.remove("cssBug");
    }
  }
  
  window.addEventListener("scroll", screenAdjustment);
  
  // FunÃ§Ã£o para rodar o carousel a cada 10 segundos
  document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("relatorio.html")) {
      return;
    }
    var carousel = document.querySelector(".br-carousel");
    var nextButton = carousel.querySelector(".carousel-btn-next");
    var prevButton = carousel.querySelector(".carousel-btn-prev");
    var slides = carousel.querySelectorAll(".carousel-page");
  
    var currentSlideIndex = 0;
  
    function showSlide(index) {
      slides.forEach(function (slide, i) {
        if (i === index) {
          slide.setAttribute("active", "active");
        } else {
          slide.removeAttribute("active");
        }
      });
    }
  
    function nextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      showSlide(currentSlideIndex);
    }
  
    function prevSlide() {
      currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
      showSlide(currentSlideIndex);
    }
  
    nextButton.addEventListener("click", function () {
      setTimeout(function () {
        nextSlide();
      }, 50);
    });
  
    prevButton.addEventListener("click", function () {
      setTimeout(function () {
        prevSlide();
      }, 50);
    });
  
    function autoRotate() {
      setInterval(function () {
        nextSlide();
      }, 10000); // 10 s segundos
    }
  
    autoRotate();
  });