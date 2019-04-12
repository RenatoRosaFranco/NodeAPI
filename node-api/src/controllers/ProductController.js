const mongoose = require('mongoose');
const Product  = mongoose.model('Product'); 

// ProductController
module.exports = {

  // GET /index
  async index(req, res) {
   const { page = 1 } = req.query
   const products = await Product.paginate({}, { page: page, limit: 10 });
   return res.json(products);
  },
  
  // POST /store
  async store(req, res) {
   const product = await Product.create(req.body);
   return res.json(product);
  },

  // GET /show
  async show(req, res) {
    const product = await Product.findById(req.params.id);
    return res.json(product);
  },

  // PATCH /update
  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.params.body, { new: true })
    return res.json(product);
  },
  
  // DELETE /destroy
  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);
    return res.send('');
  }
}