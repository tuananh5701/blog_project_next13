'use client'
import useSWR from "swr"
import Apptable from "../components/app.table"

const BlogsPage =() =>{
    const fetcher = (url : string) => fetch(url).then((res) => res.json())
  const {data, error, isLoading} = useSWR(
    "http://localhost:8000/blogs",
    fetcher,{
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  )
  if(!data){
    return <div>Loading........</div>
  }
    return(
        <div className="mt-3">
        <Apptable 
        blogs = {data?.sort((a : any, b: any) => b.id - a.id ) ?? []}
      />
        </div>
    )
}
 export default BlogsPage