

function SocialMediaIntegration() {
    const handleShare = (platform) => {
        switch (platform) {
            case 'facebook':
                // Logic to share on Facebook
                window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href), 'facebook-share-dialog', 'width=800,height=600');
                break;
            case 'twitter':
                // Logic to share on Twitter
                window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.title) + '&url=' + encodeURIComponent(window.location.href), 'twitter-share-dialog', 'width=800,height=600');
                break;
            case 'instagram':
                // Currently, Instagram does not allow sharing via web links, focus on other platforms
                alert('Instagram sharing is not supported via web.');
                break;
            default:
                console.error('Unsupported platform');
                break;
        }
    };

    return (
        <div>
            <h3>Share on Social Media</h3>
            <button onClick={() => handleShare('facebook')}>Share on Facebook</button>
            <button onClick={() => handleShare('twitter')}>Share on Twitter</button>
            <button onClick={() => handleShare('instagram')}>Share on Instagram</button>
        </div>
    );
}

export default SocialMediaIntegration;
