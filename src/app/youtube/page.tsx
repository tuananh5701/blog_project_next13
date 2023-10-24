'use client'
import { useRouter } from "next/navigation"

const Facebook = () =>{
    const router = useRouter()

    const handleBtn = () => {
        router.push('/')
    }
    return (
        <div>
            <h1>Youtube Page</h1>
            <div>
                <button onClick={handleBtn}>Back</button>
            </div>
        </div>
    )
}

export default Facebook