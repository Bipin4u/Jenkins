interface nameProp {
    name : string
}
const Greet:React.FC<nameProp> = ({name}) => {
  return (
    <div>
      <h1 style={{backgroundColor:"blue"}}>Greeting's {name} kumar</h1>
    </div>
  )
}
export default Greet