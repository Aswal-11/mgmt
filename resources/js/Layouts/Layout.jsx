
export default function Layout({Children}){
     return (
        <>
         <header className="bg-blue-800 text-white flex justify-between items-center p-6 gap-3">
           
                <div><a href="/">Home</a></div>
                <div><a href="/create">Create</a></div>
           
         </header>

         <main>{Children}</main>
        </>
     )
}