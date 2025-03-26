/*## Cadastro de Devs

Construa uma página web que permita cadastrar desenvolvedores, suas tecnologias e tempos de experiência. 

- A página deve ter um input para o nome completo do desenvolvedor e um botão para adicionar uma nova tecnologia.
- Ao clicar no botão um evento deve ser disparado criando no formulário uma nova linha de inputs contendo:
    - um campo de texto para o nome da tecnologia
    - um grupo de botões tipo “radio” com opções de tempo de experiência (por exemplo, “0-2 anos”, “3-4 anos” 
    e “5+ anos”)
    - um botão de remover que deve excluir essa linha.
- O formulário também deve ter um botão de cadastrar que salva as informações do dev em um array e limpa o
  formulário. Para testar o funcionamento você pode utilizar um simples console.log()

Para esse exercício você deve utilizar apenas eventos adicionados via javascript e a página deve funcionar 
sem acionar um recarregamento.
*/

function addInputs() {
  const submit = document.getElementById("add");
  const devName = document.getElementById("name");

  submit.addEventListener("click", function (ev) {
    console.log("click");
    ev.preventDefault();
    if (devName.value !== "") {
      createTec();
    } else {
      alert("Preencha o nome antes!");
    }

  });
}

function registerDev() {
  const name = document.getElementById("name").value.trim();
  if (!name) {
    alert("Por favor, insira um nome.");
    return;
  }

  const techs = [];
  document.querySelectorAll("fieldset").forEach(fieldset => {
    const techNameInput = fieldset.querySelector("input[type='text']");
    const techName = techNameInput ? techNameInput.value.trim() : "";
    if (!techName) return;

    const selectedLevel = fieldset.querySelector("input[type='radio']:checked");
    const techLevel = selectedLevel ? selectedLevel.value : "Não informado";

    techs.push({ name: techName, level: techLevel });
  });

  const dev = {
    name,
    technologies: techs
  };

  console.log(dev);
}

function createFieldset(uniqueId) {
  const fieldset = document.createElement("fieldset");

  const tecNameLabel = document.createElement("label");
  tecNameLabel.for = `tec__name_${uniqueId}`;
  tecNameLabel.innerText = "Nome:";

  const tecName = document.createElement("input");
  tecName.type = "text";
  tecName.id = `tec__name_${uniqueId}`;

  const legend = document.createElement("legend");
  legend.innerText = "Tecnologia";

  const removeTecButton = document.createElement("button");
  removeTecButton.innerText = "Remover";

  removeTecButton.addEventListener("click", function (ev) {
    ev.preventDefault();
    this.parentElement.remove();
  });

  fieldset.appendChild(legend);
  fieldset.appendChild(tecNameLabel);
  fieldset.appendChild(tecName);
  fieldset.appendChild(removeTecButton);

  return fieldset
}

function createTec() {
  const uniqueId = Date.now();

  const fieldset = createFieldset(uniqueId);

  const form = document.querySelector(".register__section > form");

  const registerDevButton = document.createElement("button");
  registerDevButton.innerText = "Registrar Dev";
  registerDevButton.id = "register__dev__button";
  registerDevButton.addEventListener("click", function (ev) {
    ev.preventDefault();
    registerDev();
  });

  if (!document.getElementById("register__dev__button")) {
    form.appendChild(registerDevButton);
  }

  const levels = ["0-2 anos", "3-4 anos", "5+ anos"];

  levels.forEach((level, index) => {
    const radioContainer = document.createElement("div");

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = `tec_level_${uniqueId}`;
    radio.id = `level_${uniqueId}_${index}`;
    radio.value = level.toLowerCase();

    const label = document.createElement("label");
    label.htmlFor = radio.id;
    label.innerText = level;

    radioContainer.appendChild(radio);
    radioContainer.appendChild(label);
    fieldset.appendChild(radioContainer);
  });

  form.appendChild(fieldset);
}

function execute() {
  addInputs();
}

execute();