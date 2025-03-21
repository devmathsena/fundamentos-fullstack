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

  submit.addEventListener("click", function(ev) {
    console.log("click");
    ev.preventDefault();
    createInputs();
  });
}

function createInputs() {
  const tecNameLabel = document.createElement("label");
  tecNameLabel.for = "tec__name";
  tecNameLabel.innerText = "Nome:";

  const tecName = document.createElement("input");
  tecName.type = "text";
  tecName.id = "tec__name";

  const fieldSet = document.createElement("fieldset");

  const legend = document.createElement("legend");
  legend.innerText = "Tecnologia";

  const forms = document.querySelector(".register__section > form");

  fieldSet.appendChild(legend);
  
  fieldSet.appendChild(tecNameLabel)
  fieldSet.appendChild(tecName)

  const levels = ["0-2 anos", "3-4 anos", "5+ anos"];

  levels.forEach((level, index) => {
    const radioContainer = document.createElement("div");

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "tec_level"; 
    radio.id = `level_${index}`;
    radio.value = level.toLowerCase();

    const label = document.createElement("label");
    label.htmlFor = radio.id;
    label.innerText = level;

    radioContainer.appendChild(radio);
    radioContainer.appendChild(label);
    fieldSet.appendChild(radioContainer);
  });

  const removeTecButton = document.createElement("button");
  removeTecButton.innerText = "Remover";

  removeTecButton.addEventListener("click", function(ev) {
    ev.preventDefault();
    const parent = this.parentElement;
    parent.remove();
  });

  fieldSet.appendChild(removeTecButton);
  forms.appendChild(fieldSet);
  
}

function registerDev(dev) {
  //criar função que cria o objeto dev, que na função execute() será salvo num array de dev's.
}

function execute() {
  addInputs();
}

execute();