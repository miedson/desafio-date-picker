import './App.css'
import {useState} from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

function App() {
  const [ year, setYear ] = useState(new Date().getFullYear());
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  const thisMonth = months[new Date().getMonth()]
  return (
    <div id='app' className="box">
      <header>
        <i onClick={() => setYear(year - 1)}><CaretLeft weight="bold"></CaretLeft></i>
        <span>{year}</span>
        <i onClick={() => setYear(year + 1)}><CaretRight weight="bold"></CaretRight></i>
      </header>
      <main>
        {months.map((month, index) => 
          <div key={index} className={thisMonth === month ? 'active' : ''}>{month}</div>)}
      </main>
    </div>
  )
}

export default App
