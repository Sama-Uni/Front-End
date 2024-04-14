const Course = (props) => {
  return(
      <div className={'bg-gray-200 flex justify-center items-center p-10 flex flex-col rounded-3xl border border-gray-400'}>
          <p className={'text-xl font-bold '}>
              {props.name}
          </p>
          <p className={'text-lg  text-black'}>
              ترم :
              {props.term}
          </p>
          <p className={'text-lg text-black'}>
              تی ای مورد نیاز :
              {props.TANum}
          </p>
          <p className={'text-lg text-black'}>
              تعداد داوطلبان :
              {props.requestNum}
          </p>
          <p className={'text-lg text-black'}>
              تایید شده :
              {props.accepted}
          </p>
      </div>
  )
}
export default Course