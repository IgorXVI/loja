const Pessoa = require("./Pessoa")

module.exports = class PessoaFisica extends Pessoa {
    constructor(nomeSingular, nomePlural) {
        super(nomeSingular, nomePlural)

        this.JSON.CPF = ""
        this.JSON.dataNascimento = ""
    }

    async CPF(novoCPF) {
        await this._validaNotNull("CPF", novoCPF)
        await this._validaFixoChars("CPF", novoCPF, 14)
        await this._validaRegex("CPF", novoCPF, /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/)
        this.JSON.CPF = novoCPF
    }

    async dataNascimento(novaDataNascimento) {
        await this._validaNotNull("dataNascimento", novaDataNascimento)
        await this._validaMaxChars("dataNascimento", novaDataNascimento, 10)
        await this._validaDataISO8601("dataNascimento", novaDataNascimento)
        this.JSON.dataNascimento = novaDataNascimento
    }

}