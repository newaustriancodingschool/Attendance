
$.fn.carouselStyle = function(prop)
{
	'use strict';
	var settings = $.extend(
	{
		myCarousel: this,
		carouselHeight: '550px',	// it is better to specify the height to prevent responsive issues.
        arrows: false,

        indicators: true,
        indicatorStyle: 'text',	// text or image
        // for text indicatora
            indicatorWidth: 'auto',
            indicatorHeight: '30px',
            indicatorEdgesStyle: 'custom',	//sharp or rounded or custom with ratio.
            indicatorFontColor: 'white',
        // for text indicatora
        // for image indicatora
            indicatorImageWidth: '100px',
            indicatorImageHeight: '30px',
        // for image indicatora
        	indicatorEdgesRatio: '30px',	// required with custom only.

        imgWidth: '100%',
        glassyBackground: true,
        glassyColor: '#000000',
        fontColor: 'white',
        glassyOpacity: '0.5',
        carouselCaptionHeight: this.find('.item .caption'),
	}, prop);

    // Adding class active to first item and first indicator
    //    settings.myCarousel.find('.carousel-indicators li').eq(0).addClass('active');
    //    settings.myCarousel.find('.item').eq(0).addClass('active');
    // Adding class active to first item and first indicator

	// Assign height property to the carousel
		settings.myCarousel.css({height: settings.carouselHeight, overflow: 'hidden'});
	// Assign height property to the carousel

    // Image width/Hiehgt of background Image
        var sliderImg = this.find('.item > img');
        sliderImg.css({width: settings.imgWidth, height: settings.carouselHeight});
    // Image width/Hiehgt of background Image

	// Carousel Controls
    	var arrows = settings.myCarousel.find('.carousel-control'),
    		indicator = settings.myCarousel.find('.carousel-indicators'),
    		list = indicator.find('li');
        if(settings.arrows) {arrows.show();}else{arrows.hide();}
        if(settings.indicators) {indicator.show(); indicatorStyle();}else{indicator.hide();}
        // Indicators style programming
            function indicatorStyle()
            {
            	if(settings.indicatorStyle == 'text')
            	{
        			list.css({
        			width: settings.indicatorWidth,
        			padding: '0px 15px',
        			height: settings.indicatorHeight,
        			lineHeight: settings.indicatorHeight,
					color: settings.indicatorFontColor,
					fontStyle: 'bold',
					// fontStyle: 'italic',
					textIndent: 0,
					fontSize: '16px'
        			});
            			if(settings.indicatorEdgesStyle == 'sharp')
            			{
            					list.css({borderRadius: '0'});
            			}else if(settings.indicatorEdgesStyle == 'rounded')
        				{
        					list.css({borderRadius: '50%'});
        				}else if(settings.indicatorEdgesStyle == 'custom')
        				{
        					if (settings.indicatorEdgesRatio != undefined)
        					{
        						list.css({borderRadius: settings.indicatorEdgesRatio});
        					}else
        					{
        						list.css({borderRadius: '0'});
        						console.log('Please specify edge ratio with the property custom.')
        					}
        				}
        		}else if (settings.indicatorStyle == 'image')
        		{
                    for(var n=0; n < sliderImg.length; n++)
                    {
                        sliderImg.eq(n).clone().appendTo(list.eq(n));
                    }
        			list.css({
					textIndent: 0,
					background: 'transparent',
					border: '0px',
					width: settings.indicatorImageWidth,
					height: settings.indicatorImageHeight,

        		});
        			list.find('img').css({
        				width: settings.indicatorImageWidth,
        				height: settings.indicatorImageHeight,
        			});
        			if(settings.indicatorEdgesStyle == 'sharp')
    				{

    						list.find('img').css({borderRadius: '0px'});
    				}else if (settings.indicatorEdgesStyle == 'rounded')
    				{
    						list.find('img').css({borderRadius: '50%'});
    				}else if(settings.indicatorEdgesStyle == 'custom')
    				{
    					if (settings.indicatorEdgesRatio != undefined)
    					{
    						list.find('img').css({borderRadius: settings.indicatorEdgesRatio});
    					}else
    					{
    						list.find('img').css({borderRadius: '0'});
    						console.log('Please specify edge ratio with the property custom.')
    					}
    				}

        		}
        	// end of function
            }
        // Indicators style programming
    // Carousel Controls

	// Make caption alignment to center
    	if(settings.carouselHeight != undefined)
    	{
    		settings.carouselCaptionHeight.css({
        		top: ((parseInt(settings.carouselHeight) - settings.carouselCaptionHeight.height()) / 2),
        		bottom: ((parseInt(settings.carouselHeight) - settings.carouselCaptionHeight.height()) / 2)
        	});
    	}else
    	{
    		console.log('carouseHeight is required property, please set this peoperty first.');
    	}
    // Make caption alignment to center

    // Glassy part programming
    	var glassy = settings.myCarousel.find('.glassyBackground');
	 	var s = settings.glassyColor,
				patt = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/,
				matches = patt.exec(s),
				rgba = "rgba("+parseInt(matches[1], 16)+","+parseInt(matches[2], 16)+","+parseInt(matches[3], 16)+","+settings.glassyOpacity+")";
    	if(settings.glassyBackground)
    	{
    		glassy.css({
        		background: settings.glassyColor,
				height: '100%',
				width: '100%',
				padding: '30px',
				backgroundColor: rgba,
				color: settings.fontColor,
				borderRadius: '10px'
        	});
        	glassy.find('.text > *').css({
        		opacity: 1,
        	});
    	}
    // Glassy part programming
    console.log('carouselStyle.js is a new plugin for controlling bootstrap carousel interface with strong UX design stander (v1.0)');
}

