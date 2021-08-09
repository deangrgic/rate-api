module.exports = (req, res) => (error) => {
  res.status(404);
  res.send(error);
};
