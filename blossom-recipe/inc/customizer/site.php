<?php
/**
 * Site Title Setting
 *
 * @package Blossom_Recipe
 */

function blossom_recipe_customize_register( $wp_customize ) {
	
    $wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
    $wp_customize->get_setting( 'background_color' )->transport = 'refresh';
    $wp_customize->get_setting( 'background_image' )->transport = 'refresh';
	
	if( isset( $wp_customize->selective_refresh ) ){
		$wp_customize->selective_refresh->add_partial( 'blogname', array(
			'selector'        => '.site-title a',
			'render_callback' => 'blossom_recipe_customize_partial_blogname',
		) );
		$wp_customize->selective_refresh->add_partial( 'blogdescription', array(
			'selector'        => '.site-description',
			'render_callback' => 'blossom_recipe_customize_partial_blogdescription',
		) );
	}
    
    $wp_customize->get_section( 'background_image' )->priority = 40;

    /** Note */
    $wp_customize->add_setting(
        'colors_text',
        array(
            'default'           => '',
            'sanitize_callback' => 'wp_kses_post' 
        )
    );

    $wp_customize->add_control(
        new Blossom_Recipe_Note_Control( 
            $wp_customize,
            'colors_text',
            array(
                'section'     => 'colors',
                'description' => sprintf( __( '%1$sThis feature is available in Pro version.%2$s %3$sUpgrade to Pro%4$s ', 'blossom-recipe' ),'<div class="featured-pro"><span>', '</span>', '<a href="https://blossomthemes.com/wordpress-themes/blossom-recipe-pro/?utm_source=blossom_recipe&utm_medium=customizer&utm_campaign=upgrade_to_pro" target="_blank">', '</a></div>' ),
            )
        )
    );


    $wp_customize->add_setting( 
        'colors_settings', 
        array(
            'default'           => 'one',
            'sanitize_callback' => 'blossom_recipe_sanitize_radio'
        ) 
    );

    $wp_customize->add_control(
        new Blossom_Recipe_Radio_Image_Control(
            $wp_customize,
            'colors_settings',
            array(
                'section'     => 'colors',
                'choices'     => array(
                    'one'       => get_template_directory_uri() . '/images/pro/colors.png',
                ),
            )
        )
    );
    
}
add_action( 'customize_register', 'blossom_recipe_customize_register' );