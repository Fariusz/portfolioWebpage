function timeDifference(d, dd) {
    var hour = 60 * 60 * 1000,
        day = hour * 24,
        month = day * 30,
        ms = Math.abs(d - dd),
        months = parseInt(ms / month, 10);

    ms = ms - months * month;
    var days = parseInt(ms / day, 10);
    ms -= days * day;
    var hours = parseInt(ms / hour, 10);
    ms -= hours * hour;

    return [
        months + " miesięcy"
    ].join(", ");
}

function date() {
    var timeNow = new Date();

    var timeStartedStudies = new Date(2018, 8, 1);
    var timeElapsedStudies = timeNow.getTime() - timeStartedStudies.getTime();

    var timeStartedJob = new Date("07/01/2020 08:00 AM");
    var timeElapsedJob = new Date();
    console.log("timeElapsedJob" + timeElapsedJob);

    document.getElementById('semestr').innerHTML = (timeElapsedStudies / (1000 * 60 * 60 * 24 * 30 * 6)).toPrecision(1);
    document.getElementById('doswiadczenie').innerHTML += timeDifference(timeStartedJob, timeElapsedJob);
}
