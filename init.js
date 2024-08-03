const Group = require("./models/Group");
const Permission = require("./models/Permission");

exports.createPerm = async () => {
  const data = [
    {
      "name": "create category",
      "description": "create category for news & forum",
      "iconName": "cat",
      "libIconName": "lib cat",
      "serviceName": "setting",
      "prefixName": "category",
      "funcName": "create",
      "number": 0,
    },
    {
      "name": "update category",
      "description": "update category for news & forum",
      "iconName": "cat",
      "libIconName": "lib cat",
      "serviceName": "setting",
      "prefixName": "category",
      "funcName": "up",
      "number": 1,
    },

    {
      "name": "update subcategory in category",
      "description": "delete or add subCategory to category",
      "iconName": "cat",
      "libIconName": "lib cat",
      "serviceName": "setting",
      "prefixName": "category",
      "funcName": "upsub",
      "number": 2,
    },

    {
      "name": "all category",
      "description": " get all category",
      "iconName": "cat",
      "libIconName": "lib cat",
      "serviceName": "setting",
      "prefixName": "category",
      "funcName": "all",
      "number": 3,
    },

    {
      "name": "remove category",
      "description": " remove category",
      "iconName": "cat",
      "libIconName": "lib cat",
      "serviceName": "setting",
      "prefixName": "category",
      "funcName": "rem",
      "number": 4,
    },

    {
      "name": "create subCategory",
      "description": "create subCategory",
      "iconName": "subCat",
      "libIconName": "lib subCat",
      "serviceName": "setting",
      "prefixName": "subcategory",
      "funcName": "create",
      "number": 5,
    },

    {
      "name": "update subCategory",
      "description": "update subCategory",
      "iconName": "subCat",
      "libIconName": "lib subCat",
      "serviceName": "setting",
      "prefixName": "subcategory",
      "funcName": "up",
      "number": 6,
    },

    {
      "name": "all subCategory",
      "description": "get all subCategory",
      "iconName": "subCat",
      "libIconName": "lib subCat",
      "serviceName": "setting",
      "prefixName": "subcategory",
      "funcName": "all",
      "number": 7,
    },

    {
      "name": "remove subCategory",
      "description": "remove subCategory",
      "iconName": "subCat",
      "libIconName": "lib subCat",
      "serviceName": "setting",
      "prefixName": "subcategory",
      "funcName": "rem",
      "number": 8,
    },

    {
      "name": "create group",
      "description": "create group",
      "iconName": "group",
      "libIconName": "lib group",
      "serviceName": "setting",
      "prefixName": "group",
      "funcName": "create",
      "number": 9,
    },

    {
      "name": "update group",
      "description": "update group",
      "iconName": "group",
      "libIconName": "lib group",
      "serviceName": "setting",
      "prefixName": "group",
      "funcName": "up",
      "number": 10,
    },

    {
      "name": "update perm in group",
      "description": "delete or add permission in group",
      "iconName": "group",
      "libIconName": "lib group",
      "serviceName": "setting",
      "prefixName": "group",
      "funcName": "updateperm",
      "number": 11,
    },

    {
      "name": "all group",
      "description": "get all group",
      "iconName": "group",
      "libIconName": "lib group",
      "serviceName": "setting",
      "prefixName": "group",
      "funcName": "all",
      "number": 12,
    },

    {
      "name": "one group",
      "description": "get one group",
      "iconName": "group",
      "libIconName": "lib group",
      "serviceName": "setting",
      "prefixName": "group",
      "funcName": "one",
      "number": 13,
    },

    {
      "name": "remove group",
      "description": "remove group",
      "iconName": "group",
      "libIconName": "lib group",
      "serviceName": "setting",
      "prefixName": "group",
      "funcName": "rem",
      "number": 14,
    },

    {
      "name": "create permission",
      "description": "create permission",
      "iconName": "permission",
      "libIconName": "lib permission",
      "serviceName": "setting",
      "prefixName": "permission",
      "funcName": "create",
      "number": 15,
    },

    {
      "name": "update permission",
      "description": "update permission",
      "iconName": "permission",
      "libIconName": "lib permission",
      "serviceName": "setting",
      "prefixName": "permission",
      "funcName": "up",
      "number": 16,
    },

    {
      "name": "all permission",
      "description": "get all permission",
      "iconName": "permission",
      "libIconName": "lib permission",
      "serviceName": "setting",
      "prefixName": "permission",
      "funcName": "all",
      "number": 17,
    },

    {
      "name": "remove permission",
      "description": "remove permission",
      "iconName": "permission",
      "libIconName": "lib permission",
      "serviceName": "setting",
      "prefixName": "permission",
      "funcName": "rem",
      "number": 18,
    },

    {
      "name": "remove permission",
      "description": "remove permission",
      "iconName": "variable",
      "libIconName": "lib variable",
      "serviceName": "setting",
      "prefixName": "variable",
      "funcName": "rem",
      "number": 19,
    },
  ];

  const find = await Permission.find({ serviceName: "setting" });

  if (find.length) {
    console.log("perm hast");
  } else {
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      const create = await Permission.create(element);
    }
  }
};

exports.createBaseUser = async () => {
  const user = await Group.find({ name: "baseUser" });
  const admin = await Group.find({ name: "superAdmin" });

  if (user.length) {
    console.log("base user hast");
  } else {
    const data = {
      name: "baseUser",
      description: "for all user",
      autoApprove: true,
      number: 100,
    };

    await Group.create(data);
  }

  if (admin.length) {
    console.log("base user hast");
  } else {
    const data = {
      name: "superAdmin",
      description: "access all app",
      autoApprove: true,
      number: 0,
    };

    await Group.create(data);
  }
};
exports.creaete= async () => {

}