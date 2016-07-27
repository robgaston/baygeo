(function () {
  var cdnjs = '//cdnjs.cloudflare.com/ajax/libs/';
  require.config({
      paths: {
        'jquery': cdnjs + 'jquery/2.2.1/jquery.min',
        'jquery-ui': cdnjs + 'jqueryui/1.10.4/jquery-ui.min',
        'knockout': cdnjs + 'knockout/3.4.0/knockout-min',
        'underscore': cdnjs + 'underscore.js/1.7.0/underscore-min',
        'firebase': '//www.gstatic.com/firebasejs/3.2.0/firebase'
      },
      shim: {
        'jquery-ui': {
            deps: ['jquery']
        },
        'firebase': {
            exports: 'firebase'
        },
      }
  });

  require(['knockout', 'database', 'underscore', 'drag-drop'], function (ko, database, _) {
    var vm = {
      team: ko.observableArray()
    };

    var teamMemberFactory = function(key, data) {
      var team = ko.observable(data.team);
      database.ref('members/' + key + '/team').on('value', function (snapshot) {
        var val = snapshot.val();
        if (team()!==val) {
          team(val);
        }
      });
      return {
        id: key,
        name: data.name,
        team: ko.computed({
            read: function() {
              return team();
            },
            write: function(val) {
              database.ref('members/' + key + '/team').set(val);
            }
        })
      };
    };

    var teamFilterFactory = function (filterValue) {
      return ko.computed(function() {
        return _.filter(vm.team(), function (member) {
          return member.team() === filterValue;
        });
      });
    }

    vm.tileTeam = teamFilterFactory('tile');
    vm.clientTeam = teamFilterFactory('client');
    vm.unassignedTeam = teamFilterFactory(null);

    var teamSetterFactory = function(value) {
      return function(member) {
        if (member) {
          member.team(value);
        }
      };
    };

    vm.addToClient = teamSetterFactory('client');
    vm.addToTile = teamSetterFactory('tile');
    vm.unassign = teamSetterFactory(null);

    database.ref("members")
      .once("value")
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var member = teamMemberFactory(
            childSnapshot.key,
            childSnapshot.val()
          );
          vm.team.push(member);
        });
      });

    ko.applyBindings(vm);
  });
})();
