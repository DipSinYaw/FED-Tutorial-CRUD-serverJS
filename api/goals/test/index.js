export default function handler(req, res) {
  res.status(200).json({ message: "Hello from Serverless Function!" });
}
// module.exports = (req, res) => {
//   if (req.method === "GET") {
//     res.status(200).json(["goal1", "goal2"]);
//   } else if (req.method === "POST") {
//     res.status(201).json({ message: "Created" });
//   }
// };
