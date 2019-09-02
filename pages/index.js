import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';

const PostLinks = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.show.id}`}>
            <a>{props.show.name}</a>
        </Link>
    </li>
);

const Index = props => (
    <>
        <Head>
            <link rel="manifest" href="/static/manifest.json" />
            <meta name="theme-color" content="#72B340" />
            <meta name="description" content="make your Next.js application work offline using service workers via Googles workbox"/>
        </Head>
        <Layout>
            <h1>My blog</h1>
            <ul>
                {props.shows.map(show => (
                    <PostLinks key={show.id} show={show} />
                ))}
            </ul>
        </Layout>
    </>
);

Index.getInitialProps = async function() {
    const resp = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await resp.json();

    console.log(`batman dara ${data.length}`);

    return {
        shows: data.map(entry => entry.show)
    };
};
export default Index;

// import LayoutHOC from '../components/MyLayout';

// const Page = () => (
//     <p>Hello Next.js</p>
// );

// export default LayoutHOC(Page);