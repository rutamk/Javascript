//Write a fn which can convert the time inout given in 12hrs format to 24 hrs format

const convertTo24HrsFormat = (time) => {
    const isPM = time.endsWith("PM");
    let [hour, minute] = time.slice(0, -2).split(":");

    hour = Number(hour);

    if (isPM && hour !== 12) hour += 12;
    if (!isPM && hour === 12) hour = 0;

    return `${String(hour).padStart(2, "0")}:${minute.padStart(2, "0")}`;
};


// const convertTo24HrsFormat = (time) => {
//     const isPM = time.slice(-2) === "PM";
//     const cleanTime = time.slice(0,-2)
//     const times = cleanTime.split(':');
//     if(!isPM){
//         if(times[0].length === 1){
//             times[0] = "0" + times[0];
//         }
//         if(times[0] === "12"){
//             times[0] = "00";
//         }
//         if(times[1].length === 1){
//             times[1] = "0" + times[1];
//         }
//         return times.join(":");
//     }else{
//         var hour = parseInt(times[0]);
//         hour = hour === 12 ? 12 : hour + 12;
//         if(times[1].length === 1){
//             times[1] = "0" + times[1];
//         }
//         return String(hour) + ":" + times[1];
//     }
// }

console.log(convertTo24HrsFormat("12:00AM"));
console.log(convertTo24HrsFormat("1:5PM"));