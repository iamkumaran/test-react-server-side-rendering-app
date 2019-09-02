import Layout from '../components/MyLayout';
export default function About () {
    return (
        <div>
            <Layout>
                <p>About Page</p>
            </Layout>
        </div>
    );
};

// import LayoutHOC from '../components/MyLayout';
// const Page = () => <p>About Page</p>;

// export default LayoutHOC(Page);