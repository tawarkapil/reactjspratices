import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error from "./components/Error/Error";
import Home from "./components/Home";
import ContextMenu from "./components/ContextMenu";
import Expense from "./components/Expense";
import ExpenseFormUseRef from "./components/ExpenseFormUseRef";
import ExpenseFormValidation from "./components/ExpenseFormValidation";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/context",
                element: <ContextMenu />,
            },
            {
                path: "/expense",
                element: <Expense />,
            },
            {
                path: "/useRef",
                element: <ExpenseFormUseRef />,
            },
            {
                path:'/from-validation',
                element:<ExpenseFormValidation />
            }
        ],
    },
]);

export default router;
