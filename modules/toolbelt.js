module.exports = ToolBelt = {
    removeFromArray : function removeFromArray(array, element ) {
        // I seriously have to write this? wow... how bass-ackwards is this lang?
        while (array.indexOf(element) !== -1) {
            array.splice(array.indexOf(element), 1);
        }
    },
    testFunc : function () {
        console.log("xx");
    }
}
