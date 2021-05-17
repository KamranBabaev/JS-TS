export const User = () => {

    const removeUser = () => {
        alert('user deleted...')
    }

    const saveUser = () => {
        alert('user save!!!')
    }

    return (
        <div>Katya
            <button onClick={removeUser}>remove</button>
            <button onClick={saveUser}>save</button>
        </div>
    )
}