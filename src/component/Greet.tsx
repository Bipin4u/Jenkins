interface nameProp {
    name : string
}
const Greet:React.FC<nameProp> = ({name}) => {
  return (
    <h1 style={{backgroundColor:"blue"}}>Greeting'ssdds {name}</h1>
  )
}
export default Greet