const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/courses", require("./routes/courseRoutes"));
app.use("/api/lessons", require("./routes/lessonRoutes"));
app.use("/api/enrollments", require("./routes/enrollmentRoutes"));
app.use("/api/quiz", require("./routes/quizRoutes"));

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`LMS backend running on ${PORT}`));
