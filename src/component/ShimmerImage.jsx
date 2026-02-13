
import React, { useState } from "react";

const ShimmerImage = ({ src, alt }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="shimmer-wrapper">
            {!loaded && <div className="shimmer" />}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                className={loaded ? "fade-in" : ""}
                style={{ display: loaded ? "block" : "none" }}
            />
        </div>
    );
};

export default ShimmerImage;
