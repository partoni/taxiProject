
class UserController{
 static reg(req,res){
    try {
        const body = req.query
        console.log(body);
        res.status(200).json(body)
    } catch (error) {
        res.status(500).json(error)
    }
 }
 static auth(){
    try {
        const body = req.query
        console.log(body);
        res.status(200).json(body)
    } catch (error) {
        res.status(500).json(error)
    }
 }
}

module.exports = UserController