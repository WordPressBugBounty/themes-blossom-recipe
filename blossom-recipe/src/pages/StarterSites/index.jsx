import { Icon } from "../../components";
import { __ } from "@wordpress/i18n";
import { singleRecipe, recipeFeatured, recipeCourses } from "../../components/images"

const StarterSites = () => {
    return (
        <>
            <div className="starter-sites">
                <div className="image-wrapper">
                    <div className="image">
                        <img src={singleRecipe} alt={__( 'Demo image', 'blossom-recipe' )} />
                        <div className="reverse-image">
                            <img src={singleRecipe} alt={__( 'Demo reverse image', 'blossom-recipe' )} />
                        </div>
                    </div>
                    <div className="image">
                        <img src={recipeFeatured} alt={__( 'Demo image', 'blossom-recipe' )} />
                        <div className="reverse-image">
                            <img src={recipeFeatured} alt={__( 'Demo reverse image', 'blossom-recipe' )} />
                        </div>
                    </div>
                    <div className="image">
                        <img src={recipeCourses} alt={__( 'Demo image', 'blossom-recipe' )} />
                        <div className="reverse-image">
                            <img src={recipeCourses} alt={__( 'Demo reverse image', 'blossom-recipe' )} />
                        </div>
                    </div>
                </div>
                <div className="text-wrapper">
                    <h2>{__('One Click Demo Import', 'blossom-recipe')}</h2>
                    <p dangerouslySetInnerHTML={{ __html: sprintf(__('Get started effortlessly! Use our one-click demo import feature to set up your site instantly with all the sample data and settings. Please note that importing demo content will overwrite your existing site content and settings. %s Not recommended if you have existing content. %s', 'blossom-recipe'), '<b>', '</b>') }} />
                    <div className="cw-button">
                        <a href={cw_dashboard.get_pro} target="_blank" className="cw-button-btn primary-btn">
                            {__('Get Starter Sites', 'blossom-recipe')} <Icon icon="arrow" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StarterSites;