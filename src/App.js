import { useEffect, useState } from "react";
import './App.css'
import Card from "./components/Card";

const App = () => {

  const [data, setData] = useState([])

  // Fetch data on initial load
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json")
      const data = await response.json()
      setData(data)
    }
    fetchData()
  }, [])

  return (
    <div className="row App" style={{ marginTop: 100 }}>
      {data.map((d, i) => <Card {...d} key={i} />)}
    </div>
  )
}

export default App;
