module.exports = {
    create(req, res){
        let roomId = 323243


        // comando de redirecionamento da página com o ID da room
        res.redirect(`/room/${roomId}`)
    }
}