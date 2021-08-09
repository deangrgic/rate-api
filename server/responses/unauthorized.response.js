module.exports = (req, res) => (error) => {
  res.status(401);
  res.send(error);
};
