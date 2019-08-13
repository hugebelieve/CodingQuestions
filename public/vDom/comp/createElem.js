export default (tagName, {attr = {}, children = []} = {}) => {
    return {
        tagName,
        attr,
        children
    }
}