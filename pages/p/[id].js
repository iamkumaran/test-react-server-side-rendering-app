// import { useRouter } from 'next/router';
import Layout from '../../components/MyLayout';

const Page = props => {
    // const router = useRouter();
    return (
        <Layout>
            {/* <h1>{router.query.id}</h1> */}
            <h1>{props.data.name}</h1>
            <p>{props.data.summary}</p>
            <img src={props.data.image.medium} />
        </Layout>
    )
}

Page.getInitialProps = async function(context) {
    const { id } = context.query;
    const resp = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const data = await resp.json();

    console.log(`Fetched show: ${data}`);
    return {data}
}

export default Page;