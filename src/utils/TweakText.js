const TweakText = (str) => {
    str = str.replace(/-/g, ' ');
    return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = TweakText