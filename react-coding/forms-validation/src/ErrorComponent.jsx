const ErrorComponent = ({}) => {
    throw new Error('bbbb')
    const handle = (e) => {
        throw new Error('aaaaa')
    }
    
    return <div onClick={handle}>Error</div>
}

export default ErrorComponent