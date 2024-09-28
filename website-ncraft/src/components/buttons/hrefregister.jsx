export const HreRegister = ({href, btnlabel}) => {
    return (
        <a href={href} className="btn-transparent py-3 px-5 text-sm text-white focus:outline-none bg-white rounded-lg border border-gray-200">
            {btnlabel}
        </a>  
    );
}