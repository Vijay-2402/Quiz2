import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Admin() {
  const location = useLocation();
  const passedData = location.state.data;
  console.log(passedData);
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({
    title: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    Answer: null,
  });
  const [editQuestionId, setEditQuestionId] = useState(null);

  const handleAddQuestion = () => {
    setQuestions([...questions, { ...newQuestion, id: Date.now() }]);
    setNewQuestion({
      title: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      Answer: null,
    });
    const {data} = axios.post(url, { headers: {"Authorization" : `Bearer ${token}`} }).then((res) => {
    }, {withCredentials: true});
    Nav("/Candidate",{state:{data:data.access_token}})
    axios.defaults.headers.common['Authorization'] = `Bearer ${data['access_token']}`;

  };

  const handleEditQuestion = (id) => {
    const questionToEdit = questions.find((question) => question.id === id);
    if (questionToEdit) {
      setNewQuestion({ ...questionToEdit });
      setEditQuestionId(id);
    }
  };

  const handleUpdateQuestion = () => {
    const updatedQuestions = questions.map((question) =>
      question.id === editQuestionId ? { ...newQuestion, id: editQuestionId } : question
    );
    


    setQuestions(updatedQuestions);
    setEditQuestionId(null);
    setNewQuestion({
      title: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      Answer: null,
    });
    const {data} = axios.put(url, { headers: {"Authorization" : `Bearer ${token}`} }).then((res) => {
  }, {withCredentials: true});
  Nav("/Candidate",{state:{data:data.access_token}})
  axios.defaults.headers.common['Authorization'] = `Bearer ${data['access_token']}`;

  };

  const handleCancelEdit = () => {
    setEditQuestionId(null);
    setNewQuestion({
      title: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      Answer: null,
    });
  };

  return (
    <div className="admin-page">
      <h1>Admin Page</h1>

      <h2>Add Question</h2>
      <div className="add-question-form">
        <input
          type="title"
          placeholder="Question Text"
          value={newQuestion.text}
          onChange={(e) => setNewQuestion({ ...newQuestion, text: e.target.value })}
        />
        <input
          type="title"
          placeholder="Option 1"
          value={newQuestion.option1}
          onChange={(e) => setNewQuestion({ ...newQuestion, option1: e.target.value })}
        />
        <input
          type="title"
          placeholder="Option 2"
          value={newQuestion.option2}
          onChange={(e) => setNewQuestion({ ...newQuestion, option2: e.target.value })}
        />
        <input
          type="title"
          placeholder="Option 3"
          value={newQuestion.option3}
          onChange={(e) => setNewQuestion({ ...newQuestion, option3: e.target.value })}
        />
        <input
          type="title"
          placeholder="Option 4"
          value={newQuestion.option4}
          onChange={(e) => setNewQuestion({ ...newQuestion, option4: e.target.value })}
        />
        <select
          value={newQuestion.Answer}
          onChange={(e) => setNewQuestion({ ...newQuestion, Answer: e.target.value })}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button onClick={handleAddQuestion}>Add Question</button>
      </div>

      <h2>Update Question</h2>
      <div className="update-question-form">
        {editQuestionId !== null ? (
          <>
            <input
              type="text"
              placeholder="Question Text"
              value={newQuestion.text}
              onChange={(e) => setNewQuestion({ ...newQuestion, title: e.target.value })}
            />
            <input
              type="title"
              placeholder="Option 1"
              value={newQuestion.option1}
              onChange={(e) => setNewQuestion({ ...newQuestion, option1: e.target.value })}
            />
            <input
              type="title"
              placeholder="Option 2"
              value={newQuestion.option2}
              onChange={(e) => setNewQuestion({ ...newQuestion, option2: e.target.value })}
            />
            <input
              type="title"
              placeholder="Option 3"
              value={newQuestion.option3}
              onChange={(e) => setNewQuestion({ ...newQuestion, option3: e.target.value })}
            />
            <input
              type="title"
              placeholder="Option 4"
              value={newQuestion.option4}
              onChange={(e) => setNewQuestion({ ...newQuestion, option4: e.target.value })}
            />
            <select
              value={newQuestion.Answer}
              onChange={(e) => setNewQuestion({ ...newQuestion, Answer: e.target.value })}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <button onClick={handleUpdateQuestion}>Update Question</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </>
        ) : (
          <p>No question selected for editing.</p>
        )}
      </div>

      <h2>Questions</h2>
      <ul className="question-list">
        {questions.map((question) => (
          <li key={question.id}>
            {question.text}
            <button onClick={() => handleEditQuestion(question.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;