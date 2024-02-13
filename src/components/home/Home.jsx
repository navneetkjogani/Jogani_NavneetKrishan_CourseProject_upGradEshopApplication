//Home page for user after login

import useAuthentication from "../../assets/useAuthentication";
import {useContext} from "react";
import Box from "@mui/material/Box";


const Home = () => {
	const {AuthCtx} = useAuthentication();
	const {hasRole} = useContext(AuthCtx);
	let mode = (hasRole(["ADMIN"])) ? "EDIT" : "VIEW";

	return (
		<Box >

		</Box>
	);
};

export default Home;