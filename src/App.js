import React, {useState, useEffect}from 'react';
import './App.css';
// import Recipe from './Recipe';


// const App = () => {


//   const APP_ID = "e93d15b2";
//   const APP_KEY = "49b6101b040b370b0374669ca8587587";
//   const API_URL = `https://api.edamam.com/search?q=banana&app_id=${APP_ID}&app_key=${APP_KEY}`;

 
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     loadData();
  
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const loadData = async() => {
//     const response = await fetch(API_URL);
//     const data = await response.json();
//     setRecipes(data.hits);
//     console.log(data.hits);
//   }
//   return (
//     <div className = "App">
//       {
//       recipes.map((r,id) => (
//         <Recipe key={id} title={r.recipe.title} image={r.recipe.image} calories={r.recipe.calories}/>
//       ))
//       }
//     </div>
//   )
// };
function App() {
  let data = {title:"Waiting for Data"};
  const [todo,setTodo] =useState(data);
  // eslint-disable-next-line no-unused-vars
  const [isData,setData] = useState(false);
  const [isFetching,setFetching] = useState(false);

  useEffect(() => {
    async function fetchData(){
      setFetching(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      console.log("response = ",response);
      let data2 = await response.json();
      setTodo(data2);
      setFetching(false);
      console.log("Data = ", todo);
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isData]);

  if(isFetching){
    return <div>Data Loading...</div>;
  }

  return (<div>
    Hello Fetch
    <span>Title: {todo.title}</span>
  </div>
  );
}
export default App;


















