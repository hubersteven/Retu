const Sitio = require('../models/sitio.model');

// Obtener todos los sitios turísticos
exports.obtenerSitios = async (req, res) => {
  try {
    const sitios = await Sitio.find();
    res.json(sitios);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los sitios turísticos' });
  }
};

// Crear un nuevo sitio
exports.crearSitio = async (req, res) => {
  try {
    const nuevoSitio = new Sitio(req.body);
    const sitioGuardado = await nuevoSitio.save();
    res.status(201).json(sitioGuardado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear el sitio turístico' });
  }
};

// Actualizar sitio
exports.actualizarSitio = async (req, res) => {
  try {
    const sitioActualizado = await Sitio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!sitioActualizado) return res.status(404).json({ error: 'Sitio no encontrado' });
    res.status(200).json(sitioActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el sitio' });
  }
};

// Eliminar sitio
exports.eliminarSitio = async (req, res) => {
  try {
    const eliminado = await Sitio.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ error: 'Sitio no encontrado' });
    res.status(200).json({ mensaje: 'Sitio eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el sitio' });
  }
};
