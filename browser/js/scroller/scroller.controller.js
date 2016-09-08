app.controller('ScrollerCtrl', function($scope, BooksFactory, $state) {

    BooksFactory.fetchAll()
        .then(function(data) {
            var pictures = [];
            data.forEach(function(item) {
                pictures.push(item.picture)
            });
            $scope.books = data;
            return pictures.length
        })
        .then(function(numbOfPics) {

            /* Create an array to hold the different image positions */
            var itemPositions = [];
            var numberOfItems = numbOfPics;
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
            $(document).ready(function() {

            // var autoScroll = window.setInterval("scroll('next')", 4000);
            assignPositions();


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


            });

            return numberOfItems
        })
    $scope.getMiddle = function(){
        BooksFactory.deleteBook(+$('.middle').attr("id"))
        .then(function(resp){
            console.log('sad to see a good book go');
            $state.go('scroller')
            // $scope.$apply()
        });

        }
   

})
