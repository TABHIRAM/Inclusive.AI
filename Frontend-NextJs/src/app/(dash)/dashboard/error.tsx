"use client"

export default function ErrorBoundary({error}: {error: Error}) {
    return <div><h2>Erorr!!</h2>
    <h4>Oops.. something is not right now.</h4>
    <code>{error.message}</code></div> 
}