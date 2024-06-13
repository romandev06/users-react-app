import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <section style={{marginLeft: '75px'}}>
        <ContentLoader 
            speed={2}
            width={420}
            height={160}
            viewBox="0 0 420 160"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="76" y="7" rx="0" ry="0" width="250" height="20" /> 
            <rect x="39" y="52" rx="0" ry="0" width="2" height="0" /> 
            <rect x="10" y="10" rx="0" ry="0" width="50" height="50" /> 
            <rect x="428" y="28" rx="0" ry="0" width="5" height="35" /> 
            <rect x="10" y="89" rx="0" ry="0" width="50" height="50" /> 
            <rect x="77" y="40" rx="0" ry="0" width="250" height="20" /> 
            <rect x="76" y="91" rx="0" ry="0" width="250" height="20" /> 
            <rect x="75" y="121" rx="0" ry="0" width="250" height="20" />
        </ContentLoader>
    </section>
)

export default Skeleton