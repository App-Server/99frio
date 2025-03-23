<template>
    <div>
        <br>
        <div class="container">
            <div class="col-sm-12">
                <div class="card-body">
                    <div class="video-container">
                        <iframe 
                            src="https://www.youtube.com/embed/2Rd0Oa8y2Yc?si=jb4HytDRGzsDmPS9" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<style>
/* Responsividade do vídeo */
.video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* Proporção 16:9 */
    height: 0;
   
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
}</style>