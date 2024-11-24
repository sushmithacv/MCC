export default function Student({id,name,age}){
    return(
        <div>
            <table>
                <tr>
                    <td>ID: </td>
                    <td>{id}</td>
                </tr>
                <tr>
                    <td>Name is: </td>
                    <td>{name}</td>
                </tr>
                <tr>
                    <td>Age is: </td>
                    <td>{age}</td>
                </tr>
            </table>
        </div>
    )
}