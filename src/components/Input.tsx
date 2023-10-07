type InputProps = {
  handlerOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ handlerOnChange }: InputProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <label htmlFor="weight">น้ำหนัก (kg)</label>
      <input className="w-42 h-8 my-2 outline-none" type="number" name="weight" onChange={handlerOnChange} />

      <label htmlFor="height">ส่วนสูง (cm)</label>
      <input className="w-42 h-8 my-2 outline-none" type="number" name="height" onChange={handlerOnChange} />
    </div>
  )
}

export default Input