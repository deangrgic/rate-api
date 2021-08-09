module.exports = (req, res) => (error) => {
  res.status(500);
  res.send(error);
};
