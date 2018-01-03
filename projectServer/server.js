let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let CreateBytes = require("./src/components/createBytes");
let GetJokes = require("./src/components/getjokes");
let GetLearningGoals = require("./src/components/getlearninggoals");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 8000;
let router = express.Router();

router.get("/", function(req, res) {
  res.json({ message: "hooray! welcome to our api!" });
});

router.get("/securerandoms", (req, res, err) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  })
  CreateBytes.createBytes(64, data => 
    res.send({
      randoms: data
    })
  )
});
router.get("/jokes", (req, res, err) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  });
  let jokes = GetJokes.getJokes();
  res.send(jokes);
});
router.get("/periodes/:periode", (req, res, err) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  });
  let learningGoals = GetLearningGoals.getLearningGoals(req.params.periode);
  res.send(learningGoals);
});

app.use("/api", router);
app.listen(port);
