import Button from 'react-bootstrap/Button';
export default function Books({bdata,onSelectBook}){
    return(
        <div>
            <>
            <ul>
                {
                    bdata.map((book)=>(
                        <li key={book.id}>
                            {book.name}
                            <Button onClick={()=>onSelectBook(book)}>select</Button>
                        </li>
                    ))
                }
            </ul>
        </>
        </div>
    )
}