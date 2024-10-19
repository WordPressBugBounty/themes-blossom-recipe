import { Icon, Sidebar, Card, Heading } from "../../components";
import { __ } from '@wordpress/i18n';

const Homepage = () => {
    const cardLists = [
        {
            iconSvg: <Icon icon="site" />,
            heading: __('Site Identity', 'blossom-recipe'),
            buttonText: __('Customize', 'blossom-recipe'),
            buttonUrl: cw_dashboard.custom_logo
        },
        {
            iconSvg: <Icon icon="colorsetting" />,
            heading: __("Color Settings", 'blossom-recipe'),
            buttonText: __('Customize', 'blossom-recipe'),
            buttonUrl: cw_dashboard.colors
        },
        {
            iconSvg: <Icon icon="layoutsetting" />,
            heading: __("Layout Settings", 'blossom-recipe'),
            buttonText: __('Customize', 'blossom-recipe'),
            buttonUrl: cw_dashboard.layout
        },
        {
            iconSvg: <Icon icon="instagramsetting" />,
            heading: __("Instagram Settings", 'blossom-recipe'),
            buttonText: __('Customize', 'blossom-recipe'),
            buttonUrl: cw_dashboard.instagram
        },
        {
            iconSvg: <Icon icon="generalsetting" />,
            heading: __("General Settings"),
            buttonText: __('Customize', 'blossom-recipe'),
            buttonUrl: cw_dashboard.general
        },
        {
            iconSvg: <Icon icon="footersetting" />,
            heading: __('Footer Settings', 'blossom-recipe'),
            buttonText: __('Customize', 'blossom-recipe'),
            buttonUrl: cw_dashboard.footer
        }
    ];

    const proSettings = [
        {
            heading: __('Header Layouts', 'blossom-recipe'),
            para: __('Choose from different unique header layouts.', 'blossom-recipe'),
            buttonText: __('Learn More', 'blossom-recipe'),
            buttonUrl: cw_dashboard?.get_pro
        },
        {
            heading: __('Multiple Layouts', 'blossom-recipe'),
            para: __('Choose layouts for blogs, banners, posts and more.', 'blossom-recipe'),
            buttonText: __('Learn More', 'blossom-recipe'),
            buttonUrl: cw_dashboard?.get_pro
        },
        {
            heading: __('Multiple Sidebar', 'blossom-recipe'),
            para: __('Set different sidebars for posts and pages.', 'blossom-recipe'),
            buttonText: __('Learn More', 'blossom-recipe'),
            buttonUrl: cw_dashboard?.get_pro
        },
        {
            heading: __('Top Bar Settings', 'blossom-recipe'),
            para: __('Show a notice or newsletter at the top.', 'blossom-recipe'),
            buttonText: __('Learn More', 'blossom-recipe'),
            buttonUrl: cw_dashboard?.get_pro
        },
        {
            para: __('Boost your website performance with ease.', 'blossom-recipe'),
            heading: __('Performance Settings', 'blossom-recipe'),
            buttonText: __('Learn More', 'blossom-recipe'),
            buttonUrl: cw_dashboard?.get_pro
        },
        {
            para: __('Choose typography for different heading tags.', 'blossom-recipe'),
            heading: __('Typography Settings', 'blossom-recipe'),
            buttonText: __('Learn More', 'blossom-recipe'),
            buttonUrl: cw_dashboard?.get_pro
        },
        {
            para: __('Import the demo content to kickstart your site.', 'blossom-recipe'),
            heading: __('One Click Demo Import', 'blossom-recipe'),
            buttonText: __('Learn More', 'blossom-recipe'),
            buttonUrl: cw_dashboard?.get_pro
        },
        {
            para: __('Easily place ads on high conversion areas.', 'blossom-recipe'),
            heading: __('Advertisement Settings', 'blossom-recipe'),
            buttonText: __('Learn More', 'blossom-recipe'),
            buttonUrl: cw_dashboard?.get_pro
        },
    ];

    const sidebarSettings = [
        {
            heading: __('We Value Your Feedback!', 'blossom-recipe'),
            icon: "star",
            para: __("Your review helps us improve and assists others in making informed choices. Share your thoughts today!", 'blossom-recipe'),
            imageurl: <Icon icon="review" />,
            buttonText: __('Leave a Review', 'blossom-recipe'),
            buttonUrl: cw_dashboard.review
        },
        {
            heading: __('Knowledge Base', 'blossom-recipe'),
            para: __("Need help using our theme? Visit our well-organized Knowledge Base!", 'blossom-recipe'),
            imageurl: <Icon icon="documentation" />,
            buttonText: __('Explore', 'blossom-recipe'),
            buttonUrl: cw_dashboard.docmentation
        },
        {
            heading: __('Need Assistance? ', 'blossom-recipe'),
            para: __("If you need help or have any questions, don't hesitate to contact our support team. We're here to assist you!", 'blossom-recipe'),
            imageurl: <Icon icon="supportTwo" />,
            buttonText: __('Submit a Ticket', 'blossom-recipe'),
            buttonUrl: cw_dashboard.support
        }
    ];

    return (
        <>
            <div className="customizer-settings">
                <div className="cw-customizer">
                    <div className="video-section">
                        <div className="cw-settings">
                            <h2>{__('Blossom Recipe Tutorial', 'blossom-recipe')}</h2>
                        </div>
                        <iframe src="https://www.youtube.com/embed/W4572TDQEjY?si=WOu6fTWOyEgD_FJv" title={__( 'How to Start Your First Food Blog In 2023 | Blossom Recipe Free WordPress Theme', 'blossom-recipe' )} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <Heading
                        heading={__( 'Quick Customizer Settings', 'blossom-recipe' )}
                        buttonText={__( 'Go To Customizer', 'blossom-recipe' )}
                        buttonUrl={cw_dashboard?.customizer_url}
                        openInNewTab={true}
                    />
                    <Card
                        cardList={cardLists}
                        cardPlace='customizer'
                        cardCol='three-col'
                    />
                    <Heading
                        heading={__( 'More features with Pro version', 'blossom-recipe' )}
                        buttonText={__( 'Go To Customizer', 'blossom-recipe' )}
                        buttonUrl={cw_dashboard?.customizer_url}
                        openInNewTab={true}
                    />
                    <Card
                        cardList={proSettings}
                        cardPlace='cw-pro'
                        cardCol='two-col'
                    />
                    <div className="cw-button">
                        <a href={cw_dashboard?.get_pro} target="_blank" className="cw-button-btn primary-btn long-button">{__('Learn more about the Pro version', 'blossom-recipe')}</a>
                    </div>
                </div>
                <Sidebar sidebarSettings={sidebarSettings} openInNewTab={true} />
            </div>
        </>
    );
}

export default Homepage;