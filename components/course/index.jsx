const Course = (props) => {
  return(
      <div className={'bg-gray-500 flex justify-center items-center p-10 flex flex-col'}>
          <p>
              {props.status}
          </p>
          <p>
              {props.name}
          </p>
      </div>
  )
}
export default Course