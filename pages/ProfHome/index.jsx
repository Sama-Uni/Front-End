import Courses from "@/components/courses";
import Header from "@/components/header";
import Footer from "@/components/footer";

const profHome = () => {
  return(
      <div className={'h-screen w-screen bg-white'}>
          <div>
              <Header/>
          </div>
          <div className={'text-white'}>
            <a className={''}>
                درس های درحال انتخاب
            </a>
          </div>
          <Courses/>
           <div>
              <Header/>
          </div>
      </div>
  )
}
export default profHome