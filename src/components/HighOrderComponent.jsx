import useFetch from "../Hooks/useFetch";


// Higher Order Component
const MainComponent = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                High Order Component
                <WrappedComponent {...props} />
            </div>
        );
    };
};

const HelloComponent = () => {
    const [data,err] = useFetch('https://dummyjson.com/test');
    console.log(data,err);
    return (
        <> 
            <h1>{data?.status}</h1>
            <div>Hello Component</div>
        </>
        
    )
}

const HighOrderComponent = MainComponent(HelloComponent);

export default HighOrderComponent;