import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { get_blog_list } from "redux/actions/blog"



const FullWidthLayout = ({
    children, 
    get_blog_list,
    account
}) => {

    useEffect(()=>{
        
    },[])

    useState(()=>{
        get_blog_list()
    },[])

    return(
        <>
        <Navbar account={account}/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
            <div className="max-w-7xl mx-auto">
                {/* Content goes here */}
                {children}
            </div>
        </div>
        <Footer/>
        </>
    )
}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps,{
    get_blog_list,
})(FullWidthLayout)