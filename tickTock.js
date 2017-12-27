function timer(jquery_selector){
			var time = parseInt($(jquery_selector).text());
			if(time < $(jquery_selector).data('count') )
			{
				$(jquery_selector).text(time + 1);
				setTimeout(function(){
					timer(jquery_selector);
				}, 20);
			}
		}
function time_tickTock(jquery_selector){
	   		timer('#timer .minute:eq(0)');
	   	}


<div class="minute" data-count="44" style="opacity: 1;">44</div>