const IndexController = {
  showIndex: (req, res) => {
    res.render("index");
  },

  showLogin: (req, res) => {
    res.render("login");
  },
};

module.exports = IndexController;
