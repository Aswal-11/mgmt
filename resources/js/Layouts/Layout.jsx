import { Link } from "@inertiajs/react"

export default function Layout({Children}){
     return (
        <>
         <header className="bg-blue-800 text-white flex justify-between items-center p-6 gap-3">
           
                <div><Link href="/">Home</Link></div>
                <div><Link href="/teachers_create">Create</Link></div>
                 {/* <div><Link href="/subject_create">Subject</Link></div> */}
           
         </header>

         <main>{Children}</main>
        </>
     )
}