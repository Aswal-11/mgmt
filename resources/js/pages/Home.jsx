import Layout from "../Layouts/Layout";

function Home({name})
{
    return<>
    <div className="font-semibold">Home{name}</div>
    </>
}

Home.layout = page => <Layout  Children={page}/>

export default Home;