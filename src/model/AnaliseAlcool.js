import {Schema, model} from 'mongoose'

const AnaliseAlcoolSchema = new Schema({
  data: String,
  Hora: String,
  MassaE: String,
  Temperatura: String,
  FatorCorrecao: String,
  Inpm: String,
  Ph: String,
  Condutividade: String,
  IdUser: {
    type: Schema.Types.ObjectId,
    ref:'User'
  },
  TipoAlcool:String,
})
export default model('AnaliseAlcool', AnaliseAlcoolSchema); 