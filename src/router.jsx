import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error from "./components/Error/Error";
import Home from "./components/Home";
import ContextMenu from "./components/ContextMenu";
// import Expense from "./components/Expense";

import ExpenseFormUseRef from "./components/ExpenseFormUseRef";
import ExpenseFormValidation from "./components/ExpenseFormValidation";
// import HighOrderComponent from "./components/HighOrderComponent";
// import Memo from "./components/HookSPectices/Memo";
import MemoParentComponent from "./components/HookSPectices/useMemo/MemoParentComponent";
import UseCallback from "./components/HookSPectices/useCallback/UseCallback";
import StudentOne from "./components/Hoc/StudentOne";
import { lazy } from "react";

const Expense = lazy(() => import('./components/Expense'));
const HighOrderComponent = lazy(()=>wait(3000).then(() => import( "./components/HighOrderComponent")));
const Memo = lazy(()=>wait(3000).then(()=>import("./components/HookSPectices/Memo")));

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
                path: '/from-validation',
                element: <ExpenseFormValidation />
            },
            {
                path: '/hoc',
                element: <HighOrderComponent />
            },
            {
                path: '/memo',
                element: <Memo />
            },
            {
                path: '/useMemoHook',
                element: <MemoParentComponent />
            },
            {
                path: '/useCallbackHook',
                element: <UseCallback />
            },
            {
                path: '/high',
                element: <StudentOne />
            },
        ],
    },
]);

const wait = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), time);
    })
}
export default router;
