class Formulario {
    constructor(nome, dataNascimento, cpf, telefone, celular, pis, estuda) {
        this._nome = nome;
        this._dataNascimento = dataNascimento;
        this._cpf = cpf;
        this._telefone = telefone;
        this._celular = celular;
        this._pis = pis;
        this._estuda = estuda;
    }


    // ----- nomes iniciados em maiuscula ----

    get nome() {
        const novoNome = this._nome.split(" ").map(arrNome => arrNome[0].toUpperCase() + arrNome.slice(1));

        return novoNome.join(" ");
    }

    set nome(novoNome) {
        this._nome = novoNome.toLowerCase();
    }

    // ----- Data de Nascimento ----
    get dataNascimento() {
        return this._dataNascimento.replace(/([A-Z0-9\!\-]{2})([A-Z0-9\!\-]{2})([A-Z0-9\!\-]{4})/, "$1/$2/$3")

        return novaData;
    }

    set dataNascimento(novaData) {
        this._dataNascimento = novaData.split("-").reverse().join("");
    }

    // ------- mascara CPF ------------
    get cpf() {
        return this._cpf.replace(/([A-Z0-9\!\-]{3})([A-Z0-9\!\-]{3})([A-Z0-9\!\-]{3})([A-Z0-9\!\-]{2})/, "$1.$2.$3-$4");
    }



    set cpf(novoCpf) {
        this._cpf = novoCpf.replace(/[^\d]/g, "");



    }



    // ------- mascara telefone ------------
    get telefone() {
        return this._telefone.replace(/([A-Z0-9\!\-]{2})([A-Z0-9\!\-]{4})([A-Z0-9\!\-]{4})/, "($1) $2-$3");
    }



    set telefone(novoTelefone) {
        this._telefone = novoTelefone.replace(/[^\d]/g, "");



    }

    // ------- mascara celular ------------
    get celular() {
        return this._celular.replace(/([A-Z0-9\!\-]{2})([A-Z0-9\!\-]{5})([A-Z0-9\!\-]{4})/, "($1) $2-$3");
    }



    set celular(novoCelular) {
        this._celular = novoCelular.replace(/[^\d]/g, "");
    }



    // ------- mascara PIS ------------
    get pis() {
        return this._pis.replace(/([A-Z0-9\!\-]{3})([A-Z0-9\!\-]{4})([A-Z0-9\!\-]{3})([A-Z0-9\!\-]{1})/, "$1.$2.$3-$4");
    }



    set pis(novoPis) {
        this._pis = novoPis.replace(/[^\d]/g, "");
    }


    // ------- Muda Estuda para Sim ou Não ------------
    get estuda() {
        if (this._estuda === true) {
            return 'Sim'
        }
        return "Não"
    }

    set estuda(estuda) {
        this._estuda = estuda
        return this._estuda
    }
}


// ----- Criação da Classe Empresa ----
class Empresa {
    constructor() {
        this.funcionarios = [];
    }
    join(funcionario) {
        this.funcionarios.push(funcionario);
    }
}

const kenzieTrampo = new Empresa();



// ----- Entrada dos dados de Funcionarios ------
// ---- Prevent Default para formulário ----
function pDefault(evento) {
    evento.preventDefault();
    const nomeInput = document.getElementById('name');
    const birthDateInput = document.getElementById('birthDate');
    const cpfInput = document.getElementById('cpf');
    const phoneInput = document.getElementById('phone');
    const cellphoneInput = document.getElementById('cellphone');
    const pisInput = document.getElementById('pis');
    const studiesInput = document.getElementById('studies');

    const novoFuncionario = new Formulario(nomeInput.value, birthDateInput.value, cpfInput.value, phoneInput.value, cellphoneInput.value, pisInput.value, studiesInput.checked);
    criaDiv(novoFuncionario)
}

//----- DOM -> Entrega na página HTML -----
function criaDiv(novoFuncionario) {
    const div = document.createElement('div');
    const pNome = document.createElement('p');
    const pBirth = document.createElement('p');
    const pCpf = document.createElement('p');
    const pPhone = document.createElement('p');
    const pCell = document.createElement('p');
    const pPis = document.createElement('p');
    const pStudies = document.createElement('p');

    //------- declarando para funcionar o SET --------------    
    novoFuncionario.nome = novoFuncionario._nome;
    novoFuncionario.dataNascimento = novoFuncionario._dataNascimento;
    novoFuncionario.telefone = novoFuncionario._telefone;
    novoFuncionario.celular = novoFuncionario._celular;
    novoFuncionario.pis = novoFuncionario._pis;
    novoFuncionario.estuda = novoFuncionario._estuda;

    // --------- Adicionando ao HTML ------------------

    pNome.innerHTML = `Nome do Funcionário: ${novoFuncionario.nome}`;
    pBirth.innerHTML = `Data Nascimento: ${novoFuncionario.dataNascimento}`;
    pCpf.innerHTML = `CPF: ${novoFuncionario.cpf}`;
    pPhone.innerHTML = `Telefone: ${novoFuncionario.telefone}`;
    pCell.innerHTML = `Celular: ${novoFuncionario.celular}`;
    pPis.innerHTML = `PIS: ${novoFuncionario.pis}`;
    pStudies.innerHTML = `Estuda: ${novoFuncionario.estuda}`;

    div.appendChild(pNome);
    div.appendChild(pBirth);
    div.appendChild(pCpf);
    div.appendChild(pPhone);
    div.appendChild(pCell);
    div.appendChild(pPis);
    div.appendChild(pStudies);

    kenzieTrampo.join(div);

}

// ---- BOTÃO ENVIAR --------
const enviarButton = document.getElementById("btnSubmit")
    .addEventListener('click', pDefault);

// ------ BOTÃO IMPRIMIR LISTA -----
const printButton = document.getElementById("printForm").addEventListener('click', mostraFunc);

// ------ MOSTRAR NA TELA O RESULTADO -----
function mostraFunc() {
    const output = document.getElementById('output');
    output.innerHTML = "";
    kenzieTrampo.funcionarios.forEach(funcionario => output.appendChild(funcionario));

}