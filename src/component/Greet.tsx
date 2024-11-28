interface nameProp {
    name : string
}
const Greet:React.FC<nameProp> = ({name}) => {
  return (
    <div>
      <h1 style={{backgroundColor:"blue"}}>Greeting's {name}</h1>
    </div>
  )
}
export default Greet