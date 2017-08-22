(function () {
  'use strict';

  angular
    .module('core')
    .controller('HeaderController', HeaderController);

  HeaderController.$inject = ['$scope', '$state', 'Authentication', 'menuService'];

  function HeaderController($scope, $state, Authentication, menuService) {
    var vm = this;

    vm.accountMenu = menuService.getMenu('account').items[0];
    vm.authentication = Authentication;
    vm.isCollapsed = false;
    vm.menu = menuService.getMenu('topbar');

    $scope.$on('$stateChangeSuccess', stateChangeSuccess);

    vm.test=function(){
      console.log("Hii");
    }
    /*vm.save=function (isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.meetingForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.meeting._id) {
        vm.meeting.$update(successCallback, errorCallback);
      } else {
        vm.meeting.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $state.go('meetings.view', {
          meetingId: res._id
        });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }*/

    function stateChangeSuccess() {
      // Collapsing the menu after navigation
      vm.isCollapsed = false;
    }

    /*Zoom.login({email:"cheryl@supportingmamas.org",password:"Supporting2017"},function(data){
          console.log("sucesssss"+JSON.stringify(data));
        })
        Zoom.getMeeting({meeting_number:824952884},
          function(result){
            console.log(JSON.stringify(result));
            console.log(JSON.stringify(result["occurences"]));
            console.log(JSON.stringify(result["created_at"]));
          }
        )
        Zoom.listMeeting({page_size:15,page_number:1},
      function(data){
        console.log("sucesssss"+JSON.stringify(data));
        var i;
         for(i=0;i<data["total_records"];i++){
           var tbd = document.getElementById("tbd");
           var row = tbd.insertRow(0);

            var x = document.createElement("TD");
            var t = document.createTextNode(data["meetings"][i]["topic"]);
            x.appendChild(t);
            row.appendChild(x);

            var x = document.createElement("TD");
            var t = document.createTextNode(data["meetings"][i]["start_time"]);
            x.appendChild(t);
            row.appendChild(x);



            var x1 = document.createElement("TD");
          //  var t1 = document.createTextNode(data["meetings"][i]["join_url"]);
            //x1.appendChild(t1);
            //row.appendChild(x1);
            var x2 = document.createElement("A");
            var t2 = document.createTextNode(data["meetings"][i]["join_url"]);
            x2.setAttribute("href", data["meetings"][i]["join_url"]);
            x2.appendChild(t2);

            x1.appendChild(x2);
            row.appendChild(x1);

            var x = document.createElement("TD");
            var t = document.createTextNode(data["meetings"][i]["topic"]);
            x.appendChild(t);
            row.appendChild(x);

            var x1 = document.createElement("TD");

            var x2 = document.createElement("button");
            var t2 = document.createTextNode("Register");
            x2.setAttribute("ng-click", "mc.save('true')");
            x2.appendChild(t2);
            x1.appendChild(x2);
            row.appendChild(x1);
          }
   }
 )*/

   // Save Meeting
  /* function save(isValid) {
     if (!isValid) {
       $scope.$broadcast('show-errors-check-validity', 'vm.form.meetingForm');
       return false;
     }

     // TODO: move create/update logic to service
     if (vm.meeting._id) {
       vm.meeting.$update(successCallback, errorCallback);
     } else {
       vm.meeting.$save(successCallback, errorCallback);
     }

     function successCallback(res) {
       $state.go('meetings.view', {
         meetingId: res._id
       });
     }

     function errorCallback(res) {
       vm.error = res.data.message;
     }
   }*/
  }
}());
