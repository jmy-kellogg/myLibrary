app.controller('scrollerCtrl', function($scope, BooksFactory) {
    var pictures = [];

    BooksFactory.fetchAll()
        .then(function(data) {
            data.forEach(function(item) {
                pictures.push(item.picture)
            });
            $scope.books = data;
        })
        .then(function() {
            /* Create an array to hold the different image positions */
            var itemPositions = [];
            var numberOfItems = pictures.length;
            /* Assign each array element a CSS class based on its initial position */
            function assignPositions() {
                for (var i = 0; i < numberOfItems; i++) {
                    if (i === 0) {
                        itemPositions[i] = 'left-hidden';
                    } else if (i === 1) {
                        itemPositions[i] = 'farLeft';
                    } else if (i === 2) {
                        itemPositions[i] = 'left';
                    } else if (i === 3) {
                        itemPositions[i] = 'middle';
                    } else if (i === 4) {
                        itemPositions[i] = 'right';
                    } else if (i === 5) {
                        itemPositions[i] = 'farRight';
                    } else {
                        itemPositions[i] = 'right-hidden';
                    }
                }
                /* Add each class to the corresponding element */
                $('#scroller .item').each(function(index) {
                    $(this).addClass(itemPositions[index]);
                });
            }

            /* To scroll, we shift the array values by one place and reapply the classes to the images */
            function scroll(direction) {
                if (direction === 'prev') {
                    itemPositions.push(itemPositions.shift());
                } else if (direction === 'next') {
                    itemPositions.unshift(itemPositions.pop());
                }
                $('#scroller .item').removeClass('left-hidden farLeft left middle right farRight right-hidden').each(function(index) {
                    $(this).addClass(itemPositions[index]);
                });
            }

            /* Do all this when the DOMs ready */
            // $(document).ready(function() {

            assignPositions();

            // var autoScroll = window.setInterval("scroll('next')", 4000);

            /* Hover behaviours */
            $('#scroller').hover(function() {
                // window.clearInterval(autoScroll);
                $('.nav').stop(true, true).fadeIn(200);
            }, function() {
                // autoScroll = window.setInterval("scroll('next')", 4000);
                $('.nav').stop(true, true).fadeOut(200);
            });

            /* Click behaviours */
            $('.prev').click(function() {
                scroll('prev');
            });
            $('.next').click(function() {
                scroll('next');
            });

            /*Click behaviours on book*/
            $('.middle').click(function() {
                $(this).removeClass('middle');
                $(this).addClass('backCover')
            });
            // $('.backCover').click(function(){
            //     console.log("clicked")
            //     $(this).removeClass('backCover');
            //     $(this).addClass('middle')
            // });

            // });


        })

})