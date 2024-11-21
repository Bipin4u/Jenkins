interface nameProp {
    name : string
}
const Greet:React.FC<nameProp> = ({name}) => {
  return (
    <h1>Greeting's {name}</h1>
  )
}
export default Greet