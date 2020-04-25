class Utils {
    isValid(value) {
        if(value instanceof Object){
            return value.size !== 0;
        }else {
            return value !== null && value !== undefined && value !== "" && value !== "Select";
        }
    }
}
const utils = new Utils();
export default utils;
