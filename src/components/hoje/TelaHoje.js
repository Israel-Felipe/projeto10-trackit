
export default function TelaHoje() {

    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    return (
        <>
            <h1>{user.image}</h1>

        </>
    )
}   