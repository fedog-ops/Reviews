const Error = ({err:{msg, status}}) =>{
   
    return (<div>
        <p>Status: {status}</p>
        <p> Message: User {msg}</p>
    </div>)
}
export default Error