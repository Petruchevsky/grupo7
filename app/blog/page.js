import BlogComponente from "../components/BlogComp";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
	title: "Tips G7",
	description: "Mira Nuestros tips de Limpieza",
};

async function getPosts() {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_APIURL}/api/blogs?populate=*`,
			{ cache: "no-store" }
		);

		if (!response.ok) {
			const errorData = await response.json();
			const errorMessage = `Error: ${response.status}: ${errorData.message}`;
			throw new Error(errorMessage);
		}

		const { data } = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}

async function Blog() {
	const data = await getPosts();

	return (
		<div>
			<Header />
			<Navbar />
			<BlogComponente props={data} />
			<Footer />
		</div>
	);
}

export default Blog;
