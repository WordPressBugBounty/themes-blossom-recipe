<?php
/**
 * Typography Settings
 *
 * @package Blossom_Recipe
 */

function blossom_recipe_customize_register_typography( $wp_customize ) {

    $wp_customize->add_section(
        'typography_image_section',
        array(
            'title'    => __( 'Typography', 'blossom-recipe' ),
            'priority'    => 35,
        )
    );

   
    /** Note */
    $wp_customize->add_setting(
        'typography_text',
        array(
            'default'           => '',
            'sanitize_callback' => 'wp_kses_post' 
        )
    );

    $wp_customize->add_control(
        new Blossom_Recipe_Note_Control( 
            $wp_customize,
            'typography_text',
            array(
                'section'     => 'typography_image_section',
                'description' => sprintf( __( '%1$sThis feature is available in Pro version.%2$s %3$sUpgrade to Pro%4$s ', 'blossom-recipe' ),'<div class="featured-pro"><span>', '</span>', '<a href="https://blossomthemes.com/wordpress-themes/blossom-recipe-pro/?utm_source=blossom_recipe&utm_medium=customizer&utm_campaign=upgrade_to_pro" target="_blank">', '</a></div>' ),
            )
        )
    );


    $wp_customize->add_setting( 
        'typography_settings', 
        array(
            'default'           => 'one',
            'sanitize_callback' => 'blossom_recipe_sanitize_radio'
        ) 
    );

    $wp_customize->add_control(
        new Blossom_Recipe_Radio_Image_Control(
            $wp_customize,
            'typography_settings',
            array(
                'section'     => 'typography_image_section',
                'choices'     => array(
                    'one'       => get_template_directory_uri() . '/images/pro/typography.png',
                ),
            )
        )
    );
}
add_action( 'customize_register', 'blossom_recipe_customize_register_typography' );