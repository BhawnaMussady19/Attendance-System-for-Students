import "./styles.css";
import moment from "moment";
import DatePicker from "react-datepicker"
import { useState } from "react";
import { useSearchParams } from "react-router-dom/dist";
import "react-datepicker/dist/react-datepicker.css";
import { ContactSupportOutlined } from "@material-ui/icons";
import { useEffect } from "react";

var getDaysArray = function(s,e) {for(var a=[],d=new Date(s);d<=new Date(e);d.setDate(d.getDate()+1)){ a.push(new Date(d));}return a;};
export default function Calendar() {
  const [searchParams] = useSearchParams()
  const [startDate, setStartDate] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false)
  const [presentArr, setPresentArr] = useState([...getDaysArray("03/01/2024","03/31/2024"), ...getDaysArray("04/01/2024","04/15/2024"), ...getDaysArray("04/18/2024","04/29/2024")])
  const [absentArr, setAbsentArr] = useState([
    { date: "4/16/2024", holidayName: "Absent" },
    { date: "4/17/2024", holidayName: "Absent" },
    { date: "4/30/2024", holidayName: "Absent" },
    { date: "5/1/2024", holidayName: "Absent" }
  ])
  console.log("test", startDate, absentArr)

  const onChange = (dates) => {
    setStartDate(dates);
  };

  useEffect(()=> {
    if(startDate!==null){
      setIsUpdate(true)
    }
  }, [startDate])
  
  const handlePresent = () => {
    const arr = presentArr;
    console.log('test prsent', arr, startDate)
    const filter = absentArr.filter(x=> x.date!== new Date(startDate).toLocaleString().split(",")[0])
    setAbsentArr(filter)
    arr.push(startDate)
    setPresentArr([...arr, startDate])
    setIsUpdate(false)
  }

  const handleAbsent = () => {
    const arr = absentArr;
    arr.push({date: new Date(startDate).toLocaleString().split(",")[0], holidayName: "Absent" })
    setAbsentArr(arr)
    setIsUpdate(false)
    setStartDate(null)
  }
  return (
    <div className="App">
      <h1>{searchParams.get('name')}'s Attendance</h1>
       <DatePicker
      onChange={onChange}
      startDate={startDate}
      inline
      highlightDates={presentArr}
      holidays={absentArr}
    />
    {isUpdate && <dialog id="modal" className="dialog">
       <button id="closeModal" className="dialog-close-btn" onClick={()=> setIsUpdate(false)}>Close</button>
       <p>Attendance's Update</p>
       <button onClick={handlePresent}>Mark Present</button>
       <button onClick={handleAbsent}>Mark Absent</button>
    </dialog>}
    </div>
  );
}
