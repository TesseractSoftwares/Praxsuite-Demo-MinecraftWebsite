import { Link } from "react-router-dom";

export const HreRegister = ({btnlabel}) => {
    return (
        <Link to="/" className="btn-transparent hover:duration-300 duration-300 hover:scale-[109%] transition hover:transition text-center inline-flex justify-center items-center py-4 px-9 text-base text-white focus:outline-none bg-white rounded-lg border border-gray-200">
            {btnlabel}
        </Link>  
    );
}