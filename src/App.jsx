import './App.css'
import Card from './Card'
import persones from "./personne.js"

function App() {


  return (
      <>
        {/* <Bag children={<Apples color="red" number="5"/>} /> */}

          <Card hamadi={persones[0]}/>
          <Card hamadi={persones[1]}/>
          <Card hamadi={persones[2]}/>
          <Card hamadi={persones[3]}/>
          <Card hamadi={persones[4]}/>

      </>

  )
}

export default App