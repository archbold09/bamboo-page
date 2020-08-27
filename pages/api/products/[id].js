import DB from "../../../database/db";

const Product = async (req, res) => {
  try {
    const db = new DB();
    const productId = req.query.id;
    const product = await db.getById(productId);

    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(404).end();
  }
};
export default Product
