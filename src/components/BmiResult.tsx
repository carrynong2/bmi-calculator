type BmiProps = {
  bmi: number
}

const BmiResult = ({ bmi }: BmiProps) => {
  const checkBmiResult = () => {
    if (bmi === 0) return '-'
    if (bmi < 18.5) return 'อยู๋ในเกณฑ์น้ำหนักน้อย / ผอม'
    if (bmi < 25) return 'อยู่ในเกณฑ์ปกติ (สุขภาพดี)'
    if (bmi < 30) return 'อยู๋ในเกณฑ์ท้วม / โรคอ้วนระดับ 1'
    if (bmi < 35) return 'อยู่ในเกณฑ์อ้วน / โรคอ้วนระดับ 2'
  }

  return (
    <div className="result">
      <p>ค่า BMI คือ: {bmi.toFixed(2)}</p>
      <p>ผลลัพธ์</p>
      <p>{checkBmiResult()}</p>
    </div>
  )
}

export default BmiResult