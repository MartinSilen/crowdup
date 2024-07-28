import {MantineProvider} from "@mantine/core";
import {Notifications} from "@mantine/notifications";
import {customTheme} from "./theme";

import './App.css'
import {RouterProvider} from "react-router-dom";
import router from "./routes";
import MontserratFont from "./fonts/MontserratFont.tsx";
import SussieIntlFont from "./fonts/SussieIntl.tsx";

function App() {
    return (
        <>
            <MantineProvider theme={customTheme}>
                <RouterProvider router={router}/>
                <MontserratFont/>
                <SussieIntlFont/>
                <Notifications/>
            </MantineProvider>
        </>
    )
}

export default App
