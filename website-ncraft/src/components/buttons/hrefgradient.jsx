import { Link } from "react-router-dom";

export const HrefGradient = ({href, btnlabel}) => {
    return (
        <Link to={href} className="btn-gradient hover:duration-300 duration-300 hover:scale-[109%] transition hover:transition inline-flex justify-center items-center py-4 px-9 text-base text-center text-white rounded-lg">
            {btnlabel}
        </Link>
    );
}