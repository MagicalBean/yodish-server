const express = require("express");

var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

var pythonProcess;

app.post("/translate", (req, res) => {
  console.log("Recieved data");
  const spawn = require("child_process").spawn;
  pythonProcess = spawn(
    "C:Users\\Ben\\AppData\\Local\\Programs\\Python\\Python37\\python.exe",
    ["./translator.py", req.body.text]
  );
  console.log("Python Process");

  pythonProcess.stdout.on("data", (data) => {
    console.log("Sucess");
    res.json({ translated: data.toString().trim(), text: req.body.text });
  });

  pythonProcess.stderr.on("data", (data) => {
    console.log("Error");
    res.json({ error: data.toString().trim() });
  });
});

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
