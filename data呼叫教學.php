<script>
$(document).on('click', '.我要被點擊', function() { 
	var click = $(this).data('click');
	$('.我要被呼叫').removeClass('hover'); //先移除其他已經被呼叫的hover
	$('.我要被呼叫[data-click=' + click + ']').addClass('hover');
});	

//指定物件下的data-符合某值
var 自訂變數名 = $('.xxxx[data名稱='+某變數+']');

</script>


<body>
	<div class="我要被點擊 第一位" data-click="click1"></div>
	<div class="我要被點擊 第二位" data-click="click2"></div>
	<div class="我要被點擊 第三位" data-click="click3"></div>

	<div class="我要被呼叫 第一位" data-click="click1"></div>
	<div class="我要被呼叫 第二位" data-click="click2"></div>
	<div class="我要被呼叫 第三位" data-click="click3"></div>
</body>


<style>
.我要被呼叫 { display:none; }
.我要被呼叫.hover { display:block; }
</style>