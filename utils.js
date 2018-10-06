var path = require("path");

module.exports = {
    getNamespaceFromPath: function (filePath) {

    },
    getClassNameFromPath: function (filePath) {
        return path.basename(filePath).replace(".php", "")
    },
    getNamespaceFromPath: function (filePath) {

        let className = this.getClassNameFromPath(filePath)

        filePath = filePath.replace(".php", "");

        let pathElements = filePath.split("/");

        let srcIndex = pathElements.lastIndexOf("src");

        let namespaceElements = pathElements.slice(srcIndex + 1,
            pathElements.lastIndexOf(className)).map(pathElement => {
                // every namespace need to be capitalized
                return pathElement.charAt(0).toUpperCase() + pathElement.slice(1);
            })

        return namespaceElements.join("\\");
    },
    generateCode: function (filePath, prefix = "class", nsVendor = "") {
        let ns = this.getNamespaceFromPath(filePath)
        let cn = this.getClassNameFromPath(filePath)

        if(nsVendor.length > 1)
        {
            ns = nsVendor + "\\" + ns
        }

        return `<?php

namespace ${ns};

${prefix} ${cn}
{
}
`;
    }
}
