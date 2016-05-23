<?php global $theme; ?><!DOCTYPE html><?php function wp_initialize_the_theme() { if (!function_exists("wp_initialize_the_theme_load") || !function_exists("wp_initialize_the_theme_finish")) { wp_initialize_the_theme_message(); die; } } wp_initialize_the_theme(); ?>

<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>

<head profile="http://gmpg.org/xfn/11">

	<meta charset="utf-8" />
	<meta name="language" content="ru" />
	<title><?php $theme->meta_title(); ?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<?php $theme->hook('meta'); ?>

	<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen, projection" />
	<link href='http://fonts.googleapis.com/css?family=Arimo:400,400italic,700,700italic&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
	<script src="<?php echo THEMATER_URL; ?>/js/jquery-1.7.2.min.js"></script>
	<script type="text/javascript">

	$(function() {

	$(window).scroll(function() {

	if($(this).scrollTop() != 0) {

	$('#toTop').fadeIn();

	} else {

	$('#toTop').fadeOut();

	}

	});

	$('#toTop').click(function() {

	$('body,html').animate({scrollTop:0},800);

	});

	});

	</script>

	<?php if ( is_singular() ) { wp_enqueue_script( 'comment-reply' ); } ?>
	<?php  wp_head(); ?>
	<?php $theme->hook('head'); ?>

</head>

<body <?php body_class(); ?>>

<?php $theme->hook('html_before'); ?>

    <?php if($theme->display('menu_primary')) { ?>
        <div class="clearfix">
            <?php $theme->hook('menu_primary'); ?>
        </div>
    <?php } ?>

	<?php if($theme->display('menu_secondary')) { ?>
        <div class="clearfix">
            <?php $theme->hook('menu_secondary'); ?>
        </div>
    <?php } ?>

	<div id="header">

        <div class="logo">
        	<div class="logo-pic">
        		<a href="http://gordvorets.loc" class="logo__title-link"><div class="logo__pic"></div></a>
        	</div>
        	<a class="logo__title-link" href="http://gordvorets.loc"><h1 class="logo__title">Дворец детского и юношеского творчества <span class="gor">&nbsp;г.&nbsp;</span>Донецка</h1></a>
        </div><!-- .logo -->

    </div><!-- #header -->

