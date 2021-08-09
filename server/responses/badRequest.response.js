module.exports = (req, res) => (error) => {
  res.status(400);
  res.send(error);
};
