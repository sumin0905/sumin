/**
 * Created by Administrator on 2015-02-16.
 */

var imgDiv;
var src = [];
var page = 1;

$("#imgSearchBtn").click(function() {
    console.log("click");
    console.log($("#text").val());
    $.ajax({
        url: "https://api.flickr.com/services/rest",
        type: "GET",
        data: {
            "method": "flickr.photos.search",
            "api_key": "2de77d7982a4450908bfba757f645066",
            "text": $("#text").val(),
            "format": "json",
            "nojsoncallback": 1
        },
        dataType: "json",
        timeout: 30000,
        success: function(data) {
            console.log(data);

            var farm_id, server_id, photoId, secret;
            var imgDiv;

            for (var i = 0; i < data.photos.photo.length; i++) {
                farm_id = data.photos.photo[i].farm;
                server_id = data.photos.photo[i].server;
                photoId = data.photos.photo[i].id;
                secret = data.photos.photo[i].secret;

                //사진url만드는 부분
                src.push('https://farm' + farm_id + '.staticflickr.com/' + server_id + '/' + photoId + '_' + secret + '_m.jpg');
            }

            for (var i = 0; i < 20; i++) {

                imgDiv = document.createElement("li");
                imgDiv.className = "item-masonry";
                
                
                var imgTag = $('<img />');
                imgTag.attr("src", src[i]);
                
                imgTag.click(function(event) {
                	console.log(event);
                	$.ajax({
            			url: "test00.jsp",
            			type: "GET",
            			data:{ "url" : event.target.src
            			},
	        	        dataType: "text",
	        	        timeout: 30000,
	        	        
	        	        success: function(data) {
	        	            console.log(data);
	        	           alert("성공");
	        	           alert(data);
	        	            var imgTag1 = $('<img />');
	                        imgTag1.attr("src", event.target.src);
	                       
	                        $('#dropRegion').append(imgTag1);
    	        }  	       
    		});
                	
                });
                
                var imgContainer = $('<div class="the-box default margin mansory-inner">');
                
                imgContainer.append(imgTag);
                
                $(imgDiv).append(imgContainer);
                

                document.getElementById("masonryOl").appendChild(imgDiv);

                $(".container-masonry ol li div img").draggable({
                    helper: "clone",
                    drag: function (event, ui) {
                        console.log("dragging");
                    }
                });
            }
        },

        error: function(xhr, textStatus, errorThrown) {
            alert("실패" + textStatus + "(HTTP-" + xhr.staus + "/" + errorThrown + ")'");
            console.log("실패" + textStatus + "(HTTP-" + xhr.staus + "/" + errorThrown + ")'");
        }
    })
});



/*
$("#dropRegion").droppable({
    accept: '.container-masonry ol li div img',
    drop: function(event, ui) {
        console.log("sfsdfsd");
        $(this).append($(ui.helper).clone());
    }
});*/

function moreImg() {
    if(page == 1) {
        for(var i=20; i < 40; i++) {
            imgDiv = document.createElement("li");
            imgDiv.className = "item-masonry";
            imgDiv.innerHTML = '<div class="the-box default margin mansory-inner">'
            + '<img src="' + src[i] + '" id="searchImg"' + i + '></div>';

            document.getElementById("masonryOl").appendChild(imgDiv);
        }
        page++;
        $(".container-masonry ol li div img").draggable({
            helper: "clone",
            drag: function (event, ui) {
                console.log("dragging");
            }
        });
    }
    else if(page == 2) {
        for(var i=20; i < 40; i++) {
            imgDiv = document.createElement("li");
            imgDiv.className = "item-masonry";
            imgDiv.innerHTML = '<div class="the-box default margin mansory-inner">'
            + '<img src="' + src[i] + '" id="searchImg"' + i + '></div>';

            document.getElementById("masonryOl").appendChild(imgDiv);
        }
        page++;
        $(".container-masonry ol li div img").draggable({
            helper: "clone",
            drag: function (event, ui) {
                console.log("dragging");
            }
        });
    }
    else if(page == 3) {
        for(var i=20; i < 40; i++) {
            imgDiv = document.createElement("li");
            imgDiv.className = "item-masonry";
            imgDiv.innerHTML = '<div class="the-box default margin mansory-inner">'
            + '<img src="' + src[i] + '" id="searchImg"' + i + '></div>';

            document.getElementById("masonryOl").appendChild(imgDiv);
        }
        page++;
        $(".container-masonry ol li div img").draggable({
            helper: "clone",
            drag: function (event, ui) {
                console.log("dragging");
            }
        });
    }
    else if(page == 4) {
        for(var i=20; i < 40; i++) {
            imgDiv = document.createElement("li");
            imgDiv.className = "item-masonry";
            imgDiv.innerHTML = '<div class="the-box default margin mansory-inner">'
            + '<img src="' + src[i] + '" id="searchImg"' + i + '></div>';

            document.getElementById("masonryOl").appendChild(imgDiv);
        }
        page++;
        $(".container-masonry ol li div img").draggable({
            helper: "clone",
            drag: function (event, ui) {
                console.log("dragging");
            }
        });
    }
};

