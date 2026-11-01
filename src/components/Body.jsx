function Body(props) {
    return (
        <div className="bg-white w-full max-w-[250px] h-[200px] overflow-hidden rounded-2xl hover:-translate-y-2 duration-500 hover:shadow-2xl font-poppins">

            <img
                src={props.img}
                alt={props.text}
                className="object-cover h-[85%] w-full"
            />

            <p className="text-center font-bold">
                {props.text}
            </p>

        </div>
    )
}

export default Body;