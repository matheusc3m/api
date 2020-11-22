import AnaliseAlcool from '../model/AnaliseAlcool';

class AnaliseControler {
  //cadastro
  async store(req, res) {
    const { Hora, MassaE, Temperatura, FatorCorrecao, Inpm, Ph, Condutividade, data, TipoAlcool } = req.body; // oque pede do json
    let analise = await AnaliseAlcool.create({ data, Hora, MassaE, Temperatura, FatorCorrecao, Inpm, Ph, Condutividade, TipoAlcool });

    if (!analise) {//Testa o se está cadastrado
      res.json("Falha ao cadastrar")
    }
    res.json("Cadastrado com sucesso!");
  }
  //lista por tipo de alcool
  async lista(req, res) {
    const { TipoAlcool } = req.body; // oque pede do json
    let lista = await AnaliseAlcool.find({ TipoAlcool });
    if (!lista) {
      res.json("Falha ao buscar")
    }

    res.json(lista);
  }
  //lista todos
  async listatodos(req, res) {
    let lista = await AnaliseAlcool.find({ "TipoAlcool": "hidratado" });
    if (!lista) {
      res.json("Falha ao buscar")
    }

    res.json(lista);
  }
  //deleta todos(com erro!!!)
  async deletalista(req, res) {
    const { id } = req.body; // oque pede do json
    let deleta = await AnaliseAlcool.findByIdAndDelete({ _id: id });
    if (!deleta) { //verifica se deletou
      res.json("Falha ao deletar")
    }

    res.json("Deletado com sucesso!");
  }

}
export default new AnaliseControler();
