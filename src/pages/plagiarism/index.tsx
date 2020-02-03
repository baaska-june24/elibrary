import * as React from "react";
import Head from "next/head";
import withLayout from "~/components/Layout";
import PlagiarismForm from "~/components/Plagiarism";

const Profile = () => {

	return (
		<>
			<Head>
        		<title>Хуулбар шалгуур</title>
      		</Head>
		<PlagiarismForm />
		</>
	)
};

export default withLayout({ requireSignIn: true, ssr: false })(Profile);
