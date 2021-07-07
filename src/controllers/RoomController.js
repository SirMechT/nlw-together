// import do Banco de dados (Db)
const Database = require("../db/config")

module.exports = {
    async create(req, res){
        // inicialização do DB no controllers
        const db = await Database()
        // inclusão do password vindo do create-pass.ejs
        var pass = req.body.password
        let roomId

        for(var i =0; i < 6; i++){
            i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
            roomId += Math.floor(Math.random() * 10).toString()
        }

        console.log(pass)

        // inserção de dados na tabela 
        await db.run(`INSERT INTO rooms (
            id,
            pass
        ) VALUES (
            ${parseInt(roomId)}, 
            ${pass}
        )`)
        
        await db.close()

        // comando de redirecionamento da página com o ID da room
        res.redirect(`/room/${roomId}`)
    }
}