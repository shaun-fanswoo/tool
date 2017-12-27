
    var timeStamp = new Date().getTime();
    $(window).mousewheel(function(event, delta, deltaX, deltaY) {

	    var timeNow = new Date().getTime();
	     if (timeNow - timeStamp < 200) {
			        timeStamp = timeNow;
			        return;
			    } else {
			        timeStamp = timeNow;
			        if(delta == -1){
					if (n < num_content){
					n++
					}		
					}
					else
					{
						if(n>1)
						{
						n--
							}	
					}
			    }
	    	
			
			
	});