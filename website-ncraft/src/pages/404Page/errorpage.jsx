// import { useRouteError } from "react-router-dom";
import { ErrorHeader } from "./errorPageComponents/errorheader";
import '../../styles/error.css'

export const ErrorPage = () => {
    // const err = useRouteError();
    // console.error(err)

    return (
        <ErrorHeader />
    );
}