export default async function MyBook({params}: {params: {book_id:string}}){
    const {book_id} = await params;
    return <div className="text-2xl">My Book: {book_id}</div>
}