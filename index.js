// Code your solution in this file!



function distanceFromHqInBlocks(num2){
    return Math.abs(42-num2);
}

function distanceFromHqInFeet(num3){
    return 264 * (Math.abs(42-num3));
}

function distanceTravelledInFeet(start,destination){
    return 264 * (Math.abs(start-destination));
}

function calculatesFarePrice(start,destination){

    let travel = distanceTravelledInFeet(start,destination);

    if (travel <= 400){
        return 0;
    } else if(travel > 400 && travel < 2000){
        return .02 * (travel-400);
    }else if (travel > 2000 && travel <= 2500){
        return 25;
    }else {
        return "cannot travel that far";
    }
}