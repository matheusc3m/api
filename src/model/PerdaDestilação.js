import {Schema, model} from 'mongoose'

const PerdaDestilaçãoSchema = new Schema({
  porAlcool:Float32Array,
})
export default model('PerdaDestilação', PerdaDestilaçãoSchema);