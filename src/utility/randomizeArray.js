const randomizeArray = () => {
    return [...Array(60)].map( i => Math.floor(Math.random() * 300))
}

export default randomizeArray;
