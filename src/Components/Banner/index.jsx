"use client";

import React, { useEffect, useRef } from "react";
import VideoButton from "../Video/VideoButton";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function BannerHomeSection() {
    const playerRef = useRef(null);

    useEffect(() => {
        if (!window.YT) {
            const tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName("script")[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        } else {
            if (window.onYouTubeIframeAPIReady) window.onYouTubeIframeAPIReady();
        }

        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player("banner-video-background", {
                videoId: "P68V3iH4TeE",
                playerVars: {
                    autoplay: 1,
                    controls: 0,
                    mute: 1,
                    loop: 1,
                    playlist: "P68V3iH4TeE",
                    showinfo: 0,
                    rel: 0,
                    enablejsapi: 1,
                    disablekb: 1,
                    modestbranding: 1,
                    iv_load_policy: 3,
                    origin: window.location.origin
                },
                events: {
                    onReady: (event) => {
                        event.target.playVideo();
                    },
                    onStateChange: (event) => {
                        if (event.data === window.YT.PlayerState.ENDED) {
                            playerRef.current.playVideo();
                        }
                        if (event.data === window.YT.PlayerState.PLAYING) {
                            playerRef.current.setPlaybackQuality("hd1080");
                        }
                    }
                }
            });
        };
    }, []);

    return (
        <div className="section-banner">
            
            {/* 👇 YE HAI WO MAGIC CSS TRICK (FIXED FOR ENTIRE PAGE) 👇 */}
            <style dangerouslySetInnerHTML={{__html: `
                .banner-video-container {
                    position: relative;
                    width: 100%;
                    min-height: 100vh;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    background-color: #000;
                }
                #banner-video-background {
                    position: absolute !important;
                    top: 50% !important;
                    left: 50% !important;
                    transform: translate(-50%, -50%) !important;
                    width: auto !important;
                    height: auto !important;
                    min-width: 100% !important;
                    min-height: 100% !important;
                    aspect-ratio: 16 / 9 !important;
                    z-index: 0 !important;
                    pointer-events: none !important;
                }
                /* 👇 FIX: Ab ye sirf Banner wale container pe apply hoga, pure page par nahi 👇 */
                .banner-video-container .hero-container {
                    position: relative;
                    z-index: 2;
                    width: 100%;
                    padding: 50px 0; 
                }
            `}} />

            <AnimateOnScroll animation="fadeInUp">
                <div className="banner-video-container keep-dark">
                    <div id="banner-video-background"></div>
                    
                    <div className="hero-container position-relative">
                        <div className="d-flex flex-column gspace-2">
                            <AnimateOnScroll animation="fadeInLeft" speed="normal">
                               <h1 
                                    className="title-heading-banner" 
                                    style={{ 
                                        WebkitMaskImage: 'linear-gradient(to right, black 85%, transparent 100%)', 
                                        maskImage: 'linear-gradient(to right, black 85%, transparent 100%)' 
                                    }}
                                >
                                    Make Sure Your Next Customer Finds you <br/>first.
                                </h1>
                            </AnimateOnScroll>
                            <div className="banner-heading">

                                <AnimateOnScroll animation="fadeInUp" speed="normal">
                                    <div className="banner-video-content order-lg-1 order-2">
                                        <div className="d-flex flex-column flex-lg-row text-lg-start text-center align-items-center gspace-5">
                                            <VideoButton videoUrl="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1" />
                                            <p>
                                                Watch our video reviews and see how businesses achieve success
                                                with Dark Metrix digital marketing solutions.
                                            </p>
                                        </div>
                                    </div>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <div className="banner-content order-lg-2 order-1">
                                        <p>
                                           Dark Metrix is a digital marketing agency helping businesses get found, attract qualified customers and grow globally through SEO, performance marketing, paid ads, social media and conversion-focused web experiences.
                                        </p>
                                        <div className="d-flex flex-md-row flex-column justify-content-center justify-content-lg-start align-self-center align-self-lg-start gspace-3">
                                            <a href="./about" className="btn btn-accent">
                                                <div className="btn-title">
                                                    <span>Get Free Consultation</span>
                                                </div>
                                                <div className="icon-circle">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </div>
                                            </a>
                                            <div className="banner-reviewer">
                                                <div className="d-flex flex-row align-items-center">
                                                    <img src="/assets/images/dummy-img-400x400.jpg" alt="Reviewer" className="avatar" />
                                                    <img src="/assets/images/dummy-img-400x400.jpg" alt="Reviewer" className="avatar" />
                                                    <img src="/assets/images/dummy-img-400x400.jpg" alt="Reviewer" className="avatar" />
                                                </div>
                                                <div className="detail">
                                                    <span>1k+ Positive</span>
                                                    <span>Reviews</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </div>
                    </div>
                </div>  
            </AnimateOnScroll>
        </div>
    );
}

export default BannerHomeSection;