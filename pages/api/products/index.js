import DB from "../../../database/db";
const allProducts = async (request, response) => {
  const db = new DB();
  const allEntries = await db.getAll();
  const length = allEntries.length;
  response.statusCode = 200;
  response.setHeader("Content-type", "application/json");
  response.end(JSON.stringify({ length, data: allEntries }));
};

export default allProducts;