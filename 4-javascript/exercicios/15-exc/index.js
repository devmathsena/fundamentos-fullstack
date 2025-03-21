/*Sistema de Vagas de Emprego

Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e 
adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema
Listar vagas disponíveis
Criar um nova vaga
Visualizar uma vaga
Inscrever um candidato em uma vaga
Excluir uma vaga
Sair

A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.

A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve 
pedir que o usuário confirme as informações antes de salvá-las.

A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, 
data limite, quantidade de candidatos e o nome dos candidatos.

A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação 
exibindo as informações da vaga antes de salvar o candidato na vaga.

A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a 
exclusão da vaga antes de realmente exclui-la.

Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que 
possível, como os objetos, arrays e funções.
*/


function displayMenu() {
    return parseInt(
        prompt(`
            1 - Listar vagas disponíveis
            2 - Criar um nova vaga
            3 - Visualizar uma vaga
            4 - Inscrever um candidato em uma vaga
            5 - Excluir uma vaga
            6 - Sair
        `)
    );
}

function displayJobOffers(jobOffers) {

    if (jobOffers.length > 0) {
        const allNumberOfCandidates = jobOffers.reduce((acc, job) => acc + job.numberOfCandidates, 0);

        for (let index = 0; index < jobOffers.length; index++) {
            alert(`
                Indíce: ${jobOffers[index].index}.
                Nome da vaga: ${jobOffers[index].name}.
                Quantidade de candidatos em todas as vagas: ${allNumberOfCandidates}.
            `)
        }
    } else {
        alert("Sem vagas cadastradas!");
    }
}

function createJobOffer(jobOffers) {
    const newJobOffer = {};
    newJobOffer.candidates = [];
    newJobOffer.numberOfCandidates = 0;
    newJobOffer.name = prompt("Qual o nome da vaga?");
    newJobOffer.description = prompt("Qual a descrição da vaga?");
    newJobOffer.limitDate = prompt("Qual a data limite?");

    if (confirm(`
        Deseja cadastrar a vaga?\n
        Vaga: ${newJobOffer.name}.
        Descrição: ${newJobOffer.description}.
        Data limite: ${newJobOffer.limitDate}
    `)) {
        jobOffers.push(newJobOffer);
        newJobOffer.index = jobOffers.indexOf(newJobOffer);

        alert(`Vaga ${newJobOffer.name} criada com sucesso!`);
    } else {
        return;
    }
}

function displayOneJobOffer(indexOfJobOffer, jobOffers) {
    const jobOffer = jobOffers.find(jobOffer => jobOffer.index === indexOfJobOffer);

    if (jobOffer) {
        return `
            Indíce: ${jobOffer.index}
            Vaga: ${jobOffer.name}.
            Descrição: ${jobOffer.description}.
            Data limite: ${jobOffer.limitDate}.
            Quantidade de candidatos: ${jobOffer.numberOfCandidates}.
            Candidatos:  ${jobOffer.candidates}.
        `;
    } else {
        return "Vaga indexistente!";
    }
}

function registerCandidate(candidatesName, indexOfJobOffer, jobOffers) {
    const job = displayOneJobOffer(indexOfJobOffer, jobOffers);
    if (
        confirm(`Deseja registrar o ${candidatesName} na vaga:\n ${job}`)
    ) {
        jobOffers[indexOfJobOffer].candidates.push(candidatesName);
        jobOffers[indexOfJobOffer].numberOfCandidates++;
        alert("Candidato inscrito com sucesso!");
    } else {
        return;
    }
}

function deleteJobOffer(indexOfJobOffer, jobOffers) {
    const job = displayOneJobOffer(indexOfJobOffer, jobOffers);
    if (
        confirm(`Deseja excluir a vaga?\n ${job}`)
    ) {
        jobOffers.splice(indexOfJobOffer, 1);
        alert("Vaga excluída com sucesso!");
    } else {
        return;
    }
}

function execute() {
    let option;
    let jobOffers = [];

    do {
        option = displayMenu();

        switch (option) {
            case 1:
                displayJobOffers(jobOffers);
                break;
            case 2:
                createJobOffer(jobOffers);
                break;
            case 3:
                const indexOfJobOffer3 = parseInt(prompt("Qual o índice da vaga?"));
                alert(displayOneJobOffer(indexOfJobOffer3, jobOffers));
                break;
            case 4:
                const candidatesName = prompt("Qual o nome do candidato?");
                const indexOfJobOffer4 = parseInt(prompt("Qual o índice da vaga?"));
                registerCandidate(candidatesName, indexOfJobOffer4, jobOffers);
                break;
            case 5:
                const indexOfJobOffer5 = parseInt(prompt("Qual o índice da vaga?"));
                deleteJobOffer(indexOfJobOffer5, jobOffers);
                break;
            case 6:
                option = 6;
                break;
            default:
                alert("Opção inválida!");
                break;
        }
    } while (option !== 6);
}

execute();