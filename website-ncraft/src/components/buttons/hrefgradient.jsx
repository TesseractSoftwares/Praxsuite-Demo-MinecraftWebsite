export const HrefGradient = ({href, btnlabel}) => {
    return (
        <a href={href} className="btn-gradient inline-flex justify-center items-center py-3 px-5 text-base text-center text-white rounded-lg">
            {btnlabel}
        </a>
    );
}