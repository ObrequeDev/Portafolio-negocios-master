import BlogList from "components/blog/BlogList";
import CTA from "components/home/CTA";
import FAQs from "components/home/FAQs";
import Header from "components/home/Header";
import Incentives from "components/home/Incentives";
import Logos from "components/home/Logos";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useEffect } from "react";
import { connect } from "react-redux";
import { get_blog_list, get_blog_list_page } from "redux/actions/blog";
import BlogCard from "components/blog/BlogCard";
import LoadingCard from "components/loaders/LoadingCard";
import { Helmet } from 'react-helmet'

function Home({
    blog_list,
    get_blog_list
}) {

    useEffect(() => {
        get_blog_list()

    }, [])

    

    return (

        <FullWidthLayout>
            <Helmet>
                <title>ObrequeDev - Home</title>
                <meta name="description" content="Pagina de Inicio - ObrequeDev" />
                <link rel="canonical" href="https://solopython.com" />
            </Helmet>
            <Header />
            <Logos />

            
            <Incentives />
            <FAQs />
            <CTA />
        </FullWidthLayout>
    )
}

const mapStateToProps = state => ({
    blog_list: state.blog.blog_list
})

export default connect(mapStateToProps, {
    get_blog_list
})(Home)
