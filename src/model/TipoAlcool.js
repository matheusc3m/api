import {Schema, model} from 'mongoose'

const TipoAlcoolSchema = new Schema({
  Descrição:String,
})
export default model('TipoAlcool', TipoAlcoolSchema);