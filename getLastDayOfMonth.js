'use strict';
angular.module('shared.filters.lastDayOfMonth', [])
    //return the last day of a given month
    .filter('lastDayOfMonth',  function() {
        return function(mth) {
            switch (mth)
            {
              case 'Apr':
              case 'Jun':
              case 'sep':
              case 'Nov':
                  return 30;
                  break;
              case 'Feb':
                  return 28;
                  break;
              default:
                  return 31;
            }
        }
    });