var app = angular.module('Campus360', []);

app.controller('dashboardcontroller', function ($scope) {

    console.log("Dashboard controller is loaded");

    $scope.collegename = "Fisat";
    $scope.totalstudents = 1200;
    $scope.totalfaculty = 100;
    $scope.fees = 25600;
    $scope.today = new Date();
    $scope.department = ["CSE", "ECE", "EEE", "MECH", "CIVIL"];
    $scope.selectedDepartment = "CSE";



    $scope.showdashboard = true;
    $scope.showAddStudentForm = false;

    $scope.students = [
        { name: "Varsha" },
        { name: "John" },
        { name: "Alice" },
        { name: "Bob" }
    ];

    $scope.addStudent = function () {
        $scope.totalstudents++;
    };

});


