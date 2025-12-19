export default function Card({user}){
    return(
        <div className="bg-white shadow-md hover:shadow-xl transition duration-300 overflow-hidden rounded-4xl">
            <img src={user.avatar_url} className="w-full h-48 object-cover"></img>
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold p-4 text-md">{user.login}</h1>
                <a href={user.html_url}
                target="_blank" className="inline-block p-3 mx-4 my-2 text-blue-600 border rounded-full hover:shadow-md transition cursor-pointer mb-3">Visit Profile</a>
            </div>
        </div>
    )
}