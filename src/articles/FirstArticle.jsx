import React, { useState } from "react";
import "./FirstArticle.css";

const FirstArticle = () => {
  const [activeArticle, setActiveArticle] = useState("article1");
  const [quizAnswers, setQuizAnswers] = useState({ q1: "", q2: "" });
  const [quizResult, setQuizResult] = useState("");

  const articles = {
    article1: {
      title: "Article 1 - Name and territory of the Union",
      content: `
        1. India, also called Bharat, is made up of States.
        2. The specific States and their territories are listed in the First Part.
        3. India's territory includes:
          a. The territories of the States.
          b. The Union territories also listed in the First Part.
          c. Any other territories that may be acquired later on.
      `,
    },
    article2: {
      title: "Article 2 - Admission or establishment of new States",
      content: `
        1. Parliament can make laws to let new States join or create new States with certain rules.
        2. Sikkim used to be linked with the Union but was removed from that connection in 1975 by a constitutional amendment.
      `,
    },
    article3: {
      title:
        "Article 3 - Formation of new States and alteration of areas, boundaries or names of existing States",
      content: `
        1. Parliament can make a law to:
          a. Create a new State by taking land from another State, combining two or more States, or adding territory to a part of a State.
          b. Make a State larger.
          c. Make a State smaller.
          d. Change the borders of a State.
          e. Change the name of a State.
      `,
    },
    article4: {
      title:
        "Article 4 - Laws made under Article 2 and 3 to provide for amendment of Schedules",
      content: `
        1. Any law made under Article 2 or Article 3 can amend the First and Fourth Schedules to give effect to the provisions of the law.
        2. Such laws are not considered amendments under Article 368.
      `,
    },
  };

  const handleQuizChange = (e) => {
    setQuizAnswers({
      ...quizAnswers,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitQuiz = () => {
    const correctAnswers = { q1: "a", q2: "b" };
    let score = 0;

    if (quizAnswers.q1 === correctAnswers.q1) score++;
    if (quizAnswers.q2 === correctAnswers.q2) score++;

    setQuizResult(`You got ${score} out of 2 correct!`);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Learn About Indian Constitution Articles (1-4)</h1>
      </header>
      <div className="container">
        {/* Sidebar */}
        <nav className="sidebar">
          <ul>
            <li
              className={activeArticle === "article1" ? "active" : ""}
              onClick={() => setActiveArticle("article1")}
            >
              Article 1
            </li>
            <li
              className={activeArticle === "article2" ? "active" : ""}
              onClick={() => setActiveArticle("article2")}
            >
              Article 2
            </li>
            <li
              className={activeArticle === "article3" ? "active" : ""}
              onClick={() => setActiveArticle("article3")}
            >
              Article 3
            </li>
            <li
              className={activeArticle === "article4" ? "active" : ""}
              onClick={() => setActiveArticle("article4")}
            >
              Article 4
            </li>
          </ul>
        </nav>

        {/* Content Section */}
        <section className="content">
          <h2>{articles[activeArticle].title}</h2>
          <p>{articles[activeArticle].content}</p>

          {/* Quiz Section */}
          <div className="quiz-section">
            <h3>Quiz on Indian Constitution Articles</h3>

            {/* Quiz 1 */}
            <div className="quiz">
              <p>1. What does Article 1 of the Constitution define?</p>
              <label>
                <input
                  type="radio"
                  name="q1"
                  value="a"
                  onChange={handleQuizChange}
                />{" "}
                The name and territory of India
              </label>
              <label>
                <input
                  type="radio"
                  name="q1"
                  value="b"
                  onChange={handleQuizChange}
                />{" "}
                Admission of new States
              </label>
            </div>

            {/* Quiz 2 */}
            <div className="quiz">
              <p>
                2. Which article allows Parliament to alter the boundaries of
                existing States?
              </p>
              <label>
                <input
                  type="radio"
                  name="q2"
                  value="a"
                  onChange={handleQuizChange}
                />{" "}
                Article 1
              </label>
              <label>
                <input
                  type="radio"
                  name="q2"
                  value="b"
                  onChange={handleQuizChange}
                />{" "}
                Article 3
              </label>
            </div>

            <button onClick={handleSubmitQuiz}>Submit Quiz</button>

            {quizResult && <div className="result">{quizResult}</div>}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FirstArticle;
