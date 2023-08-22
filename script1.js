$(document).ready(function(){
	$('img[src="/static/images/placeholder.jpg"]').each(function(index, el) {
		$(el).attr('src', $(el).data('real-src'));
	});
	$('img[src="/static/images/author.png"]').each(function(index, el) {
		$(el).attr('src', $(el).data('real-src'));
	});
})



const menbtn = document.querySelector('.menu button');
const overlay = document.querySelector('.hiddensidebar');
const hiddenclose = document.getElementById('hiddensidebarclose');
const overlayclose = document.getElementById('closebtn');

if(menbtn){
	menbtn.addEventListener('click', function(){
		overlay.classList.toggle('active');
		hiddenclose.classList.toggle('active');
		overlayclose.classList.toggle('active');
	})
}

if(hiddenclose){
	hiddenclose.addEventListener('click', function(){
		overlay.classList.toggle('active');
		overlayclose.classList.toggle('active');
		hiddenclose.classList.toggle('active');
	})
}
if(overlayclose){
	overlayclose.addEventListener('click', function(){
		overlay.classList.toggle('active');
		overlayclose.classList.toggle('active');
		hiddenclose.classList.toggle('active');
	})
}


    var notificationbtn = document.getElementById('notification');
    var notifbox = document.querySelector('.notificationbox');
    var profilebtn = document.getElementById('profilebtn');
    var profilecard = document.querySelector('.profilecard');  
    if(profilebtn){
        profilebtn.addEventListener('click', () => {
            profilecard.classList.toggle('active');
		if(notifbox.classList.contains('active')){
		     notifbox.classList.remove('active');
		}
        })
    }

