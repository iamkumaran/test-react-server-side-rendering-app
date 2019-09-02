import Header from './Header';

const css = {
    margin: 20,
    border: '1px solid red'
}

const Layout = props => (
    <div style={css}>
        <Header />
        {props.children}
    </div>
);

export default Layout;

// const LayoutHOC = Page => {
//     return (
//         <div style={css}>
//             <Header />
//             <Page />
//         </div>
//     );
// };

// export default LayoutHOC;