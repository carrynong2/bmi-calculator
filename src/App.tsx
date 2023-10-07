import React, { useState } from 'react'
import Input from './components/Input';
import BmiResult from './components/BmiResult';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState(0)

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    if (name === 'weight') {
      setWeight(Number(value));
    } else if (name === 'height') {
      setHeight(Number(value));
    }
  }


  const calculateBMI = () => {
    const bmi = weight / (height / 100) ** 2
    setBMI(bmi)
  }

  return (
    <div className='test flex flex-col mx-auto my-0 bg-slate-800 text-white text-center font-Rampart'>
      <h1>BMI Calculator</h1>
      <p>โปรแกรมคำนวณค่าดัชนีมวลกาย - BMI</p>

      <Input handlerOnChange={handleOnChange} />

      <div className='flex flex-col items-center justify-center'>
        <button type='button' onClick={calculateBMI}
          className='w-44 my-6 h-12 bg-green-400 cursor-pointer hover:bg-green-300'>
          คำนวณ
        </button>
      </div>

      <BmiResult bmi={bmi} />
    </div>
  )
}

export default App
