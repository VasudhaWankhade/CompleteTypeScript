"use strict";
// enum 
var Subjects;
(function (Subjects) {
    Subjects[Subjects["Maths"] = 0] = "Maths";
    Subjects[Subjects["Physics"] = 1] = "Physics";
    Subjects[Subjects["Chemistry"] = 2] = "Chemistry";
    Subjects[Subjects["English"] = 3] = "English";
})(Subjects || (Subjects = {}));
if (Subjects.Physics > -1) {
    console.log('Physics included');
}
