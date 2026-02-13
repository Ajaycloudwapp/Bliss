
import React, { useRef, useState, useEffect } from "react";

const LazyImage = ({ src, alt }) => {
    const imgRef = useRef();
    const [loaded, setLoaded] = useState(false);
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowImage(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (imgRef.current) observer.observe(imgRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="shimmer-wrapper" ref={imgRef}>
            {!loaded && <div className="shimmer" />}
            {showImage && (
                <img
                    src={src}
                    alt={alt}
                    onLoad={() => setLoaded(true)}
                    className={loaded ? "fade-in" : ""}
                    style={{ display: loaded ? "block" : "none" }}
                />
            )}
        </div>
    );
};

export default LazyImage;
