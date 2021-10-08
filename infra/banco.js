

class Banco{
    init(conexao){

        this.conexao = conexao
        this.criarBanco()

    }
    criarBanco(){
        const sql = "CREATE DATABASE IF NOT EXISTS agenda_petshop "
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Banco agenda-petshop sucesso')
            }
        })
    }

}

module.exports = new Banco