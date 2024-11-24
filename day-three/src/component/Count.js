export default function Count({message,cal}){
    return(
        <div>
          <p>{message}</p>
          <p>{cal(25,40)}</p>
        </div>
    )
}