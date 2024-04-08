import {useState} from "react";
import Course from "@/components/course";

const Courses = () => {
    const [cours , setCours]=useState([{name:'mabani' , status:'dfghjkl'},{name:'mabani' , status:'dfghjkl'},{name:'mabani' , status:'dfghjkl'},{name:'mabani' , status:'dfghjkl'},])
  return(
      <div>
          {
              cours.map((k,index)=>
                      <div>
                  <Course name={k.name} status={k.status}/>
              </div>
              )
          }
      </div>
  )
}
export default Courses;