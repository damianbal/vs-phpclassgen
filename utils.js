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

        let indexAddition = 1;

        // src dir not found so use it might be Laravel (use app directory instead of src)
        if(srcIndex === -1)
        {   
            srcIndex = pathElements.lastIndexOf("app");
            indexAddition = 0;
        }


        let namespaceElements = pathElements.slice(srcIndex + indexAddition,
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
