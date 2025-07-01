  import './App.css';
  import { useQuery } from '@tanstack/react-query';
  import { useState } from 'react';


  function App() {
    const [id, setId] = useState()
    const { data, isPending } = useQuery({
      queryKey: ['todoes'], //Ma'lumotni aniqlash uchun mukammal kalit
      queryFn: getTodos, //API’ga so‘rov yuboradigan async funksiyasi
    });


    return (
      <>
    <div>{isPending ?
      <h1>loading...</h1> : JSON.stringify(data?.slice(0, 10))}
    </div>
        <button onClick={() => setId((prev) => prev + 1)}>Increment button</button>
      </>
    )

  }

  const getTodos = async () => {
    await new Promise((resolve ) => setTimeout(resolve, 1000))
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return await response.json();
  };

  export default App;

