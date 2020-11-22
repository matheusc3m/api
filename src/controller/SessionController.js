import User from '../model/User';

class SessionControler{

  async store(req,res){
    const {email, nome, senha }=req.body; // oque pede do json
    
   /* email logado :	"email":"node@js.com",
                      "nome":"Node.js",
                      "senha":"1234"*/
    let user = await User.findOne({email}); 
    if(!user){
      user = await User.create({email, nome, senha})
    }
    res.json({user})
  }
  async login(req,res){
    const {email, senha }=req.body; // oque pede do json
    
   /* email logado :	"email":"node@js.com",
                      "senha":"1234"*/
    let user = await User.findOne({email}); 
    if(!user){
      return res.json("Usuário não cadastrado");
    }
    
    return res.json(user.id);
  }
  async listatodos(req,res){
    let user = await User.find({});
    if(!user){
      res.json("Falha ao buscar")
    }

    res.json(user);
  }
  async deletauser(req,res){
     const {id}=req.body; // oque pede do json
      let deleta = await User.findByIdAndRemove({ _id: id});
      if(!deleta){
        res.json("Falha ao deletar")
      }
  
      res.json("Deletado com sucesso!!!");
    }

}
export default new SessionControler();