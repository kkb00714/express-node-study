
function App() {
  fetch('http://localhost:8000/users/list')
  .then((response) => response.json())
  .then((data) => console.log(data));

  return (
    <div className="App">
      <h1>유저 조회 가보자고</h1>
    </div>
  );
}

export default App;
