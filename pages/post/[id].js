import { useRouter } from 'next/router'

export default function post (){
   const router= useRouter( )
   console.log(router)
    return<>
    <h1> new post {router.query.id} </h1>
    </>
}