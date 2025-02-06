class MediaFactory {
    static createMedia(mediaData) {
        if (mediaData.image) {
            return new ImageMedia(mediaData);
        } else if (mediaData.video) {
            return new VideoMedia(mediaData);
        }
    }
}

class ImageMedia {
    constructor(mediaData) {
        this.title = mediaData.title;
        this.image = mediaData.image;
        this.likes = mediaData.likes;
    }
    render() {
        const img = document.createElement('img');
        img.setAttribute('src', `assets/sample/${this.image}`);
        img.setAttribute('alt', this.title);
        return img;
    }
}

class VideoMedia {
    constructor(mediaData) {
        this.title = mediaData.title;
        this.video = mediaData.video;
        this.likes = mediaData.likes;
    }
    render() {
        const video = document.createElement('video');
        const source = document.createElement('source');
        source.setAttribute('src', `assets/sample/${this.video}`);
        source.setAttribute('type', 'video/mp4');
        video.appendChild(source);
        return video;
    }
}