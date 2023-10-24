'use client'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import useSWR, {Fetcher} from 'swr';
import { Link } from 'next/link';

const ViewDetailBlog= ({ params }: { params: { id: string } }) =>{
    
    const fetcher : Fetcher<IBlog, string> = (url : string) => fetch(url).then((res) => res.json())

  const {data, error, isLoading} = useSWR(
    `http://localhost:8000/blogs/${params.id}`,
    fetcher,{
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  )
    return(<div className='mx-3'>
        
        <Card className="text-center">

      <Card.Header>{data?.title}</Card.Header>
      <Card.Body>
        <Card.Title>{data?.title}</Card.Title>
        <Card.Text>
          {data?.content}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{data?.author}</Card.Footer>
      
    </Card>
    
    </div>)
}
export default ViewDetailBlog