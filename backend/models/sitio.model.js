const mongoose = require('mongoose');

const sitioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: String,
  ubicacion: String,
  categoria: [String],
  imagenes: [String],
  puntuacion: Number,
  estado: { type: String, enum: ['activo', 'inactivo'], default: 'activo' },
  propietario_id: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Sitio', sitioSchema);